<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import OrganismSidebar from './components/organisms/OrganismSidebar.vue'
import { useSidebarStore } from '@/stores/sidebar'
import { storeToRefs } from 'pinia'
const { sidebarWidth } = storeToRefs(useSidebarStore())
</script>

<template>
    <OrganismSidebar />
    <div :style="{ marginLeft: sidebarWidth }" class="p-5">
        <RouterView />
    </div>
</template>
