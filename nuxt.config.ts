// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
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
        { rel: "manifest", href: "./manifest.json" },
      ],
      script: [
        {
          hid: "clarity",
          children: `(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.CLARITY_ID}");`,
        },
      ],
    },
  },
  modules: ["@nuxt/content", "@nuxtjs/color-mode"],
  runtimeConfig: {
    public: {
      gtag: process.env.GTAG_ID,
    },
  },
  plugins: [
    { src: "~/plugins/vercel.ts", mode: "client" },
    { src: "~/plugins/gtag.ts", mode: "client" },
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
