<template>
  <div class="tab-bar-item" @click="itemClick">
    <div class="img-icon">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
    </div>
    <div :class="{ active: isActive }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      isActive: false,
    };
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
.active {
  color: red;
}
.img-icon img {
  height: 25px;
  width: 25px;
}
</style>