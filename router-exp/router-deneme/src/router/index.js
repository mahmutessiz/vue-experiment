import {createRouter, createWebHistory} from "vue-router";

import AboutView from "../components/AboutView.vue";
import HomeView from "../components/HomeView.vue";

const router= createRouter({
    history : createWebHistory("https://vue-experiment-rho.vercel.app/"),
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