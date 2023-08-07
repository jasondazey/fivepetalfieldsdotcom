<script setup>
    defineProps([
        'articles'
    ])
</script>

<template>
    <div
        class="
            container
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
        "
    >
        <MoleculesArticleCard
            v-for="(article, index) in articles"
            :key="index"
            :article="article"
        />
    </div>
</template>
