/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue",
	],
	theme: {
		extend: {
			fontFamily: {
				'lucky-body': "LuckysTale-Body",
				'lucky-bold': "LuckysTale-Bold-New",
				'inter': 'Inter',
				'open-sans': 'Open Sans',
			}
		},
	},
	plugins: [],
}
