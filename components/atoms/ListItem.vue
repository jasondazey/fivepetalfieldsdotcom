<script setup>
    // import IconCheckCircle from '@/assets/icons/check-circle.svg?inline'

    const props = defineProps({
        color: {
            type: String,
            required: false,
            default: 'text-lavender-600 dark:text-white',
        }
    })

    const classes = computed(() => {
        return `${props.color}`
    })
</script>

<template>
    <li
        class="
            relative
            text-base lg:text-lg
            text-black dark:text-white
            mb-2
            pl-6

            before:absolute
            before:left-0
            before:top-1.5
            before:w-4
            before:h-4
            before:dark:invert
            before:content-['']
            before:bg-no-repeat
            before:bg-[url('~/assets/icons/CheckMark.svg')]
        "
    >
        <slot name="default"></slot>
    </li>
</template>
