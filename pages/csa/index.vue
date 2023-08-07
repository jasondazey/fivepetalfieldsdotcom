<script setup>
    import getPage from '~/apollo/queries/getPage.gql'
    import getHero from '~/apollo/queries/getHero.gql'

	// # Page Query
    const matchingPage = await useAsyncQuery(getPage, {
        'uri': 'csa'
    })
    let page = matchingPage.data.value?.pageBy || []

    // # Hero Query
    const matchingHero = await useAsyncQuery(getHero, {
        'uri': 'csa'
    })
    let hero = matchingHero.data.value?.pageBy || []

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
	<TemplatesCSA
        :hero="hero"
        :page="page"
    />
</template>
