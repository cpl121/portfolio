import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	testDir: 'tests/e2e',
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 1 : 0,
	reporter: process.env.CI ? 'github' : 'list',
	use: { baseURL: 'http://localhost:4173' },
	webServer: {
		// In CI the build already exists (previous step); locally it is built on demand.
		command: process.env.CI ? 'npm run preview' : 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: false,
		timeout: 120_000
	},
	projects: [
		{ name: 'desktop', use: { ...devices['Desktop Chrome'] }, testIgnore: '**/mobile-*.spec.ts' },
		{ name: 'mobile', use: { ...devices['Pixel 7'] }, testMatch: '**/mobile-*.spec.ts' }
	]
});
