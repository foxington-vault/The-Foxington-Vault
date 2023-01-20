import VueGtag from "vue-gtag"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: process.env.GTAG_ID,
      },
    },
    nuxtApp.$router
  )
})
