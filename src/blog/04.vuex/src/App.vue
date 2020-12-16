<template>
  <div id="app"> 
    <h1>----------父计数-----------</h1>
    {{this.$store.state.counter}}
     
   <input type="button" value="++" @click="increment">
   <input type="button" value="--"  @click="decrement">
     
    <h1>--------子计数----------</h1>
    <Counter :count="this.$store.state.counter"/>
  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import store from './store/index.js'
export default {
  name: 'App',
  store,
  components: {
    Counter
  },
  data() {
    return {
     // count:1000
    }
  },
  methods: {
    decrement(){
      this.$store.commit("decrement")
    },
    increment(){
          this.$store.commit("increment")
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
