import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import Card from './Card.svelte';

describe('Card', () => {
	it('renders name as a link when the repo has a live url', () => {
		render(Card, { repo: { name: 'demo', description: 'A demo', url: 'https://demo.app' } });
		expect(screen.getByRole('link', { name: 'demo' })).toHaveAttribute('href', 'https://demo.app');
	});

	it('renders name as plain text without url, plus a GitHub link when present', () => {
		render(Card, {
			repo: { name: 'demo', description: 'A demo', githubUrl: 'https://github.com/x/demo' }
		});
		expect(screen.queryByRole('link', { name: 'demo' })).not.toBeInTheDocument();
		expect(screen.getByRole('heading')).toHaveTextContent('demo');
		expect(screen.getByRole('link', { name: 'View on Github' })).toHaveAttribute(
			'href',
			'https://github.com/x/demo'
		);
	});

	it('renders the description', () => {
		render(Card, { repo: { name: 'demo', description: 'A demo' } });
		expect(screen.getByText('A demo')).toBeInTheDocument();
	});
});
