<template>
    <slot />
</template>

<script setup lang="ts">
const props = defineProps({
    id: String,
    modelValue: [String, Number],
    theme: String
})
</script>

<style scoped></style>
