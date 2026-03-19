// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxt/image',
    '@vee-validate/nuxt',
    '@nuxtjs/mdc',
  ],
  srcDir: 'app/',
  ssr: true,
  nitro:{
    preset: 'netlify',
    prerender: {
      routes: ['/blogs']
    }
  },

  routeRules: {
    '/': {
      prerender: true
    },
    '/blogs/**': {
      prerender: true
    },
    '/projects': {
      prerender: true
    }
  },

  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' }
    ],
    defaultLocale: 'en',
    // lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      redirectOn: 'root' // recommended
    }
  },

  // i18n: {
  //   vueI18n: './i18n.config.ts'
  // },
  features: {
    inlineStyles: false,
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
    exposeConfig: false,
  },

  mdc: {
    highlight: {
      theme: 'github-dark',
      langs: ['js', 'ts', 'html', 'css', 'json', 'bash', 'shell', 'yaml', 'xml', 'markdown', 'md', 'mdx', 'vue', 'nginx', 'graphql', 'sql', 'dockerfile', 'python', 'py', 'sh', 'scss', 'mdc', 'yml', 'go', 'rust', 'rs', 'jsx', 'tsx', 'angular-ts', 'angular-html', 'astro', 'c++'],
      wrapperStyle: true,
    },
    components: {
      prose: true
    }
  },

  css: ['~/assets/css/main.css', '~/assets/css/tailwind.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark'
  },

  experimental: {
    viewTransition: true
  },

  runtimeConfig: {
    hygraphToken: import.meta.env.HYGRAPH_TOKEN,
    hygraphApi: import.meta.env.HYGRAPH_API,
    public: {
      servicesId: import.meta.env.SERVICES_ID,
      templateId: import.meta.env.TEMPLATE_ID,
      userId: import.meta.env.PUBLIC_KEY,
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: import.meta.env.HYGRAPH_API,
      }
    },
  },

  image: {
    format: ['webp'],
    domains: ['crunux.me'],
    dir: 'assets/images'
  },

  compatibilityDate: '2024-07-03',
});