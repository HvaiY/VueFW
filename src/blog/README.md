[TOC]
# blog
- `npm install -g @vue/cli` 之后使用cli 创建项目 `npm create blog`
 - `vue ui ` 可以直接进入vue面板

 - `npm install vue-router --save` vue路由
   - 一般指定路由配置js,如router/index.js (如下)
     - 引入路由，Vue.use(VueRouter)
     - 创建对象(指定路由与组件关系)
     - 导出路由(页面渲染处进行导入使用 这里直接在main.js 中渲染)
 - 默认路由组件 `<router-link>  <router-view>` 属性`this.$router`这个封装了 `history` 可以使用类似于`push ,replace,go`等 
   - 动态路由 路由地址 分号: 形式 `/user/:userName`  
     - 使用 `<router-link :to="'/user/'+userName" tag="Button"> 用户</router-link>` userName 绑定的动态数据 可以id 可以时其它
     - user 组件取值 自动属性中获取 `this.$route.params.userName`
   -  守卫 `router.beforeEach((to, from, next) => {}` 路由
# 守卫