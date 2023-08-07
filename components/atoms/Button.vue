<script setup>
    const props = defineProps({
        to: { type: String, default: null },
        theme: {
            type: String,
            required: false,
            default: 'large',
            validator: (value) => [ 'large', 'primary', 'secondary', 'small', 'card' ].includes(value)
        },
        color: {
            type: String,
            required: false,
            default: 'bg-stem-100 text-stem-900 hover:text-white before:bg-stem-800',
        }
    })

    const classes = computed(() => {
        const themeClasses = {
            'large': 'text-lg px-8 py-4 rounded-full',
            'small': 'text-base px-4 py-2 rounded-full',
            'primary': 'bg-stem-100 dark:bg-slate-700 text-stem-900 dark:text-white hover:text-white before:bg-stem-800 dark:before:bg-slate-900',
            'secondary': 'bg-white text-lavender-800 before:bg-lavender-300',
            'card': 'font-semibold text-lavender-700 dark:text-white px-0 py-0 mt-0'
        }
        return ` ${themeClasses[props.theme]} ${props.color}`;
    })
</script>

<template>
    <NuxtLink
        :to="to"
        v-bind="$attrs"
        class="
            relative
            overflow-hidden
            inline-flex items-center gap-4
            cursor-pointer
            rounded
            before:absolute
            before:h-full
            before:w-0
            before:left-0
            before:bottom-0
            before:transition-all
            before:duration-300
            before:hover:w-full
        "
        :class="classes"
    >
        <div class="relative flex items-center gap-4 text-lg">
            <slot name="prepend"></slot>
            <slot name="default"></slot>
            <slot name="append"></slot>
        </div>
    </NuxtLink>
</template>
