<script setup>
    defineProps([
		'headers'
	])
</script>

<template>
	<div
		class="
			max-w-7xl mx-auto
		"
	>
			<div
				class="
					px-5 md:px-10
					py-8 md:py-16
				"
			>
				<template
					v-for="(header, index) in headers"
					:key="index"
				>
				<AtomsHeading
					v-if="header.__typename === 'CoreHeadingBlock'"
					tag="h1"
					font-size="h1"
					class="font-serif font-medium dark:text-white"
					v-slot:title
					v-html="header.attributes.content"
				/>

				<AtomsText
					v-if="header.__typename === 'CoreParagraphBlock'"
					tag="p"
					font-style="large"
					v-slot:text
					v-html="header.attributes.content"
				/>
			</template>
		</div>
	</div>
</template>
