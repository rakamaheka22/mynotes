import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Detail from '../pages/Detail.vue';
import Edit from '../pages/Edit.vue';
import Register from '../pages/Register.vue';
import Login from '../pages/Login.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/detail/:id',
        component: Detail,
        children: [
            {
                path: 'edit',
                component: Edit
            }
        ]
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;