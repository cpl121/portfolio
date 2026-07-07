import { expect, test } from '@playwright/test';

const ROUTES = [
	'/',
	'/about/',
	'/projects/',
	'/projects/numen-games/',
	'/projects/overon-ott/',
	'/projects/interactive-cell/',
	'/projects/phago/',
	'/projects/hoy-entreno/',
	'/projects/scoura/'
];

// Known, accepted noise (add here only with justification).
const IGNORED_ERRORS = [/fonts\.g(oogleapis|static)\.com/, /WebGL|GPU|SwiftShader/i];

for (const route of ROUTES) {
	test(`route ${route} loads without errors`, async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(error.message));
		page.on('console', (message) => {
			if (message.type() === 'error') errors.push(message.text());
		});
		// Client-side navigation re-fires the GitHub fetch: deterministic stub.
		await page.route('https://api.github.com/**', (routeHandler) =>
			routeHandler.fulfill({ json: [], status: 200 })
		);

		const response = await page.goto(route);
		expect(response?.status()).toBe(200);
		await expect(page.locator('h1, h2').first()).toBeVisible();

		const realErrors = errors.filter(
			(error) => !IGNORED_ERRORS.some((pattern) => pattern.test(error))
		);
		expect(realErrors).toEqual([]);
	});
}

test('internal links across all pages respond (basic crawl)', async ({ page, request }) => {
	const seen = new Set<string>();
	for (const route of ROUTES) {
		await page.goto(route);
		const hrefs = await page
			.locator('a[href]')
			.evaluateAll((anchors) => anchors.map((a) => (a as HTMLAnchorElement).href));
		for (const href of hrefs) {
			const url = new URL(href);
			if (url.origin !== new URL(page.url()).origin || seen.has(url.pathname)) continue;
			seen.add(url.pathname);
			const response = await request.get(url.pathname);
			expect(response.status(), `broken link: ${url.pathname} (on ${route})`).toBeLessThan(400);
		}
	}
});
