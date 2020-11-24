# blog

 - `vue ui ` 可以直接进入vue面板

 - `npm install vue-router --save` vue路由
   - 一般指定路由配置js,如router/index.js (如下)
     - 引入路由，Vue.use(VueRouter)
     - 创建对象(指定路由与组件关系)
     - 导出路由(页面渲染处进行导入使用 这里直接在main.js 中渲染)
 - 默认路由组件 `<router-link>  <router-view>` 属性`this.$router`这个封装了 `history` 可以使用类似于`push ,replace,go`等 