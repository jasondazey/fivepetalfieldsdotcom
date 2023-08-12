// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	apollo: {
        clients: {
            default: {
                httpEndpoint: 'https://wp.fivepetalfields.com/graphql'
            }
        }
    },

	colorMode: {
        classSuffix: ''
    },

    css: [
        '~/assets/css/tailwind.css'
    ],

    devtools: {
		enabled: false
	},

	gtag: {
        id: 'G-M47XT7CX4K'
    },

	image: {
		// Options
		// format: ['webp']
	},

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

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    runtimeConfig: {
        public: {
            API_URL: 'https://wp.fivepetalfields.com/graphql',
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
