// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxtjs/apollo', '@unocss/nuxt', 'nuxt-icon', '@nuxt/image', 'nuxt-swiper', '@vee-validate/nuxt'],
  srcDir: 'src/',
  ssr: false,

  i18n: {
    vueI18n: './i18n.config.ts'
  },

  features: {
    inlineStyles: false,
  },

  css: ['~/assets/css/main.css'],

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
    SERVICES_ID: process.env.SERVICES_ID || "",
    TEMPLATE_ID: process.env.TEMPLATE_ID || "",
    USER_ID: process.env.PUBLIC_KEY || "",
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

  // veeValidate: {
  //   // disable or enable auto imports
  //   autoImports: true,
  //   // Use different names for components
  //   componentNames: {
  //     Form: 'VeeForm',
  //     Field: 'VeeField',
  //     ErrorMessage: 'VeeErrorMessage',
  //   },
  // },
  image: {
    format: ['webp'],
    domains: ['crunux.me'],
    dir: 'assets/images'
  },

  compatibilityDate: '2024-07-03',
})