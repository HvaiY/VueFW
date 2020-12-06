<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home-1.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/home-2.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category-1.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/category-2.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/gouwu-1.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/gouwu-2.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/myself-1.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/tabbar/myself-2.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style scope>
</style>
