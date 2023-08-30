import { createRouter,createWebHashHistory } from "vue-router";
import home from './home.vue'
import login from './login.vue'
import sign from './sign.vue'
import config_account from './config_account.vue'
import config_bind from './config_bind.vue'
import config_password from './config_password.vue'
const router = createRouter({

    history: createWebHashHistory(),

    routes:[
        {path: '/',component:home},
        {path: '/home',component:home},
        {path: '/login',component:login},
        {path: '/sign',component:sign},
        {path: '/config_account',component:config_account},
        {path: '/config_bind',component:config_bind},
        {path: '/config_password',component:config_password},

    ]

})

export default router