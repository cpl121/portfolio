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
form.append('pinataMetadata', JSON.stringify({ name: `portfolio-${root}` }));

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

// Guard against directory-wrapping: index.html must sit at the CID root, or
// eth.limo would serve a directory listing instead of the site.
const probe = `https://gateway.pinata.cloud/ipfs/${cid}/index.html`;
let reachable = false;
for (let attempt = 0; attempt < 5; attempt++) {
	try {
		const check = await fetch(probe);
		if (check.ok) {
			reachable = true;
			break;
		}
	} catch {
		// gateway may still be propagating — retry
	}
	await new Promise((resolve) => setTimeout(resolve, 3000));
}

if (!reachable) {
	console.error(`Pinned CID ${cid} but ${cid}/index.html did not resolve — aborting.`);
	process.exit(1);
}

console.error(`Pinned OK — index.html reachable at ${probe}`);
console.log(cid);
