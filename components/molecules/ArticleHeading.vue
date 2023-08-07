<script setup>
    defineProps({
        title: {
			type: String,
			default: null
		},
        publishedAt: {
			type: String,
			default: null
		},
        ReadTime: {
			type: Number,
			default: null
		},
		srcSet: {
			type: String,
			default: null
		},
        src: {
			type: String,
			default: null
		},
        caption: {
			type: String,
			default: null
		}
    })

    const formatDate = (date) => {
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }

        return new Date(date).toLocaleDateString('en', options)
    }
</script>

<template>
    <div class="relative z-10">
        <div class="max-w-5xl mx-auto w-full">
            <div class="py-8 md:py-16 px-5 md:px-10 xl:px-20">
                <AtomsHeading
                    tag="h1"
                    font-size="h1"
					class="font-serif dark:text-white"
                    v-slot:title
                >
                    {{ title }}
                </AtomsHeading>

                <AtomsText
                    tag="p"
                    font-style="normal"
                    v-slot:text
                    class="
                        text-slate-400
                        mt-12
                    "
                >
                    {{ formatDate(publishedAt) }} | {{ ReadTime }} minute read
                </AtomsText>
            </div>
        </div>
        <div class="max-w-7xl mx-auto">
            <div class="px-5 md:px-10 xl:px-20">
                <AtomsImage
                    aria-hidden="true"
					:srcSet="srcSet"
                    :src="src"
					:caption="caption"
                    class="aspect-[21/9] rounded-lg mb-12"
                />
            </div>
        </div>
    </div>
</template>
