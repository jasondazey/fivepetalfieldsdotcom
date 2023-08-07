<script setup>
    defineProps([
        'blocks'
    ])
</script>

<template>
    <article
        class="
            prose
            prose-lg
            dark:prose-invert
			max-w-5xl mx-auto
			px-5 md:px-10
			py-8 md:py-16
        "
    >
		<template v-for="block in blocks">
			<template
				v-if="block.__typename === 'CoreHeadingBlock'"
			>
				<AtomsHeading
					v-if="block.attributes.level === 2"
					tag="h2"
					font-style="h2serif"
					v-slot:title
					v-html="block.attributes.content"
				/>

				<AtomsHeading
					v-else-if="block.attributes.level === 3"
					tag="h3"
					font-style="h6"
					v-slot:text
					v-html="block.attributes.content"
				/>
			</template>

			<div
				v-else-if="block.__typename === 'CoreHtmlBlock'"
				v-html="block.originalContent"
			/>

			<AtomsImage
				v-else-if="block.__typename === 'CoreImageBlock'"
				:srcSet="block.mediaItem.node.srcSet"
				:src="block.mediaItem.node.sourceUrl"
				:caption="block.mediaItem.node.caption"
				class="
					aspect-[21/9]
					rounded-lg
				"
			/>

			<AtomsText
				v-else-if="block.__typename === 'CoreParagraphBlock'"
				tag="p"
				font-style="large"
				v-slot:text
				v-html="block.attributes.content"
			/>

			<ul
				v-else-if="block.__typename === 'CoreListBlock'"
				class="
					list-none
					pl-0
				"
			>
				<AtomsListItem
					v-for="(list, index) in block.innerBlocks"
					:key="index"
					v-slot:default
					v-html="list.attributes.content"
				/>
			</ul>
		</template>
    </article>
</template>

<style lang="postcss" scoped>
	.prose h1 {
		@apply font-medium font-serif text-black dark:text-white text-5xl md:text-6xl lg:text-7xl lg:leading-tight mb-5
	}

	.prose h2 {
		@apply font-medium font-serif text-black dark:text-white text-3xl md:text-4xl lg:text-5xl lg:leading-tight mb-8
	}

	.prose p {
		@apply text-base md:text-lg text-black dark:text-white mb-5
	}

	.prose ol,
	.prose ul {
		@apply list-inside text-base md:text-lg mb-8 pl-8
	}

	.prose ol {
		@apply list-decimal
	}

	.prose ol li,
	.prose ul li {
		@apply text-black dark:text-white mb-4
	}

	.prose ul {
		@apply list-none pl-0 relative
	}
</style>
