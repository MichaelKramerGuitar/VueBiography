import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import About from "@/views/AboutPage.vue";
import User from "@/views/UserPage.vue";
import NotFound from "@/views/NotFound";
import ArmyPage from "@/views/ArmyPage";
import BlogPage from "@/views/BlogPage";


// https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/army",
        name: "army",
        component: ArmyPage
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogPage
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/user/:name",  // <-- notice the colon
        name: "User",
        component: User,
        props: true,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
});

export default router;