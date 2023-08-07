<script setup>
import global from '~/utils/global'
import getSocialMeta from '~/utils/metatags'

const meta = getSocialMeta(global)

useHead({
    // titleTemplate: (title) => title !== 'Five Petal Fields' ? `${title} | Five Petal Fields` : title,
    htmlAttrs: { lang: global.locale },
    meta: [
        ...meta,
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
        {
            rel: 'canonical',
            href: global.url,
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com/',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: '',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/assets/images/favicon-16x16.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/assets/images/favicon-32x32.png',
        },
        {
            rel: 'icon',
            type: 'image/png',
            href: '/assets/images/favicon.png',
        },
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/assets/images/favicon.ico',
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap',
        },
    ],
})

const router = useRouter()

// Scroll to top after each navigation
router.afterEach(() => {
    window.scrollTo(0, 0)
})
</script>

<template>
    <OrganismsSiteHeader />

    <NuxtPage />

    <!-- A11Y Link Messages -->
    <div class="hidden">
        <span id="new-tab">Opens in a new tab/window</span>
    </div>

    <OrganismsSiteFooter />
</template>
