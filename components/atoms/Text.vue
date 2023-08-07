<script setup>
    const props = defineProps({
        tag: { type: String, default: null },
        fontStyle: {
            type: String,
            required: false,
            default: 'p'
        },
        color: {
            type: String,
            required: false,
            default: 'text-slate-800 dark:text-white',
        }
    })

    const classes = computed(() => {
        const styleClasses = {
            tag: 'text-xs py-1 px-4 rounded-full',
            label: 'uppercase text-sm tracking-widest mb-0.5',
            normal: 'font-medium text-base md:text-lg',
            large: 'font-medium text-lg md:text-xl'
        }
        return ` ${styleClasses[props.fontStyle]} ${props.color}`
    })
</script>

<template>
    <component :is="tag" v-bind="$attrs" :class="classes">
        <slot name="text" />
    </component>
</template>
