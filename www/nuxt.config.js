const baseUrl = "http://localhost:8080";

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/vue-scrollTo.js", mode: "client" },
    { src: "~/plugins/vuelidate.js", mode: "client" },
    {
      src: '@/plugins/facebook-login.js',
      ssr: false,
    },
    {
      src: '@/plugins/facebook-sdk.js',
      ssr: false,
    },
    {
      src: '~/plugins/thailandAddress.js',
      ssr: false,
    }

  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    'cookie-universal-nuxt',
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  axios: {
    baseUrl: process.env.baseUrl,
    proxy: true
  },
  proxy: {
    "/api/": baseUrl
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  env: {
    // baseUrl: process.env.BASE_URL || "http://localhost:8080",
    baseUrl: 'http://128.199.207.76:8080',
    // FACEBOOK_CLIENT_ID: '2614720792121731',
  },
  router: {
    middleware: ['get-auth'],
  },

};
