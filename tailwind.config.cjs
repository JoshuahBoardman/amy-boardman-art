/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'primary': ['Alexandria', 'sans-serif'],
			'logo': ['Yellowtail', 'cursive', 'sans-serif']
		  },
		  colors: {
			'primary': '#8b615b',
			'secondary': '#FFF9F9',
			'background': '#F7D5D5',
			'highlight': '#CC466D',
		  }
	},
	plugins: [],
}
