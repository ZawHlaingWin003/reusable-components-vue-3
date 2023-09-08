<template>
    <input
        :class="[
            'w-full rounded-md border-[1.5px] p-2 text-black transition focus:border-blue-800 focus:outline-none disabled:border-gray-400 disabled:bg-gray-200',
            field.invalid
                ? 'border-red-500 focus:border-red-700'
                : 'border-gray-300'
        ]"
        :id="field.id"
        :value="props.modelValue"
        :required="field.required"
        @input="($event) => emit('update:modelValue', $event.target.value)"
    />
</template>

<script setup>
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
