import { createApp } from 'vue'
import { createWebHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue"
import About from "./views/About.vue"
import AppCompo from "./views/AppCompo.vue"
import Template from "./views/Template.vue"
import DataType from "./views/DataType.vue"
import Computed from "./views/Computed.vue"
import TodoTemplate from "./views/TodoTemplate.vue"

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/",component: Home},
        {path:"/about",component: About},
        {path:"/appAndCompo",component: AppCompo},
        {path:"/template",component: Template},
        {path:"/dataType",component: DataType},
        {path:"/computed",component: Computed},
        {path:"/todoTemplate", component:TodoTemplate}
    ]
});

export default router