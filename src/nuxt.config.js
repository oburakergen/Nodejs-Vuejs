export default {
  ssr: false,
  head: {
    titleTemplate: '%s - DataCose',
    title: 'DataCose',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:title', name: 'og:title', content: 'DataCose | Dashboard' },
      { hid: 'og:locale', name: 'og:locale', content: 'en-US' },
      { hid: 'og:url', name: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { name: 'format-detection', content: 'telephone=yes' },
      { httpEquiv: 'Content-Security-Policy' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://jsonplaceholder.typicode.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
