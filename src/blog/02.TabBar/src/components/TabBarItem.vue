<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="img-icon">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
    </div>
    <!-- <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div> -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive: false,
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) == 0;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      console.log(this.$router);
      this.$router
        .replace(this.path)
        .catch((e) => console.log("重复点击报错", e));
    },
  },
};
</script>

<style scope>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
/*样式使用 activeColor 动态绑定 */
/* .active {
  color: red;
} */
.img-icon img {
  height: 25px;
  width: 25px;
}
</style>