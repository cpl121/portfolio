import { describe, expect, it } from 'vitest';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Expandable from './Expandable.svelte';

const props = {
	title: 'Numen Games',
	summary: '<p>Detail</p>',
	technologies: ['Three.js', 'AWS']
};

describe('Expandable', () => {
	it('is closed by default: aria-expanded=false and no content', () => {
		render(Expandable, props);
		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
		expect(screen.queryByText('Detail')).not.toBeInTheDocument();
	});

	it('opens on click and shows summary and technologies', async () => {
		const user = userEvent.setup();
		render(Expandable, props);

		await user.click(screen.getByRole('button'));

		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
		expect(screen.getByText('Detail')).toBeInTheDocument();
		expect(screen.getByText('Three.js')).toBeInTheDocument();
	});

	it('closes on second click (waits for the fly outro)', async () => {
		const user = userEvent.setup();
		render(Expandable, { ...props, initialOpen: true });

		await user.click(screen.getByRole('button'));

		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');
		await waitForElementToBeRemoved(() => screen.queryByText('Detail'));
	});

	it('respects initialOpen', () => {
		render(Expandable, { ...props, initialOpen: true });
		expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
	});
});
