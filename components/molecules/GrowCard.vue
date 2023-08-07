<script setup>
    defineProps([
		'column'
	])
</script>

<template>
    <div
        class="
            group
            flex flex-col
            shadow-md hover:shadow-xl
            hover:-translate-y-1 transition-all
            duration-300 ease-in-out
            rounded-lg
            bg-white dark:bg-slate-800
            mb-4
    ">
		<template
			v-for="(card, index) in column.innerBlocks"
			:key="index"
		>
			<AtomsImage
				v-if="card.__typename === 'CoreImageBlock'"
				:srcSet="card.mediaItem.node.srcSet"
				:src="card.mediaItem.node.sourceUrl"
				:caption="card.mediaItem.node.caption"
				ratio="aspect-video"
				class="rounded-lg lg:rounded-b-none"
				alt=""
			/>
		</template>

		<div
			class="
				flex
				flex-auto
				flex-col
				py-8
				px-8
			"
		>
			<template
				v-for="(card, index) in column.innerBlocks"
				:key="index"
			>
				<AtomsText
					v-if="card.__typename === 'CoreParagraphBlock'"
                    tag="p"
                    font-style="label"
                    v-slot:text
					v-html="card.attributes.content"
                />

                <AtomsHeading
					v-if="card.__typename === 'CoreHeadingBlock'"
                    tag="h3"
                    font-size="h5"
					class="font-semibold dark:text-white"
                    v-slot:title
					v-html="card.attributes.content"
                />
			</template>
		</div>
    </div>
</template>
