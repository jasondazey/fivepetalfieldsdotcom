// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/tailwind.css'
    ],

    devtools: { enabled: false },

    modules: [
        // https://apollo.nuxtjs.org
        '@nuxtjs/apollo',

		// https://color-mode.nuxtjs.org
        '@nuxtjs/color-mode',

        // https://nuxt.com/modules/gtag
        'nuxt-gtag',

        // https://nuxt.com/modules/headlessui
        'nuxt-headlessui',

        // https://nuxt.com/modules/icons
        'nuxt-icons',

		// https://v1.image.nuxtjs.org/
		'@nuxt/image',

        // https://tailwindcss.nuxt.dev/
        '@nuxtjs/tailwindcss'
    ],

    apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://fivepetalfields.com/server/graphql'
            }
        }
    },

    colorMode: {
        classSuffix: ''
    },

    gtag: {
        id: 'G-M47XT7CX4K'
    },

	image: {
		// Options
		format: ['webp']
	},

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    runtimeConfig: {
        public: {
            API_URL: 'https://fivepetalfields.com/server/graphql',
            // GQL_HOST: 'http://fivepetalfieldsdotcom.local/graphql',
            // GQL_TOKEN: 'Basic Zml2ZXBldGFsOjEyMzRhQkNk',
            colorMode: {
                classSuffix: ''
            },
            postcss: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {}
                }
            }
        }
    },

    ssr: false
})
