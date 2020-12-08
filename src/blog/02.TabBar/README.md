### TabBar 
- 使用插槽slot 做到组件复用
- -路由管理  `npm install vue-router --save`
   - 为每个页面配置路由 借用组件的 `this.$router.replace('path')`  替换地址 path 可以使用组件的props 动态获取
   - 文件路径 可以在webpack.config.js 中取别名(cli2) cli4 默认 @为src的别名