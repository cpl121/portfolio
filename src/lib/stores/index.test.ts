import { beforeEach, describe, expect, it, vi } from 'vitest';
import { get } from 'svelte/store';

vi.mock('$app/environment', () => ({ browser: true }));

function stubMatchMedia(prefersLight: boolean) {
	vi.stubGlobal('matchMedia', vi.fn().mockReturnValue({ matches: prefersLight }));
}

// The module reads localStorage/matchMedia at import time, so each test
// re-imports a fresh copy.
async function importStore() {
	vi.resetModules();
	return await import('./index');
}

describe('modeStore', () => {
	beforeEach(() => {
		localStorage.clear();
		vi.unstubAllGlobals();
	});

	it('uses the value stored in localStorage when valid', async () => {
		localStorage.setItem('mode', 'light');
		const { modeStore } = await importStore();
		expect(get(modeStore)).toBe('light');
	});

	it('ignores corrupt values and falls back to matchMedia', async () => {
		localStorage.setItem('mode', 'banana');
		stubMatchMedia(true);
		const { modeStore } = await importStore();
		expect(get(modeStore)).toBe('light');
	});

	it('respects prefers-color-scheme without a stored preference', async () => {
		stubMatchMedia(false);
		const { modeStore } = await importStore();
		expect(get(modeStore)).toBe('dark');
	});

	it('toggleMode alternates, persists and updates <html data-mode>', async () => {
		localStorage.setItem('mode', 'dark');
		const { modeStore, toggleMode } = await importStore();

		toggleMode();

		expect(get(modeStore)).toBe('light');
		expect(localStorage.getItem('mode')).toBe('light');
		expect(document.documentElement.dataset.mode).toBe('light');
	});
});
