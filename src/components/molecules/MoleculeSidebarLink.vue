<template>
    <router-link
        :to="to"
        class="link relative my-2 flex cursor-pointer select-none items-center rounded px-4 py-2 font-bold text-gray-50 outline-none hover:bg-purple-500 focus:ring-1 focus:ring-primary-600 focus:ring-opacity-25 active:bg-purple-700"
        :class="{ 'bg-purple-600': isActive }"
    >
        <span class="mr-4 w-4">
            <i :class="icon"></i>
        </span>
        <transition name="fade" mode="out-in">
            <span v-if="!isCollapsed">
                {{ text }}
            </span>
        </transition>
    </router-link>
</template>

<script setup lang="ts">
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const { isCollapsed } = storeToRefs(useSidebarStore())

const route = useRoute()
const router = useRouter()

const isActive = computed(() => {
    if (typeof props.to == 'string') {
        return route.path == props.to
    } else if (typeof props.to == 'object' && props.to.name) {
        return route.path == router.resolve(props.to).href
    }
})

const props = defineProps({
    to: {
        type: [String, Object],
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
