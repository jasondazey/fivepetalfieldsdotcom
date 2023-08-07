<script setup>
    import { Switch } from '@headlessui/vue'

    const colorMode = useColorMode()

    const enabled = ref(false)
</script>

<template>
    <Switch
        v-model="enabled"
        aria-live="polite"
        @click="$colorMode.preference = $colorMode.value === 'light' ? 'dark' : 'light'"
        :class="enabled ? 'bg-slate-900' : 'bg-lavender-400'"
        class="relative inline-flex h-6 w-11 ml-4 items-center rounded-full"
    >
        <span class="sr-only">Enable or Disable Dark Mode</span>
        <span
            :class="enabled ? 'translate-x-6' : 'translate-x-1'"
            class="inline-block h-4 w-4 p-0.5 transform rounded-full bg-white transition"
        >
            <LazyNuxtIcon class="stroke-slate-800" name="Sun" filled v-if="$colorMode.value === 'light'" />
            <LazyNuxtIcon class="stroke-white" name="Moon" filled v-else />
        </span>
    </Switch>
</template>
