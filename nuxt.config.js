export default {
  env: {
    serverUrl: "https://oktawa-tm.com/api",
  },
  mode: 'spa',
  target: 'server',
  head: {
    title: "Aknur",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  /*
   ** Build configuration
   */
  css: [{
    src: "~/assets/themes/index.scss",
    lang: "scss"
  }, ],
  styleResources: {
    scss: [
      '~/assets/themes/variables.scss',
      '~/assets/themes/index.scss',
    ],
  },
  plugins: [
    '~/plugins/axios',
    '~/plugins/slider',
    "~/plugins/modal.js"
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['nuxt-i18n', {
      strategy: 'no_prefix',
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        alwaysRedirect: false,
        fallbackLocale: 'ru'
      },
      locales: [{
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru-RU.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-EN',
          file: 'en-EN.js'
        },
        {
          name: 'Turkmen',
          code: 'tk',
          iso: 'tk-TK',
          file: 'tk-TK.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'ru',
    }],
  ],
  build: {}
}
