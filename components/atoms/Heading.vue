<script setup>
    const props = defineProps({
        tag: { type: String, default: null },
        fontSize: {
            type: String,
            required: false,
            default: null,
            validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
        }
    })

    const classes = computed(() => {
        const sizeClasses = {
			h1: 'text-5xl md:text-6xl lg:text-7xl mb-8',
            h2: 'text-4xl md:text-5xl lg:text-6xl mb-6',
            h3: 'text-3xl md:text-4xl lg:text-5xl mb-6',
            h4: 'text-2xl md:text-3xl lg:text-4xl mb-4',
            h5: 'text-xl md:text-2xl lg:text-3xl mb-2',
            h6: 'text-base md:text-lg lg:text-xl'
		}
        return ` ${sizeClasses[props.fontSize]}`;
    })
</script>

<template>
    <component :is="tag" v-bind="$attrs" :class="classes" class="font-medium">
        <slot name="title" />
    </component>
</template>
