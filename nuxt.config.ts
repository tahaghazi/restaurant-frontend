// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    apiBasePath: 'http://127.0.0.1:8000/api',
    baseURL: 'http://127.0.0.1:8000/api/auth'

  },
  modules: [
    // "@pinia/nuxt",
    '@sidebase/nuxt-auth',
    // '@nuxtjs/proxy',
  ],

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

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: { '^/api/': '' },
    },
  },
  auth: {
    originEnvKey: 'http://127.0.0.1:8000/api',
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: 'http://127.0.0.1:8000/api/auth/login/', method: 'post' },
        signOut: { path: 'http://127.0.0.1:8000/api/auth/logout/', method: 'post' },
        signUp: { path: 'http://127.0.0.1:8000/api/auth/registration/', method: 'post' },
        getSession: { path: 'http://127.0.0.1:8000/api/auth/user/', method: 'get' },
      },
      token: {
        signInResponseTokenPointer: '/access_token',
        type: 'JWT',
        cookieName: 'access_token',
        headerName: 'Authorization',
        sameSiteAttribute: "lax",
        maxAgeInSeconds: ((60 * 60) * 24) * 7,
      },
      // refreshToken: {
      //   maxAgeInSeconds: (60 * 60 * 24 * 7) + 60,
      // },
      // refreshOnlyToken: false,
    },
    // session: {
    //   enableRefreshPeriodically: false,
    //   enableRefreshOnWindowFocus: false
    // }
  },
  // plugins: ['~/plugins/pinia.ts'],

  routeRules: {
    "/api-proxy/**": {
      proxy:  'http://127.0.0.1:8000/api' + "/**", ssr: true, swr: true },
  },

})