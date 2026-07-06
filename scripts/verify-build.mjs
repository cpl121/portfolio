import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BUILD = 'build';
// Confidentiality restriction with 3DforScience's end client.
const FORBIDDEN = ['3d-cell-preview', 'phago-five'];
const TEXT_EXT = /\.(html|js|css|xml|json|txt|webmanifest|svg)$/;
const SITE_URL = 'https://cpl121.eth.limo';
const failures = [];

// 1. Confidential strings anywhere in the build output.
function* walk(dir) {
	for (const name of readdirSync(dir)) {
		const path = join(dir, name);
		if (statSync(path).isDirectory()) yield* walk(path);
		else yield path;
	}
}

for (const file of walk(BUILD)) {
	if (!TEXT_EXT.test(file)) continue;
	const content = readFileSync(file, 'utf8').toLowerCase();
	for (const bad of FORBIDDEN) {
		if (content.includes(bad)) failures.push(`CONFIDENTIAL: "${bad}" found in ${file}`);
	}
}

// 2. Sitemap must match the actually prerendered pages (both directions).
const slugs = readdirSync(join(BUILD, 'projects'), { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name);
const expected = new Set(
	['', 'projects/', 'about/', ...slugs.map((slug) => `projects/${slug}/`)].map(
		(path) => `${SITE_URL}/${path}`
	)
);
const sitemap = readFileSync(join(BUILD, 'sitemap.xml'), 'utf8');
const locs = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]));

for (const url of expected) if (!locs.has(url)) failures.push(`SITEMAP: missing ${url}`);
for (const url of locs) if (!expected.has(url)) failures.push(`SITEMAP: unexpected ${url}`);

if (failures.length) {
	console.error(failures.join('\n'));
	process.exit(1);
}
console.log(
	`verify-build OK: ${slugs.length} projects, sitemap with ${locs.size} URLs, no forbidden strings.`
);
