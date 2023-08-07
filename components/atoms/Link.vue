<script setup>
    const props = defineProps({
        to: {
            type: String,
            required: false,
            default: null
        },
        fontStyle: {
            type: String,
            required: false,
            default: 'p'
        },
        color: {
            type: String,
            required: false,
            default: 'text-lavender-700 hover:text-lavender-400 dark:text-white',
        }
    })

    const classes = computed(() => {
        const styleClasses = {
            nav: 'font-semibold text-slate-700',
            tag: 'inline-block bg-lavender-200 text-lavender-700 font-semibold capitalize text-xs mx-1 py-1 px-4 rounded-lg min-w-0',
            footer: 'text-slate-600 dark:text-white hover:text-lavender-500 dark:hover:text-lavender-400',
            inline: 'bg-link hover:bg-link-hover text-lavender-700 dark:text-white hover:text-white dark:hover:text-lavender-900 bg-gradient-to-b bg-left-bottom bg-no-repeat from-lavender-700 dark:from-white to-lavender-700 dark:to-white font-semibold',
            card: ''
        }
        return ` ${styleClasses[props.fontStyle]} ${props.color}`;
    })
</script>

<template>
    <NuxtLink
        :to="to"
        v-bind="$attrs"
        class="
            cursor-pointer
            leading-7
            transition-all duration-300 ease-in-out
        "
        :class="classes"
    >
        <slot name="prepend"></slot>
        <slot name="default"></slot>
        <slot name="append"></slot>
    </NuxtLink>
</template>
