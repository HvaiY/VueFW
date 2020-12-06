<template>
  <div>
    <h2>用户</h2>
    <p>{{userInfo}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userInfo:function(){ 
      return this.$route.params.userName;
    }
  }
};
</script>

<style scoped>
</style>