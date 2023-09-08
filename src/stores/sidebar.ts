import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', () => {
    const isCollapsed: Ref<boolean> = ref(
        localStorage.getItem('isCollapsed')?.toLowerCase() === 'true' || false
    )

    const toggleSidebar = () => {
        console.log(isCollapsed.value)
        isCollapsed.value = !isCollapsed.value
        localStorage.setItem('isCollapsed', isCollapsed.value.toString())
    }

    const SIDEBAR_WIDTH = 208
    const SIDEBAR_WIDTH_COLLAPSED = 64

    const sidebarWidth = computed(() => {
        return `${
            isCollapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH
        }px`
    })

    return { isCollapsed, sidebarWidth, toggleSidebar }
})
