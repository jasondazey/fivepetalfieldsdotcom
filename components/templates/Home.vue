<script setup>
    defineProps([
        'page',
        'articles'
    ])
</script>

<template>
    <OrganismsPageBlocks
		v-if="page.blocks"
		:blocks="page.blocks"
	/>

    <section
        class="
            relative
            bg-lavender-100
            dark:bg-lavender-900
            py-10 md:py-16
        "
    >
        <div
            class="
                max-w-7xl mx-auto
                px-5 md:px-10
            "
        >
            <MoleculesSectionHeading
                title="Latest articles"
            />

            <OrganismsFeaturedArticles
                :articles="articles"
            />
        </div>
    </section>
</template>
