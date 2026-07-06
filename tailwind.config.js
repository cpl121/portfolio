/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['selector', '[data-mode="dark"]'],
	theme: {
		extend: {
			screens: {
				sm: '640px',
				md: '800px',
				lg: '1064px'
			},
			invert: {
				50: '0.5'
			},
			borderWidth: {
				3: '3px',
				6: '6px'
			},
			fontFamily: {
				title: ['Architects Daughter', 'cursive'],
				main: ['Poiret One', 'cursive'],
				home: ['Kaushan Script', 'cursive']
			},
			colors: {
				// Semantic design tokens — the single source of truth for brand color.
				accent: {
					DEFAULT: '#14b8a6', // teal-500
					strong: '#0d9488' // teal-600
				},
				// Theme-aware link color (see --link in app.css).
				link: 'var(--link)'
			}
		}
	},
	plugins: []
};
