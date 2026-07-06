import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { FEATURED_PROJECTS, HOME_FEATURED_PROJECTS, HOME_FEATURED_SLUGS } from './projects';

// vitest runs from the project root.
const STATIC_DIR = join(process.cwd(), 'static');

// Confidentiality restriction with 3DforScience's end client: the preview URLs
// must never ship with the site, in any form.
const FORBIDDEN_STRINGS = ['3d-cell-preview', 'phago-five'];

describe('FEATURED_PROJECTS (hand-edited content)', () => {
	it('has unique, url-safe slugs', () => {
		const slugs = FEATURED_PROJECTS.map((project) => project.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
		for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
	});

	it.each(FEATURED_PROJECTS)('image of "$slug" exists in static/', (project) => {
		expect(project.image).toMatch(/^\/images\/projects\//);
		expect(existsSync(join(STATIC_DIR, project.image))).toBe(true);
	});

	it.each(FEATURED_PROJECTS)('"$slug" has https links and non-empty fields', (project) => {
		for (const link of project.links) {
			expect(link.url).toMatch(/^https:\/\//);
			expect(link.label.length).toBeGreaterThan(0);
		}
		expect(project.title.length).toBeGreaterThan(0);
		expect(project.tagline.length).toBeGreaterThan(0);
		expect(project.imageAlt.length).toBeGreaterThan(0);
		expect(project.description.length).toBeGreaterThan(0);
		expect(project.stack.length).toBeGreaterThan(0);
	});

	it('HOME_FEATURED_SLUGS points to real slugs, in order', () => {
		const slugs = new Set(FEATURED_PROJECTS.map((project) => project.slug));
		for (const slug of HOME_FEATURED_SLUGS) expect(slugs.has(slug)).toBe(true);
		expect(HOME_FEATURED_PROJECTS.map((project) => project.slug)).toEqual(HOME_FEATURED_SLUGS);
	});

	it('contains no confidential 3DforScience strings', () => {
		const serialized = JSON.stringify(FEATURED_PROJECTS).toLowerCase();
		for (const forbidden of FORBIDDEN_STRINGS) expect(serialized).not.toContain(forbidden);
	});
});
