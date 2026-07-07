import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// Served by IPFS gateways (e.g. eth.limo) as the custom not-found page.
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		// Relative asset paths so the build works from any IPFS gateway / CID subpath,
		// not just the root domain.
		paths: {
			relative: true
		},
		alias: {
			$components: 'src/components',
			$lib: 'src/lib'
		}
	}
};

export default config;
