<script setup>
    defineProps({
        title: { type: String, default: null },
        description: { type: String, default: null }
    })
</script>

<template>
    <div
        class="
            mb-10
        "
    >
        <AtomsHeading
            tag="h2"
			font-size="h2"
            v-slot:title
            class="
				dark:text-white
				font-serif
                mb-4
            "
        >
            {{ title }}
        </AtomsHeading>

        <AtomsText
            tag="p"
            font-style="normal"
            v-if="description"
            v-slot:text
        >
            {{ description }}
        </AtomsText>
    </div>
</template>
