<script setup>
    // returns current year
    const currentYear = new Date().getFullYear()

    const footer = [
        {
            title: 'Quick Links',
            links: [
                {
                    title: 'About us',
                    path: '/about-us'
                },
                {
                    title: 'What we\'re growing',
                    path: '/our-fields/what-were-growing'
                },
                {
                    title: 'Blog',
                    path: '/articles'
                },
                {
                    title: 'Contact us',
                    path: 'mailto:hello@fivepetalfields.com'
                }
            ]
        },
        {
            title: 'Legal',
            links: [
                {
                    title: 'Privacy policy',
                    path: '/privacy-policy'
                },
                {
                    title: 'Conditions of use',
                    path: '/conditions-of-use'
                },
                {
                    title: 'Cookies',
                    path: '/cookie-policy'
                }
            ]
        },
        {
            title: 'Social',
            links: [
                {
                    title: 'Instagram',
                    path: 'https://www.instagram.com/fivepetalfields/',
                    icon: 'Instagram'
                },
                {
                    title: 'YouTube',
                    path: 'https://www.youtube.com/channel/UCxZQwlce7tki9uLO4NB-Vqg',
                    icon: 'YouTube'
                },
                {
                    title: 'Facebook',
                    path: 'https://www.facebook.com/fivepetal/',
                    icon: 'Facebook'
                }
            ]
        }
    ]
</script>

<template>
    <footer class="relative bg-slate-100 dark:bg-slate-700">
        <section class="max-w-7xl mx-auto w-full">
            <div class="px-5 md:px-10 xl:px-20">
                <section class="flex flex-col-reverse md:flex-row items-center md:items-start justify-between py-16">
                    <div class="mt-8 md:mt-0">
                        <NuxtLink
                            to="/"
                            rel="home"
                        >
                            <AtomsLogo size="normal" />
                        </NuxtLink>

                        <div class="text-slate-800 dark:text-white text-base py-2">© {{ currentYear }}, All rights reserved.</div>
                    </div>

                    <div
                        v-for="(item, index) in footer"
                    >
                        <AtomsHeading
                            tag="h4"
                            font-size="h6"
                            class="hidden md:block mb-2 font-semibold dark:text-white"
                            v-slot:title
                        >
                            {{ item.title }}
                        </AtomsHeading>

                        <div class="flex flex-row md:flex-col flex-wrap md:flex-nowrap justify-center md:justify-start">
                            <AtomsLink
                                v-for="(link, index) in item.links"
                                :key="index"
                                :to="link.path"
                                :target="link.target"
                                use="footer"
                                class="md:mb-2 p-1 md:p-0"
                                v-slot:default
                            >
                                <template v-if="link.icon">
                                    <LazyNuxtIcon
                                        class="
                                            block md:inline-block
                                            md:align-middle
                                            mx-auto
                                            mb-1 md:mb-0
                                            md:mr-2
                                            w-1/3
                                            md:w-auto
                                        "
                                        aria-hidden="true"
                                        :name="link.icon"
                                        filled
                                        v-slot:prepend
                                    />
                                </template>
                                {{ link.title }}
                            </AtomsLink>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </footer>
</template>
