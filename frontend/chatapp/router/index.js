import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue') 
        },
        {
            path: '/login',
            component: () => import('../views/LoginView.vue') 
        },
        {
            path: '/channel',
            component: () => import('../views/ShowChannelView.vue') 
        },
        {
            path: '/register',
            component: () => import('../views/RegisterView.vue') 
        },
        {
            path: '/groups',
            component: () => import('../views/GroupsView.vue') 
        },
    ]
})

export default router