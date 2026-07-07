import { error } from '@sveltejs/kit';
import { FEATURED_PROJECTS } from '$lib/data';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () =>
	FEATURED_PROJECTS.map((project) => ({ slug: project.slug }));

export const load: PageLoad = ({ params }) => {
	const index = FEATURED_PROJECTS.findIndex((candidate) => candidate.slug === params.slug);
	if (index === -1) error(404, 'Project not found');

	return {
		project: FEATURED_PROJECTS[index],
		previous: FEATURED_PROJECTS[index - 1] ?? null,
		next: FEATURED_PROJECTS[index + 1] ?? null
	};
};
