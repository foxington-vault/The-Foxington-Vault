// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: { shim: false },
	app: {
		head: {
			link: [
				{ rel: "icon", href: "./favicon.ico" }
			]
		}
	},
	modules: ['@nuxt/content'],
	css: ['~/assets/css/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
