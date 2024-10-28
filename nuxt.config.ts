// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/apollo',
    '@unocss/nuxt',
    'nuxt-icon',
    '@nuxt/image',
    'nuxt-swiper',
    '@vee-validate/nuxt',
    '@nuxtjs/mdc',
  ],
  srcDir: 'src/',
  ssr: false,

  i18n: {
    vueI18n: './i18n.config.ts'
  },
  features: {
    inlineStyles: false,
  },

  mdc: {
    highlight: {
      theme: 'github-dark',
      langs: ['js', 'ts', 'html', 'css', 'json', 'bash', 'shell', 'yaml', 'xml', 'markdown', 'md', 'vue', 'nginx', 'graphql', 'sql', 'dockerfile', 'python', 'py', 'sh', 'scss', 'mdc', 'yml'],
      wrapperStyle: true
    },
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
    public: {
      servicesId: process.env.SERVICES_ID,
      templateId: process.env.TEMPLATE_ID,
      userId: process.env.PUBLIC_KEY,
    }
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