// https://v3.nuxtjs.org/api/configuration/nuxt.config
// Add ant-design to Nuxt 3: https://github.com/vueComponent/ant-design-vue/discussions/5210

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: false,
  },

  app: {
    head: {
      titleTemplate: '%s - Test',
      title: 'Home',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">',
        },
      ],
    },
  },

  css: ['@/assets/scss/tailwind.scss', '@/assets/scss/index.scss'],

  modules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', pathPrefix: false }],

  googleFonts: {
    display: 'swap',
    families: {
      'Lexend Deca': [100, 200, 300, 400, 600, 700, 800, 900],
    },
  },

  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver({ resolveIcons: true })],
      }),
    ],
    ssr: {
      noExternal: [
        'moment',
        'compute-scroll-into-view',
        'ant-design-vue',
        '@ant-design/icons-vue',
      ],
    },
  },
})
