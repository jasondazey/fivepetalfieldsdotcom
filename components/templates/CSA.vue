<script setup>
    defineProps([
        'page',
        'articles',
        'hero'
    ])
</script>

<template>
    <header class="relative bg-slate-100 dark:bg-slate-800">
        <MoleculesHeroImageRight
			v-if="hero.blocks && hero.slug === 'csa'"
			:blocks="hero.blocks"
		/>
    </header>

    <a id="main-content" tabindex="-1"></a>
    <main>
        <OrganismsPageBlocks
            v-if="page.blocks"
            :blocks="page.blocks"
        />
    </main>
</template>
