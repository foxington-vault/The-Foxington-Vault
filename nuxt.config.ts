// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	typescript: { shim: false },
	modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	tailwindcss: {
		exposeConfig: true,
		viewer: false
	}
})
