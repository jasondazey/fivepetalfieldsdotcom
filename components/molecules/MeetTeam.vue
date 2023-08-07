<script setup>
	defineProps([
		'columns'
	])
</script>

<template>
	<AtomsHeading
		v-if="columns.__typename === 'CoreHeadingBlock'"
		tag="h2"
		font-size="h2"
		class="font-serif font-medium text-white"
		v-slot:text
		v-html="columns.attributes.content"
	/>

	<template
		v-else-if="columns.attributes.anchor === 'team'"
	>
		<div
			class="
				flex
				flex-wrap md:flex-nowrap
				items-center
				gap-x-24
				py-8 md:py-16
			"
		>
			<template
				v-for="(column, index) in columns.innerBlocks"
				:key="index"
			>
				<div
					v-if="column.attributes.anchor === 'image'"
					:class="column.attributes.className"
				>
					<template
						v-for="(item, index) in column.innerBlocks"
					>
						<AtomsImage
							v-if="item.__typename === 'CoreImageBlock'"
							:srcSet="item.mediaItem.node.srcSet"
							:src="item.mediaItem.node.sourceUrl"
							radius="radiusFull"
							ratio="aspect-square"
							class="w-3/4 mx-auto mb-8 md:mb-0"
							alt=""
						/>
					</template>
				</div>

				<div
					v-else-if="column.attributes.anchor === 'text'"
					:class="column.attributes.className"
				>
					<template
						v-for="(item, index) in column.innerBlocks"
					>
						<AtomsHeading
							v-if="item.__typename === 'CoreHeadingBlock'"
							tag="h3"
							font-size="h3"
							class="font-serif font-medium text-white"
							v-slot:text
							v-html="item.attributes.content"
						/>

						<AtomsText
							v-else-if="item.__typename === 'CoreParagraphBlock' && item.attributes.anchor === 'label'"
							tag="p"
							font-style="label"
							color="text-white"
							class="flex-auto py-2"
							v-slot:text
							v-html="item.attributes.content"
						/>

						<AtomsText
							v-else-if="item.__typename === 'CoreParagraphBlock'"
							tag="p"
							font-style="normal"
							color="text-white"
							class="pb-8"
							v-slot:text
						>
							{{ item.attributes.content }}
						</AtomsText>
					</template>
				</div>
			</template>
		</div>
	</template>
</template>
