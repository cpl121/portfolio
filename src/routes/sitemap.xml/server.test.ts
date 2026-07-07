import { describe, expect, it } from 'vitest';
import { SITE_URL } from '$lib/constants';
import { FEATURED_PROJECTS } from '$lib/data';
import { GET } from './+server';

describe('sitemap.xml', () => {
	it('contains the home, static pages and every featured project — nothing else', async () => {
		const xml = await GET().text();
		const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

		expect(locs).toContain(`${SITE_URL}/`);
		expect(locs).toContain(`${SITE_URL}/projects/`);
		expect(locs).toContain(`${SITE_URL}/about/`);
		for (const project of FEATURED_PROJECTS) {
			expect(locs).toContain(`${SITE_URL}/projects/${project.slug}/`);
		}
		expect(locs).toHaveLength(3 + FEATURED_PROJECTS.length);
	});
});
