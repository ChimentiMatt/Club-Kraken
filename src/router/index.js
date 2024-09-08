import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        // {
        //     path: '/about',
        //     name: 'about',
        //     component: About
        // },
        {
            path: '/donate',
            name: 'donate',
            component: Donate
        },
    ]
})
export default router