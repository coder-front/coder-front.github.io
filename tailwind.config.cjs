/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.svelte',
	],
	theme: {
		extend: {
			colors: {
				primary: '#3854FF',
				'coder-cyan': 'rgba(208,232,255,0.25)'
			},
		},
	},
	plugins: [],
}