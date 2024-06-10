/**
 * createRouter 这个为创建路由的方法
 * createWebHashHistory 这个就是vue2中路由的模式，
 *                      这里的是hash模式，这个还可以是createWebHistory等
 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

// 路由记录
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/index.vue')
    },
    {
        path: '/digitalRoom',
        name: 'digitalRoom',
        component: () => import('../views/digitalRoom.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/Test.vue')
    },
    {
        path: '/count',
        name: 'count',
        component: () => import('../components/CountBottom.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;

