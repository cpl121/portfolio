import { expect, test } from '@playwright/test';

test.use({ colorScheme: 'dark' });

test('theme toggle persists across reloads without FOUC', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-mode', 'dark');

	await page.getByRole('button', { name: 'Switch to light mode' }).click();
	await expect(page.locator('html')).toHaveAttribute('data-mode', 'light');
	await expect.poll(() => page.evaluate(() => localStorage.getItem('mode'))).toBe('light');

	await page.reload();
	// The inline script in app.html applies the mode before hydration.
	await expect(page.locator('html')).toHaveAttribute('data-mode', 'light');
});

test('respects prefers-color-scheme: light without a stored preference', async ({ browser }) => {
	const context = await browser.newContext({ colorScheme: 'light' });
	const page = await context.newPage();
	await page.goto('/');
	await expect(page.locator('html')).toHaveAttribute('data-mode', 'light');
	await context.close();
});
