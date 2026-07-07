import { expect, test } from '@playwright/test';

test('the mobile menu opens, navigates and closes', async ({ page }) => {
	await page.goto('/');
	const burger = page.getByRole('button', { name: 'Toggle navigation menu' });

	await burger.click();
	await expect(burger).toHaveAttribute('aria-expanded', 'true');

	await page
		.getByRole('navigation', { name: 'Mobile' })
		.getByRole('link', { name: 'Projects' })
		.click();
	await expect(page).toHaveURL(/\/projects\/$/);
	await expect(burger).toHaveAttribute('aria-expanded', 'false');
	// The overlay releases the body scroll lock.
	await expect(page.locator('body')).not.toHaveClass(/no-scroll/);
});

test('Escape closes the menu', async ({ page }) => {
	await page.goto('/');
	const burger = page.getByRole('button', { name: 'Toggle navigation menu' });

	await burger.click();
	await page.keyboard.press('Escape');

	await expect(burger).toHaveAttribute('aria-expanded', 'false');
});
