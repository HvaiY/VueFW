// 配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载方式

const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const User = () => import("../components/User.vue");
const Messages = () => import("../components/messages");
const News = () => import("../components/news");
const Profile = () => import("../components/profile");

// 1、使用路由
Vue.use(VueRouter);

//2、创建路由对象
const routes = [
  {
    path: "/", // 默认 显示页
    redirect: "home",
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: "",
        redirect: "news",
      },
      {
        path: "news",
        component: News,
      },
      {
        path: "messages",
        component: Messages,
      },
    ],
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于",
    },
  },
  {
    path: "/user/:userName",
    component: User,
    meta: {
      title: "用户",
    },
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "档案",
    },
    beforeEnter: (to, from, next) => {
      console.log("组件独享守卫");
    },
  },
];

const router = new VueRouter({
  //配置路由和组件的关系
  routes,
  mode: "history", // 指定模式 路由地址不用hash 显示
  linkActiveClass: "active", // 指定链接 router-link-active 名称 为 active
});

// 全局守卫  设置 页面的title
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.matched[0].meta.title;

  next();
});

// 3、将router对象传入到vue实例
export default router;
