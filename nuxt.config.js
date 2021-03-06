export default {
  env: {
    serverUrl: "https://oktawa-tm.com/api",
  },
  mode: 'spa',
  target: 'server',
  head: {
    title: "Bagtly zamana",
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
        content: 'Хозяйственное общество «Багтлы замана» было основано в 2013 году и начало производство различных видов синтетических моющих средств и туалетного мыла в 2019 году.'
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
    "~/plugins/modal.js",
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    ['@nuxtjs/i18n', {
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
          code: 'tm',
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
