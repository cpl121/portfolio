import { describe, expect, it } from 'vitest';
import { FEATURED_PROJECTS } from '$lib/data';
import type { FeaturedProject } from '$lib/interfaces';
import { entries, load } from './+page';

interface SlugPageData {
	project: FeaturedProject;
	previous: FeaturedProject | null;
	next: FeaturedProject | null;
}

const call = (slug: string) => load({ params: { slug } } as never) as SlugPageData;

describe('projects/[slug]/+page.ts', () => {
	it('entries generates one entry per project (full prerender)', () => {
		expect(entries()).toEqual(FEATURED_PROJECTS.map((project) => ({ slug: project.slug })));
	});

	it('returns the project and its neighbours for a middle slug', () => {
		const result = call(FEATURED_PROJECTS[1].slug);
		expect(result.project.slug).toBe(FEATURED_PROJECTS[1].slug);
		expect(result.previous?.slug).toBe(FEATURED_PROJECTS[0].slug);
		expect(result.next?.slug).toBe(FEATURED_PROJECTS[2].slug);
	});

	it('first project has no previous, last has no next', () => {
		const first = call(FEATURED_PROJECTS[0].slug);
		expect(first.previous).toBeNull();

		const last = call(FEATURED_PROJECTS[FEATURED_PROJECTS.length - 1].slug);
		expect(last.next).toBeNull();
	});

	it('throws 404 for an unknown slug', () => {
		expect(() => call('nope')).toThrowError(expect.objectContaining({ status: 404 }));
	});
});
