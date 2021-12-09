import Vue from 'vue'
import VueRouter from 'vue-router'
//this is where the styling for the entire site is coming from, i think
import Home from '../views/Home.vue'
//how to get to css file? Error: this relative module was not found: * ../css/style.sass in ./src/router/index.js
//import Sass from '../css/style.sass' this is not working???...


Vue.use(VueRouter)

const routes = [{
        //why is this one not like the other ones?
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/lunch-menu',
        name: 'LunchMenu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "lunch-menu" */ '../views/LunchMenu.vue'),
    },
    {
        path: '/dinner-menu',
        name: 'DinnerMenu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "dinner-menu" */ '../views/DinnerMenu.vue'),

    },
    {
        path: '/drink-menu',
        name: 'DrinkMenu',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "drinks-menu" */ '../views/DrinkMenu.vue'),

    },
    {
        path: '/catering',
        name: 'Catering',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "catering" */ '../views/Catering.vue'),

    },
    {
        path: '/checkout',
        name: 'Checkout',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "checkout" */ '../views/Checkout.vue'),

    }



]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router