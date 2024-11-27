// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/preamble.client.ts'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    ['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_KEY }],
    'shadcn-nuxt',
    '@nuxtjs/mdc',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: {
      storyblok_version: process.env.STORYBLOK_VERSION,
    },
  },
  shadcn: {
    // Prefix for imported components
    prefix: 'shadcn-',
    // ShadCN directory
    componentDir: './components/ui',
  },
  mdc: {
    components: {
      prose: true,
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'canonical',
          href: 'https://neckXproductions.ch',
        },
      ],
      htmlAttrs: {
        lang: 'de' /* Set lang attribute on <html> tag */,
      },
    },
  },
});
