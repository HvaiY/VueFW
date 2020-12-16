<template>
    <div>
        <h2>{{count}}</h2>
    </div>
</template>
<script>
export default {
    name:"counter",
    props:{
        count:{
            type:Number,
            default:1000
        }
    }
}
</script>
<style   scoped>

</style>