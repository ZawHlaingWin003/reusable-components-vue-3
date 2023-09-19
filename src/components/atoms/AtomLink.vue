<template>
    <component :is="props.as" :class="linkClass">
        <slot />
    </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props: any = defineProps({
    as: {
        type: [String, Object],
        validator(value: string) {
            return ['a', 'router-link', 'p', 'span'].includes(value)
        },
        default: 'a'
    },
    noTheme: {
        type: Boolean,
        default: false
    },
    underline: {
        type: Boolean,
        default: false
    }
})

const linkClass = computed(() => {
    const baseClass = props.noTheme
        ? 'text-gray-600 hover:text-purple-500 active:text-purple-600'
        : 'text-purple-500 hover:text-purple-400 active:text-purple-600'

    const additionalClasses = []

    if (props.underline) {
        additionalClasses.push('underline')
    }

    additionalClasses.push('cursor-pointer', 'transition-all')

    return [baseClass, ...additionalClasses].join(' ')
})
</script>

<style scoped></style>
