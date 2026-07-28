#!/usr/bin/env node
// Pin a directory to public IPFS via Pinata and print its root CID.
//
// Usage:  PINATA_JWT=<jwt> node scripts/pin-to-ipfs.mjs [dir]
//
// Diagnostics go to stderr; the CID is written as the last line of stdout so a
// workflow can capture it with `$(node scripts/pin-to-ipfs.mjs build | tail -n1)`.

import { readdir, readFile } from 'node:fs/promises';
import { join, relative, basename } from 'node:path';

const dir = process.argv[2] ?? 'build';
const jwt = process.env.PINATA_JWT;

if (!jwt) {
	console.error('Missing PINATA_JWT environment variable.');
	process.exit(1);
}

/** Recursively collect every file path under `d`. */
async function walk(d) {
	const files = [];
	for (const entry of await readdir(d, { withFileTypes: true })) {
		const path = join(d, entry.name);
		if (entry.isDirectory()) files.push(...(await walk(path)));
		else files.push(path);
	}
	return files;
}

const root = basename(dir); // single top-level dir -> becomes the CID root
const pinName = `portfolio-${root}`; // metadata tag used to find & prune old pins
const keep = Number(process.env.PINATA_KEEP ?? 3); // how many recent pins to retain
const files = await walk(dir);

if (files.length === 0) {
	console.error(`No files found in ${dir}/`);
	process.exit(1);
}

const form = new FormData();
for (const file of files) {
	const data = await readFile(file);
	const rel = relative(dir, file).split(/[\\/]/).join('/');
	form.append('file', new Blob([data]), `${root}/${rel}`);
}
// CIDv1 (base32) is the modern, gateway- and ENS-friendly form.
form.append('pinataOptions', JSON.stringify({ cidVersion: 1 }));
form.append('pinataMetadata', JSON.stringify({ name: pinName }));

console.error(`Pinning ${files.length} files from ${dir}/ to Pinata…`);
const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
	method: 'POST',
	headers: { Authorization: `Bearer ${jwt}` },
	body: form
});

const body = await res.json().catch(() => ({}));
if (!res.ok) {
	console.error(`Pinata error ${res.status}:`, JSON.stringify(body));
	process.exit(1);
}

const cid = body.IpfsHash;
if (!cid) {
	console.error('No IpfsHash in Pinata response:', JSON.stringify(body));
	process.exit(1);
}

// Sanity-check that index.html sits at the CID root (not wrapped in a
// subdirectory, which would make eth.limo serve a listing instead of the site).
// Checked via a public subdomain gateway — NOT gateway.pinata.cloud, which now
// 403s shared traffic. Non-fatal: the pin already succeeded and public gateways
// can lag a few minutes behind Pinata, so a miss here must not fail the deploy.
const probe = `https://${cid}.ipfs.dweb.link/index.html`;
let reachable = false;
for (let attempt = 0; attempt < 5; attempt++) {
	try {
		const check = await fetch(probe, { redirect: 'follow' });
		if (check.ok) {
			reachable = true;
			break;
		}
	} catch {
		// gateway may still be propagating — retry
	}
	await new Promise((resolve) => setTimeout(resolve, 3000));
}

if (reachable) {
	console.error(`Verified — index.html reachable at ${probe}`);
} else {
	console.error(
		`Warning: could not confirm ${cid}/index.html via a public gateway yet ` +
			`(it may still be propagating). The pin succeeded; continuing.`
	);
}

// Prune old deploys to stay within Pinata's free tier. Keep the `keep` most
// recent pins (current + a couple of previous ones, so whatever the ENS record
// currently points to stays available while you switch it over). Best-effort:
// a failure here never fails the deploy — the new pin is already live.
try {
	const list = await fetch(
		`https://api.pinata.cloud/data/pinList?status=pinned&metadata[name]=${encodeURIComponent(pinName)}&pageLimit=1000`,
		{ headers: { Authorization: `Bearer ${jwt}` } }
	);
	const { rows = [] } = await list.json();
	const stale = rows
		.filter((row) => row.metadata?.name === pinName)
		.sort((a, b) => new Date(b.date_pinned) - new Date(a.date_pinned))
		.slice(keep) // everything older than the `keep` most recent
		.filter((row) => row.ipfs_pin_hash !== cid);

	for (const row of stale) {
		const del = await fetch(`https://api.pinata.cloud/pinning/unpin/${row.ipfs_pin_hash}`, {
			method: 'DELETE',
			headers: { Authorization: `Bearer ${jwt}` }
		});
		console.error(`${del.ok ? 'Unpinned' : 'Failed to unpin'} old build ${row.ipfs_pin_hash}`);
	}
} catch (error) {
	console.error('Skipped pruning old pins:', error.message);
}

// CID on the last stdout line for the workflow to capture.
console.log(cid);
