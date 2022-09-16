/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			fontFamily: {
				'lucky-body': "LuckysTale-Body",
				'lucky-bold': "LuckysTale-Bold-New",
			}
		},
	},
	plugins: [],
}
