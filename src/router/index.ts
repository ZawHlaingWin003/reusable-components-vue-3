import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/buttons',
            name: 'buttons',
            component: () => import('../pages/Buttons.vue')
        },
        {
            path: '/inputs',
            name: 'inputs',
            component: () => import('../pages/Inputs.vue')
        },
        {
            path: '/avatars',
            name: 'avatars',
            component: () => import('../pages/Avatars.vue')
        },
        {
            path: '/selects',
            name: 'selects',
            component: () => import('../pages/Selects.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../pages/Test.vue')
        }
    ]
})

export default router
