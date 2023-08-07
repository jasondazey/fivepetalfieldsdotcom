<script setup>
    import {
        Popover,
        PopoverButton,
        PopoverGroup,
        PopoverPanel,
    } from '@headlessui/vue'

    const nav = [
        {
            "id": 1,
            "title": "Home",
            "path": "/",
            "type":"INTERNAL"
        },
        {
            "id": 2,
            "title": "About us",
            "path": "/about-us",
            "type":"INTERNAL"
        },
        {
            "id": 3,
            "title": "CSA",
            "path": "/csa",
            "type":"INTERNAL"
        },
        {
            "id": 4,
            "title": "Shop",
            "path":"http://fivepetalfields.square.site/",
            "type":"EXTERNAL",
			"target": "_blank"
        },
        {
            "id": 5,
            "title": "Our Fields",
            "path": "/our-fields",
            "type":"WRAPPER",
            "items": [
                {
                    "id": 13,
                    "title":"What we're growing",
                    "path":"/our-fields/what-were-growing",
                    "type":"INTERNAL"
                },
                {
                    "id": 14,
                    "title":"For photographers",
                    "path":"/our-fields/photographers",
                    "type":"INTERNAL"
                }
            ],
        },
        {
            "id": 6,
            "title": "Blog",
            "path":"/articles",
            "type":"INTERNAL"
        }
    ]

    // const url = useStrapiUrl()

    // const { data: nav } = await useFetch(`${url}/navigation/render/2?type=TREE`)
</script>

<template>
    <Popover class="relative bg-white dark:bg-slate-700">
        <div class="mx-auto max-w-7xl px-5 md:px-10">
            <div
                class="flex items-center justify-between lg:justify-start py-6 md:space-x-10"
            >
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <NuxtLink to="/">
                        <AtomsLogo size="normal" />
                    </NuxtLink>
                </div>
                <div class="-my-2 -mr-2 lg:hidden">
                    <PopoverButton
                        class="inline-flex items-center justify-center rounded-md bg-white dark:bg-slate-800 p-2 text-slate-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lavender-500"
                    >
                        <span class="sr-only">Open menu</span>
                        <LazyNuxtIcon class="h-6 w-6" name="Menu" filled />
                    </PopoverButton>
                </div>

                <PopoverGroup as="nav" class="hidden space-x-8 lg:flex">
                    <template
                        v-for="(item, index) in nav"
                        :key="index"
                    >
                        <Popover v-if="item.type === 'WRAPPER'" class="relative" v-slot="{ open }">
                            <PopoverButton
                                :class="[
                                    open ? 'bg-lavender-500 text-white dark:bg-slate-800' : 'text-lavender-700 dark:text-white hover:bg-lavender-200 dark:hover:bg-slate-800',
                                    'group inline-flex items-center rounded-md px-2 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-lavender-500 dark:focus:ring-slate-800 focus:ring-offset-2',
                                ]"
                            >
                                <span>{{ item.title }}</span>
                                <LazyNuxtIcon
                                    :class="[
                                        open ? 'bg-lavender-500 text-white dark:bg-slate-800' : 'text-lavender-700 dark:text-white',
                                        'ml-2 h-5 w-5',
                                    ]"
                                    name="ChevronDown" filled
                                />
                            </PopoverButton>

                            <transition
                                enter-active-class="transition ease-out duration-200"
                                enter-from-class="opacity-0 translate-y-1"
                                enter-to-class="opacity-100 translate-y-0"
                                leave-active-class="transition ease-in duration-150"
                                leave-from-class="opacity-100 translate-y-0"
                                leave-to-class="opacity-0 translate-y-1"
                            >
                                <PopoverPanel
                                    class="absolute z-50 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                                >
                                    <div
                                        class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                                    >
                                        <div
                                            class="relative grid gap-6 bg-white dark:bg-slate-600 px-5 py-6 sm:gap-8 sm:p-8"
                                        >
                                            <template
                                                v-for="(xyz, index) in item.items"
                                                :key="index"
                                            >
                                                <NuxtLink
                                                    :to="xyz.path"
                                                    class="
                                                        -m-3
                                                        flex
                                                        items-start
                                                        rounded-lg
                                                        p-3
                                                        hover:bg-lavender-100
                                                        dark:hover:bg-slate-700
                                                    "
                                                >
                                                    <div class="ml-4">
                                                        <p
                                                            class="
                                                                text-lg
                                                                font-medium text-slate-800
                                                                dark:text-white
                                                            "
                                                        >
                                                            {{ xyz.title }}
                                                        </p>
                                                        <p
                                                            class="mt-1 text-base text-slate-500"
                                                        >
                                                            {{ xyz.description }}
                                                        </p>
                                                    </div>
                                                </NuxtLink>
                                            </template>
                                        </div>
                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover>

                        <NuxtLink
                            v-else
                            :to="item.path"
							:target="item.target"
                            class="
                                text-lg font-medium
                                rounded-md
                                px-2
                                text-lavender-700 dark:text-white hover:bg-lavender-200 dark:hover:bg-slate-800
                            "
                        >
                            {{ item.title }}
                        </NuxtLink>
                    </template>
                </PopoverGroup>

                <div class="hidden items-center justify-end lg:flex lg:flex-1 lg:w-0">
                    <a
                        href="mailto:hello@fivepetalfields.com"
                        class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full border border-transparent bg-lavender-700 dark:bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lavender-700 dark:hover:bg-slate-600 transition-all duration-300 ease-in-out"
                        >Contact us</a
                    >

                    <AtomsThemeSwitcher />
                </div>
            </div>
        </div>

        <transition
            enter-active-class="duration-200 ease-out"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="duration-100 ease-in"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
        >
            <PopoverPanel
                focus
                class="absolute inset-x-5 top-0 origin-top-right pt-5 transform transition lg:hidden z-50"
            >
                <div
                    class="rounded-lg bg-white dark:bg-slate-600 shadow-lg"
                >
                    <div class="px-5 pt-5">
                        <div class="flex items-center justify-between">
                            <NuxtLink to="/">
                                <AtomsLogo size="mobile" />
                            </NuxtLink>
                            <div class="-mr-2">
                                <PopoverButton
                                    class="inline-flex items-center justify-center rounded-md bg-white dark:bg-slate-800 p-2 text-slate-400 dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lavender-500"
                                >
                                    <span class="sr-only">Close menu</span>
                                    <LazyNuxtIcon class="h-6 w-6" name="XMark" filled />
                                </PopoverButton>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 pt-5 pb-6">
                        <div class="space-y-6 py-6">
                            <nav class="grid gap-y-8">
                                <template
                                    v-for="(item, index) in nav"
                                    :key="index"
                                >
                                    <template v-if="item.type === 'WRAPPER'">
                                        <p class="
                                            text-lg font-medium
                                            text-lavender-700 dark:text-white hover:text-lavender-800
                                            "
                                        >
                                            {{ item.title }}
                                        </p>
                                        <template
                                            v-for="(wrapper, index) in nav"
                                            :key="index"
                                        >
                                            <template v-if="wrapper.type === 'WRAPPER'">
                                                <NuxtLink
                                                    v-for="(item, index) in wrapper.items"
                                                    :key="index"
                                                    :to="item.path"
                                                    class="-m-3 flex items-start rounded-lg p-3 hover:bg-lavender-100"
                                                >
                                                    <div class="ml-4">
                                                        <p
                                                            class="text-lg font-medium text-slate-800 dark:text-white"
                                                        >
                                                            {{ item.title }}
                                                        </p>
                                                    </div>
                                                </NuxtLink>
                                            </template>
                                        </template>
                                    </template>

                                    <NuxtLink
                                        v-else
                                        :to="item.path"
										:target="item.target"
                                        class="
                                            text-lg font-medium
                                            text-lavender-700 dark:text-white hover:text-lavender-800
                                        "
                                    >
                                        {{ item.title }}
                                    </NuxtLink>
                                </template>
                            </nav>

                            <div>
                                <a
                                    href="mailto:hello@fivepetalfields.com"
                                    class="flex w-full items-center justify-center rounded-full border border-transparent bg-lavender-700 dark:bg-slate-800 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lavender-700 dark:hover:bg-slate-600"
                                    >Contact us</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>
