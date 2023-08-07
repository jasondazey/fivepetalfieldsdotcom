<script setup>
    defineProps([
        'blocks'
    ])
</script>

<template>
	<template v-for="block in blocks">
		<header
			v-if="block.attributes.tagName === 'header'"
			class="
				relative
				bg-slate-100
				dark:bg-slate-800
			"
		>
			<MoleculesHero
				v-if="block.attributes.anchor === 'hero'"
				:headers="block.innerBlocks"
			/>

			<MoleculesHeroImageLeft
				v-else-if="block.attributes.anchor === 'leftHero'"
				:headers="block.innerBlocks"
			/>

			<MoleculesHeroImageRight
				v-else-if="block.attributes.anchor === 'rightHero'"
				:headers="block.innerBlocks"
			/>
		</header>

		<main
			v-else-if="block.attributes.tagName === 'main'"
		>
			<a id="main-content" tabindex="-1"></a>

			<template
				v-for="(columns, index) in block.innerBlocks"
				:key="index"
			>
				<template
					v-if="!columns.attributes.anchor.length"
				>
					<template
						v-for="(column, index) in columns.innerBlocks"
						:key="index"
					>
						<!--
							## Body copy section
						-->
						<section
							class="
								prose
								prose-lg
								dark:prose-invert
								max-w-6xl mx-auto
								py-8 md:py-16
								px-5 md:px-10
							"
						>
							<template
								v-for="(copy, index) in column.innerBlocks"
								:key="index"
							>
								<AtomsHeading
									v-if="copy.__typename === 'CoreHeadingBlock' && copy.attributes.level === 2"
									tag="h2"
									font-size="h2"
									class="font-serif dark:text-white"
									v-slot:text
									v-html="copy.attributes.content"
								/>

								<AtomsHeading
									v-if="copy.__typename === 'CoreHeadingBlock' && copy.attributes.level === 3"
									tag="h3"
									font-size="h3"
									class="font-serif dark:text-white"
									v-slot:text
									v-html="copy.attributes.content"
								/>

								<AtomsHeading
									v-if="copy.__typename === 'CoreHeadingBlock' && copy.attributes.level === 4"
									tag="h4"
									font-size="h6"
									class="text-lavender-700 dark:text-white uppercase tracking-wide font-semibold"
									v-slot:text
									v-html="copy.attributes.content"
								/>

								<AtomsText
									v-else-if="copy.__typename === 'CoreParagraphBlock'"
									tag="p"
									font-style="normal"
									class="mb-8"
									v-slot:text
									v-html="copy.attributes.content"
								/>

								<AtomsImage
									v-else-if="copy.__typename === 'CoreImageBlock'"
									:srcSet="copy.mediaItem.node.srcSet"
									:src="copy.mediaItem.node.sourceUrl"
									:caption="copy.mediaItem.node.caption"
									class="
										aspect-[21/9]
										rounded-lg
									"
								/>

								<ul
									v-if="copy.__typename === 'CoreListBlock'"
									class="
										list-none
										my-8
										pl-0 lg:pl-8
									"
									:class="copy.attributes.className"
								>
									<AtomsListItem
										v-for="(list, index) in copy.innerBlocks"
										:key="index"
										v-slot:default
										v-html="list.attributes.content"
									>
									</AtomsListItem>
								</ul>
							</template>
						</section>
					</template>
				</template>

				<section
					v-else-if="columns.attributes.anchor === 'growing'"
					class="
						max-w-7xl mx-auto
						py-8 md:py-16
						px-5 md:px-10
					"
				>
					<div
						class="
							grid lg:grid-cols-3
							gap-8
							items-stretch
						"
					>
						<template
							v-for="(column, index) in columns.innerBlocks"
							:key="index"
						>
							<MoleculesGrowCard
								:column="column"
							/>
						</template>
					</div>

				</section>

				<section
					v-else-if="columns.attributes.anchor === 'feature'"
					class="
						max-w-7xl mx-auto
						pb-8 md:pb-16
						px-5 md:px-10
					"
				>
					<div
						class="
							grid lg:grid-cols-3
							gap-8
							items-stretch
						"
					>
						<template
							v-for="(column, index) in columns.innerBlocks"
							:key="index"
						>
							<MoleculesFeatureCard
								:column="column"
							/>
						</template>
					</div>

				</section>

			</template>
		</main>

		<section
			v-else-if="block.attributes.tagName === 'section' && block.attributes.anchor === 'meetTeam'"
			class="bg-lavender-800"
		>
			<div
				class="
					max-w-7xl mx-auto
					py-8 md:py-16
					px-5 md:px-10
				"
			>
				<template
					v-for="(columns, index) in block.innerBlocks"
					:key="index"
				>
					<MoleculesMeetTeam
						:columns="columns"
					/>
				</template>
			</div>
		</section>
	</template>
</template>
