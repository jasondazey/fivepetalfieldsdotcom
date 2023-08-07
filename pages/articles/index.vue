<script setup>
    import getAllPosts from '~/apollo/queries/getAllPosts.gql'
    import getPage from '~/apollo/queries/getPage.gql'

    const matchingArticles = await useAsyncQuery(getAllPosts)
    let articles = matchingArticles.data.value?.posts?.nodes || []

    const matchingPage = await useAsyncQuery(getPage, {
        uri: 'about-us'
    })
    let page = matchingPage.data.value?.pageBy || []

    useHead({
        title: 'Articles | Five Petal Fields',
        meta: [
            { name: 'description', content: 'Curated articles on the topics of flower farming, lavender growing, and recipes.' },
            { name: 'og:title', content: 'Articles | Five Petal Fields' },
            { name: 'og:description', content: 'Curated articles on the topics of flower farming, lavender growing, and recipes.' }
        ]
    })
</script>

<template>
    <header class="relative bg-slate-100 dark:bg-slate-800">
        <div class="max-w-7xl mx-auto px-5 md:px-10">
			<div class="py-16">
				<AtomsHeading
					tag="h1"
					font-size="h1"
					class="font-serif dark:text-white"
					v-slot:title
				>Articles</AtomsHeading>

				<AtomsText
					tag="p"
					font-style="large"
					v-slot:text
				>Curated articles on the topics of flower farming, lavender growing, and recipes.</AtomsText>
			</div>
		</div>
    </header>

    <a id="main-content" tabindex="-1"></a>
    <main
        class="
            relative
            bg-white
            dark:bg-slate-900
            py-10 md:py-16
        "
    >
        <div
            class="
                max-w-7xl mx-auto
                px-5 md:px-10
            "
        >
            <OrganismsFeaturedArticles
                :articles="articles"
            />
        </div>
    </main>
</template>
