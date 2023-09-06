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
        {path: '/',component:home,meta:{title:'home'}},
        {path: '/home',component:home,meta:{title:'home'}},
        {path: '/login',component:login,meta:{title:'login'}},
        {path: '/sign',component:sign,meta:{title:'sign'}},
        {path: '/config_account',component:config_account,meta:{title:'account'}},
        {path: '/config_bind',component:config_bind,meta:{title:'bind'}},
        {path: '/config_password',component:config_password,meta:{title:'password'}},

    ]

})

router.beforeEach((to, from, next) => {
    //beforeEach是router的钩子函数，在进入路由前执行
    if (to.meta.title) {
        //判断是否有标题
        //console.log(to.meta.title)
        document.title = to.meta.title
    } else {
        console.log('no title')
        document.title = 'Hi VUE'
    }
    next()
})

export default router