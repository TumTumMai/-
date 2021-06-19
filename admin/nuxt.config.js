export default {
  mode: "universal",
  mode: "spa",
  /*
   ** Headers of the page
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/plugins/fontawesome-free/css/all.min.css" },
      {
        rel: "stylesheet",
        href:
          "https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/icheck-bootstrap/icheck-bootstrap.min.css"
      },
      { rel: "stylesheet", href: "/plugins/jqvmap/jqvmap.min.css" },
      { rel: "stylesheet", href: "/dist/css/adminlte.min.css" },
      {
        rel: "stylesheet",
        href: "/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
      },
      {
        rel: "stylesheet",
        href: "/plugins/daterangepicker/daterangepicker.css"
      },
      { rel: "stylesheet", href: "/plugins/summernote/summernote-bs4.css" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700"
      }
    ],
    script: [
      { src: "/plugins/jquery/jquery.min.js", body: true },
      { src: "/plugins/jquery-ui/jquery-ui.min.js", body: true },
      { src: "/plugins/bootstrap/js/bootstrap.bundle.min.js", body: true },
      { src: "/plugins/chart.js/Chart.min.js", body: true },
      { src: "/plugins/sparklines/sparkline.js", body: true },
      { src: "/plugins/jqvmap/jquery.vmap.min.js", body: true },
      { src: "/plugins/jqvmap/maps/jquery.vmap.usa.js", body: true },
      { src: "/plugins/jquery-knob/jquery.knob.min.js", body: true },
      { src: "/plugins/moment/moment.min.js", body: true },
      { src: "/plugins/daterangepicker/daterangepicker.js", body: true },

      {
        src:
          "/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js",
        body: true
      },
      { src: "/plugins/summernote/summernote-bs4.min.js", body: true },
      {
        src: "/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js",
        body: true
      },
      { src: "/dist/js/adminlte.js", body: true }
    ],
    bodyAttrs: {
      class: "hold-transition sidebar-mini layout-fixed"
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module"
  ],
  /*
   ** Nuxt.js modules
   */

  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/api/auth/signin",
            method: "post",
            propertyName: "accessToken"
          },
          logout: false, //{ url: '/api/auth/logout', method: 'post' },
          user: { url: "/api/test/admin", method: "get", propertyName: "user" }
        }
        // tokenRequired: true,
        // tokenType: "Baerer"
        // globalToken: true,
        // autoFetchUser: true
      }
    },
    redirect: {
      login: "/",
      logout: "/",
      callback: "/",
      home: "/"
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseUrl: process.env.baseUrl || "http://localhost:8080"
    baseURL: "http://localhost:8080"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:8080"
  }
};
