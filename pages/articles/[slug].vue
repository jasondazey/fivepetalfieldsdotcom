<script setup>
    import getPost from '~/apollo/queries/getPost.gql'

    const route = useRoute()

    const matchingArticle = await useAsyncQuery(getPost, {
        'slug': route.params.slug
    })

    let article = matchingArticle.data.value?.postBy || []

    useHead({
        title: article?.seo?.title,
        meta: [
            { name: 'description', content: article?.seo?.metaDesc },
            { name: 'og:title', content: article?.seo?.title },
            { name: 'og:description', content: article?.seo?.metaDesc },
            {
                name: 'og:image',
                content: article?.seo?.opengraphImage?.mediaItemUrl,
            }
        ]
    })
</script>

<template>
    <TemplatesArticleDetail
        :article="article"
    />
</template>
