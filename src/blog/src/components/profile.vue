<template>
    <div>
        <h2>我是 proffile 页面</h2>
        {{$route.query}} <br>
         {{$route.query.name}}
    </div>
</template>
<script>
export default {
    name:"profile"
}
</script>

<style  scoped>

</style>