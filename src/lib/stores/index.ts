import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type ModeType = 'light' | 'dark';

// Kept in sync with the inline script in app.html, which reads the same key
// before hydration to avoid a flash of the wrong theme.
const MODE_STORAGE_KEY = 'mode';

function getInitialMode(): ModeType {
	if (!browser) return 'dark';
	const stored = localStorage.getItem(MODE_STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

export const modeStore = writable<ModeType>(getInitialMode());

// App-lifetime singleton: this subscription is intentionally never disposed.
modeStore.subscribe((mode) => {
	if (browser) {
		localStorage.setItem(MODE_STORAGE_KEY, mode);
		document.documentElement.dataset.mode = mode;
	}
});

export function toggleMode() {
	modeStore.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
}
