<template>
    <input
        :class="[
            'w-full rounded border-[1.5px] px-3 py-2 text-black transition focus:border-blue-800 focus:outline-none disabled:border-gray-400 disabled:bg-gray-200',
            field.invalid
                ? 'border-red-500 focus:border-red-700'
                : 'border-gray-300'
        ]"
        :id="field.id"
        :value="props.modelValue"
        :required="field.required"
        :placeholder="placeholder"
        @input="
            $emit(
                'update:modelValue',
                ($event.target as HTMLInputElement).value
            )
        "
    />
</template>

<script setup lang="ts">
import { inject } from 'vue'
const props = defineProps({
    id: String,
    modelValue: [String, Number],
    required: Boolean,
    invalid: Boolean,
    ariaDescribedBy: String,
    placeholder: String,
    leftIcon: Boolean,
    rightIcon: Boolean,
    size: String,
    theme: String
})

const emit = defineEmits(['update:modelValue'])

const field = inject('field', props)
</script>

<style lang="scss" scoped></style>
