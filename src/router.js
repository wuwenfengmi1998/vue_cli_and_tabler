import { createRouter,createWebHashHistory } from "vue-router";
import home from './home.vue'
import login from './login.vue'
import sign from './sign.vue'
import config from './config.vue'

const router = createRouter({

    history: createWebHashHistory(),

    routes:[
        {path: '/',component:home},
        {path: '/home',component:home},
        {path: '/login',component:login},
        {path: '/sign',component:sign},
        {path: '/config',component:config},

    ]

})

export default router