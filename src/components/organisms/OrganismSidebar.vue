<template>
    <aside
        class="sidebar fixed bottom-0 left-0 top-0 z-10 float-left flex flex-col bg-purple-400 px-2 py-5 transition-all"
        :style="{
            width: sidebarWidth
        }"
    >
        <MoleculeSidebarLogo />

        <OrganismSidebarLinks :sidebar-links="sidebarLinks" />

        <MoleculeSidebarToggleBtn />
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useSidebarStore } from '@/stores/sidebar'
import MoleculeSidebarLogo from '../molecules/MoleculeSidebarLogo.vue'
import OrganismSidebarLinks from './OrganismSidebarLinks.vue'
import MoleculeSidebarToggleBtn from '../molecules/MoleculeSidebarToggleBtn.vue'
const sidebarStore = useSidebarStore()
const { sidebarWidth } = storeToRefs(sidebarStore)

const sidebarLinks = ref([
    {
        to: { name: 'home' },
        icon: 'fa-solid fa-house',
        text: 'Home'
    },
    {
        to: { name: 'avatars' },
        icon: 'fa-solid fa-user-tie',
        text: 'Avatars'
    },
    {
        to: { name: 'buttons' },
        icon: 'fa-solid fa-computer-mouse',
        text: 'Buttons'
    },
    {
        to: { name: 'inputs' },
        icon: 'fa-solid fa-keyboard',
        text: 'Inputs'
    },
    {
        to: '/test',
        icon: 'fa-solid fa-square-caret-down',
        text: 'Selects'
    }
])
</script>

<style scoped></style>
