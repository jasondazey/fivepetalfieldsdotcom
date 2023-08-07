<script setup>
    defineProps([
        'page'
    ])
</script>

<template>
	<OrganismsPageBlocks
		v-if="page.blocks"
		:blocks="page.blocks"
	/>
</template>
