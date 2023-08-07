<script setup>
    const props = defineProps({
		srcSet: {
			type: String,
			default: null
		},
        src: {
			type: String,
			default: null
		},
        alt: {
			type: String,
			default: null
		},
        ratio: {
			type: String,
			default: null
		},
        caption: {
			type: String,
			default: null
		},
		radius: {
			type: String,
			default: null
		}
    })

	const classes = computed(() => {
		const styleClasses = {
			radiusFull: 'rounded-full'
		}
		return ` ${styleClasses[props.radius]} ${props.ratio}`
	})
</script>

<template>
    <figure
        class="
            relative
            overflow-hidden
        "
		:class="classes"
    >
        <nuxt-img
			:srcSet="srcSet"
            :src="src"
            :alt="alt"
            class="
                relative
                object-cover
                object-center
                w-full
                h-full
                hover:opacity-60
				hover:scale-110
				transition
				duration-300
				ease-in-out
            "
            :class="classes"
        />
        <figcaption
            class="
                absolute
                z-10
                bottom-0
                left-0
                px-4
                py-2
                hidden md:block
            "
            v-if="caption"
        >
            <p
                class="
                    text-gray-100/50
                "
                v-html="caption"
            ></p>
        </figcaption>
    </figure>
</template>
