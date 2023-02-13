import {createRouter, createWebHistory} from "vue-router";

import AboutView from "../components/AboutView.vue";
import HomeView from "../components/HomeView.vue";

const router= createRouter({
    mode: "history",
    base: process.env.BASE_URL,
    history : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/about",
            name: "about",
            component: AboutView,
        }
    ]
})

export default router;