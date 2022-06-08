import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomePage.vue";
import User from "@/views/UserPage.vue";
import NotFound from "@/views/NotFound";
import ArmyPage from "@/views/ArmyPage";
import BlogPage from "@/views/BlogPage";
import FreelancePage from "@/views/FreelancePage";
import FoundationalMelodies from "@/views/FoundationalMelodies";
import PublicSpeaking from "@/views/PublicSpeaking";


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
        path: "/freelance",
        name: "freelance",
        component: FreelancePage
    },
    {
        path: "/foundational-melodies",
        name: "foundational-melodies",
        component: FoundationalMelodies
    },
    {
        path: "/public-speaking",
        name: "public-speaking",
        component: PublicSpeaking
    },
    {
        path: "/blog",
        name: "blog",
        component: BlogPage
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