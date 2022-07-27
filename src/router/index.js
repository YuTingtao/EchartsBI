import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            // el: document.querySelector('body'),
            top: 0,
        };
    },
});

router.beforeEach((to, from, next) => {
    next();
})

export default router;
