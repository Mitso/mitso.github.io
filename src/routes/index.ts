import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Landing
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
})

export default router;