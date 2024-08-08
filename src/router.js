import {createRouter, createWebHashHistory} from "vue-router";
import auth from "./auth";
//import components
import Login from "./views/Login.vue";
import Restaurant from "./views/Restaurant.vue";
import Users from "./views/User.vue";
import Review from "./views/Review.vue";
const routes = [
    {
        path: '/',
        name: 'Restaurants',
        component: Restaurant,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            guard: 'guest'
        }
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: Review,
        meta: {
            guard: 'auth'
        }
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/'
    }
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
});
router.beforeEach((to,from,next) => {
    if(to.meta.guard === 'auth' && !auth.isLogin()){
        next({name: 'Login'});
    }
    next();
});
export default router;