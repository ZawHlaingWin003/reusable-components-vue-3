<template>
    <label :for="props.for" class="mb-1 inline-block text-sm">
        <slot />
        <span class="ml-1 text-red-600" v-if="props.required">*</span>
    </label>
</template>

<script setup lang="ts">
const props = defineProps({
    for: String,
    required: Boolean
})
</script>

<style lang="scss" scoped></style>
