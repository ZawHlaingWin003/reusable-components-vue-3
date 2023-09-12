<template>
    <textarea
        rows="4"
        ref="el"
        :class="[
            'w-full rounded border-[1.5px] px-3 py-2 text-black transition focus:border-blue-800 focus:outline-none disabled:border-gray-400 disabled:bg-gray-200',
            invalid ? 'border-red-500 focus:border-red-700' : 'border-gray-300'
        ]"
        :id="id"
        :value="modelValue"
        :required="required"
        @input="
            $emit(
                'update:modelValue',
                ($event.target as HTMLInputElement).value
            )
        "
    ></textarea>
</template>

<script setup lang="ts">
const props = defineProps({
    id: String,
    modelValue: [String, Number],
    required: Boolean,
    invalid: Boolean,
    ariaDescribedBy: String
})

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped></style>
