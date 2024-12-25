// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    apiBasePath: 'http://127.0.0.1:8000/api',
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    // Analyze the bundle to understand what's taking up space
    analyze: true,
    // Extract CSS to improve performance
    extractCSS: true,
    optimizeCSS: true,
    terser: {
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true,
    },
  },
  pages: true,
  components: ["~/components", "~/components/layout",],

  css: ["~/assets/main.css",],



})
