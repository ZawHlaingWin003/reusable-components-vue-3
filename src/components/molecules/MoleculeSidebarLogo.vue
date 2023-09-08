<template>
    <div class="logo h-16 text-center">
        <transition name="fade" mode="out-in">
            <h1
                class="text-xl font-semibold text-purple-700"
                v-if="isCollapsed"
            >
                <span
                    class="flex w-full items-center justify-center rounded bg-slate-200 py-2"
                >
                    <span>Z</span>
                    <span>G</span>
                </span>
            </h1>
            <h1 class="text-xl font-semibold text-purple-700" v-else>
                <span class="flex items-center justify-center py-2">
                    Z-Sidebar
                </span>
            </h1>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
const { isCollapsed } = storeToRefs(useSidebarStore())
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
