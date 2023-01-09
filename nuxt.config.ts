// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      link: [
        { rel: "icon", href: "./favicon.ico" },
        {
          rel: "preload",
          href: "fonts/LuckysTale-Body.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "preload",
          href: "fonts/LuckysTale-Bold-New.ttf",
          as: "font",
          type: "font/ttf",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@kevinmarrec/nuxt-pwa"],
  plugins: [{ src: "~/plugins/vercel.ts", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  pwa: {
		icon: false,
		meta: {
			lang: "en",
			title: "",
			ogTitle: "",
			ogSiteName: "The Foxingtion Vault",
			ogType: "",
			description: "",
			twitterCard: "summary",
		},
    manifest: {
      name: "The Foxington Vault",
      short_name: "Foxington Vault",
      orientation: "portrait",
      description: "",
      scope: "/",
      start_url: "/",
      theme_color: "#121314",
    },
  },
})
