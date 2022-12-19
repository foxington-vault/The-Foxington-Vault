// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["~/assets/css/main.scss"],
  app: {
    head: {
      link: [{ rel: "icon", href: "./favicon.ico" }],
      script: [
        {
          src: "https://umami.kurofusky.xyz/umami.js",
          async: true,
          defer: true,
          "data-website-id": "d1e1b841-cee6-4cd2-a777-477700d4f5a2",
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode", "@vueuse/motion/nuxt"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
