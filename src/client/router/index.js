import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => {
            return import(/* webpackChunkName: "about" */ "../views/About.vue");
        }
    },
    {
        path: "/activity-feed",
        name: "ActivityFeed",
        component: () => {
            return import(/* webpackChunkName: "about" */ "../views/ActivityFeed.vue");
        }
    },
    {
        path: "/404",
        name: "Notfound",
        component: () => {
            return import (/* webpackChunkName: "notFound"  */ "../views/NotFound.vue");
        }
    },
    {
        path: "/:catchAll(.*)",
        redirect: "/404"
    }
];

const router = new  VueRouter({
    mode: "history",
    base: __dirname,
    routes
});

export default router;