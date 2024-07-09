const { NUXT_PUBLIC_API_URL = 'http://localhost' } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: NUXT_PUBLIC_API_URL,
    },
  },

  modules: ['@nuxtjs/apollo', '@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt'],

  apollo: {
    clients: {
      default: {
        httpEndpoint: NUXT_PUBLIC_API_URL,
      },
    },
  },

  fonts: {
    families: [{ name: 'Space Grotesk', provider: 'bunny' }],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      charset: 'utf-8',
      viewport: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5',
    },
  },

  devtools: { enabled: true },
  telemetry: false,
  compatibilityDate: '2024-07-09',
});
