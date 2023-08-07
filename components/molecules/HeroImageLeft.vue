<script setup>
    defineProps([
        'headers'
    ])
</script>

<template>
	<div
		class="
			max-w-full mx-auto
			px-5 md:px-10
		"
	>
		<div
			class="
				flex
				flex-wrap md:flex-nowrap
				gap-10
				items-center
			"
		>
			<template
				v-for="(columns, index) in headers"
				:key="index"
			>
				<div
					class="
						flex
						items-center
						space-x-6 lg:space-x-8
						overflow-hidden
						w-full md:w-1/2
						h-0
						xl:px-10
						py-48 lg:py-64 xl:py-80
						order-last md:order-first
					"
				>
					<template
						v-for="(column, index) in columns.innerBlocks"
					>
						<template
							v-if="column.attributes.anchor === 'imagesLeft'"
						>
							<div
								class="grid grid-cols-1 gap-y-6 lg:gap-y-8 w-full"
							>
								<template
									v-for="image in column.innerBlocks"
								>
									<AtomsImage
										:srcSet="image.mediaItem.node.srcSet"
										:src="image.mediaItem.node.sourceUrl"
										:caption="image.mediaItem.node.caption"
										class="
											aspect-[3/4]
											rounded-lg
										"
									/>
								</template>

							</div>
						</template>
						<template
							v-if="column.attributes.anchor === 'imagesRight'"
						>
							<div
								class="grid grid-cols-1 gap-y-6 lg:gap-y-8 w-full"
							>
								<template
									v-for="image in column.innerBlocks"
								>
									<AtomsImage
										:srcSet="image.mediaItem.node.srcSet"
										:src="image.mediaItem.node.sourceUrl"
										:caption="image.mediaItem.node.caption"
										class="
											aspect-[3/4]
											rounded-lg
										"
									/>
								</template>

							</div>
						</template>
					</template>
				</div>

				<div
					class="
						w-full md:w-1/2
						pt-10
						order-first md:order-last
					"
				>
					<template
						v-for="(column, index) in columns.innerBlocks"
						:key="index"
					>
						<template
							v-if="column.attributes.anchor === 'text'"
						>
							<template
								v-for="(text, index) in column.innerBlocks"
								:key="index"
							>
								<AtomsHeading
									v-if="text.__typename === 'CoreHeadingBlock'"
									tag="h1"
									font-size="h1"
									class="font-serif dark:text-white"
									v-slot:title
									v-html="text.attributes.content"
								/>

								<AtomsText
									v-else-if="text.__typename === 'CoreParagraphBlock'"
									tag="p"
									font-style="large"
									v-slot:text
									v-html="text.attributes.content"
								/>
							</template>
						</template>
					</template>
				</div>
			</template>
		</div>
	</div>
</template>
