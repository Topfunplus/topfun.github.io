import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import BookView from '../views/BookView.vue'
import SignView from '../views/SignView.vue'
import SourceView from '../views/SourceView.vue'
import LoginView from "@/components/LoginView.vue";

Vue.use(VueRouter)
//重定向 默认跳转的 redirect:'/xxx'  当访问/的时候默认跳转到book
const routes = [{
    path: '/',
    redirect: '/login',
    //配规则
    //准备二级路由出口这里没有配置
    // children: [{
    //     path: '/source',
    //     component: SourceView,
    // }, {
    //     path: 'sign',
    //     component: SignView,
    // }]
}, {
    path: '/book',
    component: BookView,
},

    {
        path: '/sign',
        component: SignView,
    },
    {
        path: '/source',
        component: SourceView,
    }, {
        path: '/login',
        component: LoginView,
    }

]

const router = new VueRouter({
    routes
})

export default router