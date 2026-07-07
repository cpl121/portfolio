import '@testing-library/jest-dom/vitest';

// jsdom does not implement the Web Animations API, which Svelte 5 uses for
// transitions. This stub completes every animation on the next tick.
if (!Element.prototype.animate) {
	Element.prototype.animate = function () {
		const animation = {
			onfinish: null as null | ((event?: unknown) => void),
			cancel() {},
			finish() {
				animation.onfinish?.();
			},
			finished: Promise.resolve()
		};
		setTimeout(() => animation.onfinish?.(), 0);
		return animation as unknown as Animation;
	};
}

// jsdom does not implement matchMedia, which the theme store reads at import
// time. Tests that care about the value stub it explicitly.
if (!window.matchMedia) {
	window.matchMedia = (query: string): MediaQueryList =>
		({
			matches: false,
			media: query,
			onchange: null,
			addEventListener: () => {},
			removeEventListener: () => {},
			addListener: () => {},
			removeListener: () => {},
			dispatchEvent: () => false
		}) as MediaQueryList;
}
