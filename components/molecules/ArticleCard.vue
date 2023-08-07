<script setup>
    // import { getStrapiMedia } from '~/utils/media'

    defineProps([
        'article'
    ])
</script>

<template>
    <article
        class="
            group
            flex flex-col
            shadow-md hover:shadow-xl
            hover:-translate-y-1 transition-all
            duration-300 ease-in-out
            rounded-lg
            bg-white dark:bg-slate-800
    ">
        <NuxtLink
			:to="`/articles/${article.slug}`"
			:aria-label="'Read more about '+article.title"
		>
            <AtomsImage
                :srcSet="article.featuredImage.node.srcSet"
				:src="article.featuredImage.node.sourceUrl"
				:caption="article.featuredImage.node.caption"
                ratio="aspect-video"
                class="
                    max-h-60
                    rounded-lg lg:rounded-b-none
                "
				alt=""
            />
        </NuxtLink>

        <div class="flex flex-auto flex-col py-8 px-8">
            <AtomsHeading
                tag="h3"
                font-size="h5"
				class="font-semibold"
                v-slot:title
            >
                <AtomsLink
                    :to="`/articles/${article.slug}`"
                    v-slot:default
                >
                    {{ article.title }}
                </AtomsLink>
            </AtomsHeading>

            <AtomsText
                tag="div"
                font-style="normal"
                class="flex-auto mb-8"
                v-html="article.excerpt"
            >
            </AtomsText>

            <div class="flex items-center gap-4">
                <AtomsText
                    tag="p"
                    font-style="tag"
					color="bg-stem-800 dark:bg-slate-700 text-white"
                    v-slot:text
                >
                    {{ article.categories.nodes[0].name }}
                </AtomsText>

                <AtomsText
                    tag="p"
                    font-style="label"
                    v-slot:text
                >
                    {{ article.seo.readingTime }} minute read
                </AtomsText>
            </div>
        </div>
    </article>
</template>
