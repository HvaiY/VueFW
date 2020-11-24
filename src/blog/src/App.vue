<template>
  <div id="app">
    <!-- router-view 占位  表示在哪里显示 -->
    <router-view></router-view>
    <!-- replace 属性 浏览器返回按钮灰色 -->
    <!-- tag 链接显示成什么 -->
    <!-- router-link-active 自动属性 样式 k可以在路由实例里面指定名称 -->
    <router-link to="/home" replace>首页 </router-link>
    <router-link to="/about"> 关于</router-link>
    <router-link to="/home" tag="Button" replace>首页 </router-link>
    <router-link to="/about" tag="Button"> 关于</router-link>

    <button @click="homeClick" class="active">触发首页</button>
    <button @click="aboutClick" class="active">触发关于</button>
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {},
  methods: {
    homeClick() {
      // history.pushState({},"","/home")

      this.$router.replace("/home").catch((err) => {
        console.log(err);
      });
    },
    aboutClick() {
      this.$router.push("/about").catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>

<style>
.active {
  color: red;
}
</style>
