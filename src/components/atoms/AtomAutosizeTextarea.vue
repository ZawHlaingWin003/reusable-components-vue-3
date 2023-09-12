<template>
    <AtomTextarea
        :modelValue="modelValue"
        :id="id"
        :invalid="!!invalid"
        ref="el"
        @update:modelValue="$emit('update:modelValue', $event)"
    />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import autosize from 'autosize'
import AtomTextarea from './AtomTextarea.vue'

const props = defineProps({
    id: String,
    modelValue: [String, Number],
    required: Boolean,
    invalid: Boolean,
    ariaDescribedBy: String
})

const el = ref<InstanceType<typeof AtomTextarea> | null>(null)

onMounted(() => {
    const textareaElement = el.value?.$refs.el
    if (textareaElement) {
        autosize(textareaElement)
    }
})

onBeforeUnmount(() => {
    const textareaElement = el.value?.$refs.el
    if (textareaElement) {
        autosize.destroy(textareaElement)
    }
})
</script>

<style scoped></style>
