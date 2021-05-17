import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import About from "./views/About.vue"
import AppCompo from "./views/AppCompo.vue"



const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/",component: Home},
        {path:"/about",component: About},
        {path:"/appAndCompo",component: AppCompo}
    ]
});

export default router