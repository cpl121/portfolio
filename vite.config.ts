import { sveltekit } from '@sveltejs/kit/vite';
import { plugin as mdPlugin, Mode } from 'vite-plugin-markdown';
import sass from 'sass';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), mdPlugin({ mode: [Mode.HTML] })],
	base: '',
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass
			}
		}
	}
});
