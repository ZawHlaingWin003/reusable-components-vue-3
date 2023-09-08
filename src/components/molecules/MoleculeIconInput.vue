<template>
    <div class="relative">
        <AtomInput
            type="text"
            class="peer pl-16"
            placeholder="Subscribe Me <3"
        />
        <div
            class="icon absolute top-0 flex h-full items-center border-r border-r-slate-300 bg-slate-200 px-3 opacity-50 peer-focus:border-r-blue-800 peer-focus:text-red-400"
        >
            <slot name="icon" />
        </div>
    </div>
</template>

<script setup>
import AtomInput from '@/components/atoms/AtomInput.vue'
</script>

<style lang="scss" scoped></style>
