<script setup>
    const props = defineProps({
        size: {
            type: String
        }
    })

    const classes = computed(() => {
        const styleClasses = {
            normal: 'h-auto w-40 lg:w-44',
            mobile: 'h-16 w-auto'
        }
        return ` ${styleClasses[props.size]}`;
    })
</script>

<template>
    <span class="sr-only">Five Petal Fields</span>
    <img
        v-if="$colorMode.value === 'light'"
        :class="classes"
        src="/assets/images/fivepetal-logo.svg"
        alt="Five Petal Fields"
    />
    <img
        v-else
        :class="classes"
        src="/assets/images/fivepetal-logo-dark.svg"
        alt="Five Petal Fields"
    />
</template>
