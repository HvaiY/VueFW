// 配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import User from '../components/User.vue'

// 1、使用路由
Vue.use(VueRouter);

//2、创建路由对象
const routes=[
     {
    path:'/', // 默认 显示页
    redirect:"home" 
},
 {
    path:'/home',
 component:Home
},
  {
     path:'/about',
     component:About
},
,
  {
     path:'/user/:userName',
     component:User
}
]

const router=new VueRouter({
//配置路由和组件的关系 
    routes,
    mode:"history" , // 指定模式 路由地址不用hash 显示
    linkActiveClass:"active"  // 指定链接 router-link-active 名称 为 active
})

// 3、将router对象传入到vue实例
export  default router;
