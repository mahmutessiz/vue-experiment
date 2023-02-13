import {createRouter, createWebHistory} from "vue-router";

import AboutView from "../components/AboutView.vue";
import HomeView from "../components/HomeView.vue";
import App from "../App.vue";

const router= createRouter({
    history : createWebHistory("_redirect"),
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