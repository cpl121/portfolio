import type { ModeType } from '$lib/enums';
import { writable } from 'svelte/store';

export const modeStore = writable<ModeType>('dark');

export function toggleMode() {
	modeStore.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
}
