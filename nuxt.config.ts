// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxtjs/apollo'],
  srcDir: 'src/',
  ssr: false,
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  css: ['~/assets/css/main.css', 'animate.css/animate.min.css'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },
  experimental: {
    viewTransition: true
  },
  runtimeConfig: {
    hygraphToken: process.env.HYGRAPH_TOKEN,
    hygraphApi: process.env.HYGRAPH_API,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: `${process.env.HYGRAPH_API}`,
        // tokenName: 'cross-hygraph',
        // tokenType: 'Bearer',
        // authHeader: 'Authorization',
        // tokenStorage: 'cookie'
      }
    },
  },
})
