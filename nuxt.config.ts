// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  routeRules:{
    '/': {prerender: true},
    '/projects/**': {prerender: true},
  },
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
          href: 'https://neckxproductions.ch',
        },
      ],
      htmlAttrs: {
        lang: 'de' /* Set lang attribute on <html> tag */,
      },
      script: [
        // Matomo Tracking Code
        {
          hid: 'matomo', // Unique identifier for the script
          innerHTML: `
 var _paq = window._paq = window._paq || [];

  // accurately measure the time spent in the visit
  _paq.push(['enableHeartBeatTimer']);

  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title]);
  _paq.push(["setCookieDomain", "*.neckxproductions.ch"]);
  _paq.push(["setDoNotTrack", true]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytix.neckxproductions.ch/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '1']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
  console.log('matomo loaded');
  `,
          type: 'text/javascript',
        },
      ],
    },
  },
});