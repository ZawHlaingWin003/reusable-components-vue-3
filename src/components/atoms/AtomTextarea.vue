<template>
    <textarea
        rows="4"
        :class="[
            'w-full rounded-md border-[1.5px] p-2 text-black transition focus:border-blue-800 focus:outline-none disabled:border-gray-400 disabled:bg-gray-200',
            props.invalid
                ? 'border-red-500 focus:border-red-700'
                : 'border-gray-300'
        ]"
        :id="props.id"
        :value="props.modelValue"
        :required="props.required"
        @input="($event) => emit('update:modelValue', $event.target.value)"
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
