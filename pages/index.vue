<script setup>
    import getFeaturedPosts from '~/apollo/queries/getFeaturedPosts.gql'
    import getPage from '~/apollo/queries/getPage.gql'
    // import getHero from '~/apollo/queries/getHero.gql'

    // # Posts Query
    const matchingArticles = await useAsyncQuery(getFeaturedPosts, {
        'categoryName': 'Articles'
    })
    let articles = matchingArticles.data.value?.posts?.nodes || []

    // # Page Query
    const matchingPage = await useAsyncQuery(getPage, {
        'uri': 'home'
    })
    let page = matchingPage.data.value?.pageBy || []

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
    <TemplatesHome
        :page="page"
        :articles="articles"
    />
</template>
