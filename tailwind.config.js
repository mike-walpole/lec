/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				haas: ['Haas', 'sans-serif'],
				display: ['ABChanel', 'sans-serif'],
				display2: ['Playfair', 'sans-serif'],
				sadiq: ['Sadiq', 'sans-serif']
			}
		}
	},
	plugins: []
};
