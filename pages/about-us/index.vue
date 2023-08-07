<script setup>
    import getPage from '~/apollo/queries/getPage.gql'
    // import getHero from '~/apollo/queries/getHero.gql'

    // const matchingTeam = await graphql(teamQuery)
    // let teams = matchingTeam.data.teams

    // # Page Query
    const matchingPage = await useAsyncQuery(getPage, {
        'uri': 'about-us'
    })
    let page = matchingPage.data.value?.pageBy || []

    // # Hero Query
    // const matchingHero = await useAsyncQuery(getHero, {
    //     'uri': 'about-us'
    // })
    // let hero = matchingHero.data.value?.pageBy || []

    useHead({
        title: page?.seo?.title,
        meta: [
            { name: 'description', content: page?.seo?.metaDesc },
            { name: 'og:title', content: page?.seo?.title },
            { name: 'og:description', content: page?.seo?.metaDesc }
        ]
    })
</script>

<template>
    <TemplatesPage
        :page="page"
    />

    <!-- <section class="max-w-7xl mx-auto w-full">
        <div class="px-5 md:px-10 py-8 md:py-16">
            <MoleculesSectionHeading
                title="Meet the team"
            />
            <div class="grid lg:grid-cols-3 gap-8 items-stretch">
                <template
                    v-for="(team, index) in teams.data"
                    :key="index"
                >
                    <div
                        class="
                            group
                            flex flex-col
                            hover:-translate-y-1 transition-all
                            duration-300 ease-in-out
                            bg-white dark:bg-slate-900
                            mb-4
                    ">
                        <AtomsImage
                            :src="getStrapiMedia(team.attributes.image.data.attributes.formats.medium.url)"
                            ratio="aspect-square"
                        />

                        <div class="flex flex-col justify-between pt-4">
                            <AtomsHeading
                                tag="h3"
                                font-style="h6"
                                v-slot:title
                            >
                                {{ team.attributes.name }}
                            </AtomsHeading>

                            <AtomsText
                                tag="p"
                                font-style="label"
                                class="flex-auto"
                                v-slot:text
                            >
                                {{ team.attributes.title }}
                            </AtomsText>

                            <div
                                class="
                                    prose
                                    pt-4
                                "
                                v-html="team.attributes.bio"
                            />
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section> -->
</template>
