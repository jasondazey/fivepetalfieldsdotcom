/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
		'./plugins/**/*.{js,ts}',
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            backgroundSize: {
                link: '100% 2px',
                'link-hover': '100% 100%'
            },
            fontFamily: {
                sans: [ 'Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif' ],
                serif: [ 'Playfair Display', 'Georgia', 'serif' ],
                display: [ 'cervanttisregular', 'serif' ]
            },
            colors: {
                lavender: {
                    50: '#FAF9FC',
                    100: '#EFEBF7',
                    200: '#D9CFEB',
                    300: '#C2B4E0',
                    400: '#AC98D4',
                    500: '#7453B7',
                    600: '#6243A0',
                    700: '#513784',
                    800: '#37265B',
                    900: '#160f23'
                },
                stem: {
                    50: '#eff4ef',
                    100: '#ccddcd',
                    200: '#a8c5ab',
                    300: '#91b694',
                    400: '#79a67e',
                    500: '#639568',
                    600: '#537d58',
                    700: '#446647',
                    800: '#346138',
                    900: '#243726'
                }
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
