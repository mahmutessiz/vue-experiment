import {createRouter, createWebHistory} from "vue-router";

import AboutView from "../components/AboutView.vue";
import HomeView from "../components/HomeView.vue";
import App from "../App.vue";

const router= createRouter({
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
        },
        {
            path: "/app",
            name: "app",
            component: App,
        }
    ]
})

export default router;