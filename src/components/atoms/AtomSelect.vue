<template>
    <slot />
</template>

<script setup lang="ts">
const props = defineProps({
    id: String,
    modelValue: [String, Number],
    options: Array,
    theme: String,
    search: Boolean
})
</script>

<style scoped></style>
