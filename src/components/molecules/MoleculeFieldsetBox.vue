<template>
    <fieldset
        class="mx-auto flex w-2/3 flex-wrap items-center gap-4 border p-6"
    >
        <legend class="px-2 font-semibold text-slate-500">
            {{ props.title }}
        </legend>
        <slot />
    </fieldset>
</template>

<script setup lang="ts">
const props = defineProps({
    title: {
        type: String
    }
})
</script>

<style scoped></style>
