import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import FeaturedCard from './FeaturedCard.svelte';
import { FEATURED_PROJECTS } from '$lib/data';

describe('FeaturedCard', () => {
	const project = FEATURED_PROJECTS[0];

	it('links to the detail page with trailing slash and renders an accessible image', () => {
		render(FeaturedCard, { project });
		expect(screen.getByRole('link')).toHaveAttribute('href', `/projects/${project.slug}/`);
		expect(screen.getByRole('img')).toHaveAttribute('alt', project.imageAlt);
		expect(screen.getByText(project.title)).toBeInTheDocument();
	});

	it('shows at most 4 technologies from the stack', () => {
		const bigStack = { ...project, stack: ['a', 'b', 'c', 'd', 'e', 'f'] };
		render(FeaturedCard, { project: bigStack });
		expect(screen.getAllByRole('listitem')).toHaveLength(4);
	});

	it('hides the badge when showBadge is false', () => {
		render(FeaturedCard, { project, showBadge: false });
		expect(screen.queryByText('★ Featured')).not.toBeInTheDocument();
	});
});
