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
