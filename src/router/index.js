import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'

Vue.use(Router);

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/home',
            name:'home',
            component: Home
        }
    ]
})

export default router