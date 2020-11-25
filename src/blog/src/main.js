import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.prototype.name =
  "给vue原型增加属性name,vue中所有的都继承vue 原型，那么其他的也有name 这个方法";
new Vue({
  render: (h) => h(App),
  router, // 使用路由
}).$mount("#app");

//
// var obj = {
//   name: "aa",
// };

// Object.defineProperty(obj, "age", 18);
// console.log(obj);

// // 组件的三个生命周期
// created(){
//   console.log("创建")
// };
// mounted(){
//   console.log("组件挂载")
// }
// updated(){
//   console.log('组件界面更新');

// }
