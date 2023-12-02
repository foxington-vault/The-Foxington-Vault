// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["nuxt-security", "@nuxt/image", "@nuxt/content"],
  app: {
    head: {
      bodyAttrs: {
        class: "bg-orange-500",
      },
      link: [
        {
          rel: "dns-prefetch",
          href: "https://res.cloudinary.com/",
        },
        {
          rel: "dns-prefetch",
          href: "https://www.youtube-nocookie.com/",
        },
      ],
      script: [
        {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`,
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_MEASUREMENT_ID}');
          `,
        },
      ],
    },
  },
  image: {
    quality: 80,
    format: ["webp"],
    cloudinary: {
      baseURL: "https://res.cloudinary.com/foxington-vault/image/upload",
    },
  },
  security: {
    hidePoweredBy: true,
    headers: {
      crossOriginResourcePolicy: "cross-origin",
      xXSSProtection: "1",
      xDNSPrefetchControl: "on",
      contentSecurityPolicy: {
        "script-src": [
          "'self'",
          "'unsafe-eval'",
          "'nonce-{{nonce}}'",
          "https:",
          "'strict-dynamic'",
        ],
        "connect-src": ["'self'", "https:", "www.google-analytics.com"],
        "img-src": ["'self'", "https:", "www.google-analytics.com"],
      },
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
