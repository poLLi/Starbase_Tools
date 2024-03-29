export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    ssr: false,
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    router: {
        base: '/Starbase_Tools'
    },
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        title: 'Starbase Codes — JLN',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'author', content: 'Tim Pollerhof' },
            {
                hid: 'description',
                name: 'description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbaser.'
            },
            {
                name: 'keywords',
                content:
                    'starbase Codes, community web tools, interactive map, database, ship builder, calculator, open world, game'
            },

            // Twitter Meta Tags
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@JL_PoLLi' },
            { name: 'twitter:image', content: 'http://starbase.codes/sb_tools.png' },
            { name: 'twitter:title', content: 'Starbase Codes — JLN' },
            {
                name: 'twitter:description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbase.'
            },

            // Open Graph Meta Tags
            { property: 'og:title', content: 'Starbase Codes — JLN' },
            { property: 'og:type', content: 'website' },
            { property: 'og:url', content: 'http://starbase.codes' },
            { property: 'og:image', content: 'http://starbase.codes/sb_tools.png' },
            {
                property: 'og:description',
                content: 'Unofficial Starbase Tools. Everything you need to survive in Starbase.'
            }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon/android-icon-192x192.png', sizes: '192x192' },
            { rel: 'apple-touch-icon', href: '/favicon/apple-icon-180x180.png', sizes: '180x180' }
        ]
    },
    loading: false,
    /*
     ** Global CSS
     */
    css: ['~/assets/scss/main.scss'],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: ['~/plugins/vue-clipboard.js', '~/plugins/vue-bootstrap-icons.js'],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        /**'@nuxtjs/eslint-module'**/
    ],
    /*
     ** Nuxt.js modules
     */
    modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios', 'vue-sweetalert2/nuxt', 'nuxt-i18n'],
    i18n: {
        locales: [
            {
                name: 'English',
                code: 'en',
                iso: 'en-US',
                file: 'en-US.js'
            },
            {
                name: 'German',
                code: 'de',
                iso: 'de-DE',
                file: 'de-DE.js'
            },
            {
                name: 'French',
                code: 'fr',
                iso: 'fr-FR',
                file: 'fr-FR.js'
            },
            {
                name: 'Russian',
                code: 'ru',
                iso: 'ru-RU',
                file: 'ru-RU.js'
            },
            {
                name: 'Portuguese (Brazil)',
                code: 'ptBR',
                iso: 'pt-BR',
                file: 'pt-BR.js'
            },
            {
                name: 'Chinese',
                code: 'cn',
                iso: 'zh-CN',
                file: 'zh-CN.js'
            },
            {
                name: 'Chinese (Traditional)',
                code: 'tw',
                iso: 'zh-TW',
                file: 'zh-TW.js'
            }
        ],
        lazy: true,
        langDir: 'lang/',
        defaultLocale: 'en',
        detectBrowserLanguage: false
    },
    /*
     ** BootstrapVue Settings
     */
    bootstrapVue: {
        bootstrapCSS: false,
        bootstrapVueCSS: false
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    // axios: {
    //     baseURL: 'https://api.deadmatter.tools/'
    // },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    generate: {
        fallback: true
    },
    build: {
        extractCSS: true
    }
};
