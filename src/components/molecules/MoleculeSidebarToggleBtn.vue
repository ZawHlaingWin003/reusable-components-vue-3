<template>
    <div
        @click="toggleSidebar"
        class="toggle-btn absolute bottom-0 left-0 z-20 h-16 w-16 cursor-pointer items-center border bg-pink-300 text-white"
    >
        <span
            class="absolute duration-200 ease-linear"
            :class="{ 'rotate-180': isCollapsed }"
        >
            <i class="fa-solid fa-backward"></i>
        </span>
    </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
const { isCollapsed } = storeToRefs(useSidebarStore())
const { toggleSidebar } = useSidebarStore()
</script>

<style scoped>
.toggle-btn {
    clip-path: polygon(0 0, 0% 100%, 100% 100%);
}
</style>
