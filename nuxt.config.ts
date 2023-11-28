// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode'],
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
  }

})
