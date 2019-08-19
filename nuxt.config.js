
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'WD Blog' || process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'My Cool Web development blog' || process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://fonts.googleapis.com/css?family=Open+Sans&display=swap"}
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fa923f', failedColor: 'hotPink', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/styles/normalize.css',
    '~/assets/styles/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-ca204.firebaseio.com/',
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },
  env: {
    baseUrl:  process.env.BASE_URL || 'https://nuxt-blog-ca204.firebaseio.com/',
    fbAPIKey: ''
  },
  // router: {
  //   // For setting Vue-Router constructor routes
  //   // Use extend routes for resolving 404 errors
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       path: '*',
  //       component: resolve(__dirname__, 'pages/index.vue')
  //     })
  //   },
  // },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  router: {
    middleware: 'log'
  }
}
