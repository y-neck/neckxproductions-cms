// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
});
