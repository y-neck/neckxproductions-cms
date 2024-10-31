/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./storyblok/**/*.vue",
  ],
  theme: {
    screens: {
      minSize: '120px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: '#eee',
      background: '#1f1f1f',
      secondary: '#535353',
      accent: '#2997FF',
      errorRed: '#B5235F',
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },

  },
  extend: {	/* Extend default css values */
    fontSize: {
      'p': ['1rem', {
        lineHeight: '1.5rem',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'h3': ['1.4rem', {
        lineHeight: 'auto',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'h2': ['1.75rem', {
        lineHeight: 'auto',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'h1': ['2rem', {
        lineHeight: 'auto',
        letterSpacing: '0rem',
        fontWeight: '400',
      }],
      'sectionTitle': ['2rem', {
        lineHeight: 'auto',
        letterSpacing: '0.04rem',
        fontWeight: '700',
        fontStyle: 'italic',
      }]
    },
    prefix: 'tw-', /* PostCSS: Add prefix for tailwind classes */
  },
  plugins: [require('@tailwindcss/typography')],
  corePlugins: {
    preflight: true,	/* PreCSS: reset default stylings for html elements to be defined by custom styles */
  }
};

