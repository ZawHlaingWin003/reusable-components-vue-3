<template>
    <div class="sidebar-links">
        <template v-for="(link, index) in sidebarLinks" :key="index">
            <MoleculeSidebarLink
                :to="link.to"
                :icon="link.icon"
                :text="link.text"
            />
        </template>
    </div>
</template>

<script setup lang="ts">
import MoleculeSidebarLink from '../molecules/MoleculeSidebarLink.vue'
const props = defineProps({
    sidebarLinks: {
        type: Object,
        required: true
    }
})
</script>

<style scoped></style>
