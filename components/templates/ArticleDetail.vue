<script setup>
    defineProps([
        'article'
    ])
</script>

<template>
    <div>
        <header
            class="
                relative
                py-8
                lg:py-16
                lg:pb-0
                w-full
                before:bg-slate-100 before:dark:bg-slate-800
                before:absolute
                before:inset-0
                before:h-3/4
            "
        >
            <MoleculesArticleHeading
                :title="article.title"
                :publishedAt="article.date"
                :ReadTime="article.seo.readingTime"
                :srcSet="article.featuredImage.node.srcSet"
				:src="article.featuredImage.node.sourceUrl"
				:caption="article.featuredImage.node.caption"
            />
        </header>

        <a id="main-content" tabindex="-1"></a>
        <main
            class="
                relative
                bg-white
                dark:bg-slate-900
            "
        >
            <OrganismsArticleBlocks
                v-if="article.blocks"
                :blocks="article.blocks"
            />
        </main>
    </div>
</template>
