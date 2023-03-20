/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
                sm: '640px',
                md: '800px',
                lg: '1064px',
            },
			invert: {
				50: '0.5'
			},
		},
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
		},
		fontFamily: {			
			'title': ['Architects Daughter', 'cursive'],
			'main': ['Poiret One', 'cursive'],
			'home': ['Kaushan Script', 'cursive'],
		}
	},
	plugins: []
};
