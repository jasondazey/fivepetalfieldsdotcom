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
                <AtomsHeading
					v-if="card.__typename === 'CoreHeadingBlock'"
                    tag="h3"
                    font-size="h5"
					class="font-semibold"
                    v-slot:title
					v-html="card.attributes.content"
                />

				<AtomsText
					v-if="card.__typename === 'CoreParagraphBlock'"
                    tag="p"
                    font-style="normal"
                    v-slot:text
					v-html="card.attributes.content"
                />
			</template>

			<template
				v-for="(card, index) in column.innerBlocks"
				:key="index"
			>
				<template
					v-for="(button, index) in card.innerBlocks"
					:key="index"
				>
					<div
						class="mt-8"
					>
						<AtomsButton
							:to="button.attributes.url"
							:target="button.attributes.linkTarget"
							:rel="button.attributes.rel"
							theme="card"
							color="hover:text-white dark:hover:text-slate-800 hover:px-2 before:bg-lavender-700 dark:before:bg-white"
						>
							<template v-slot:default>
								<span class="relative z-10">{{ button.attributes.text }}</span>
							</template>
							<template v-slot:append>
								<LazyNuxtIcon class="relative h-6 w-6 z-10" name="ArrowRight" filled />
							</template>
						</AtomsButton>
					</div>
				</template>
			</template>
		</div>
    </div>
</template>
