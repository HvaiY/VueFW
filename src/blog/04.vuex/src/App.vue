<template>
  <div id="app"> 
    <h1>----------父计数-----------</h1>
    {{this.$store.state.counter}}
     
   <input type="button" value="++" @click="increment">
   <input type="button" value="--"  @click="decrement">
   <input type="button" value="+5"  @click="counterAdd(5)">
   <input type="button" value="+10"  @click="counterAdd(10)">
   <input type="button" value="updateUserInfo"  @click="updateUserInfo">
   <input type="button" value="action调用"  @click="updateUserInfoAction">
     
    <h1>--------子计数----------</h1>
    <Counter :count="this.$store.state.counter"/>

     <h1>------------------</h1>
      {{$store.getters.allPersons}}
       <h1>------------------</h1>
      {{$store.getters.more20Person}}
       <h1>------------------</h1>
      {{$store.getters.moreAgePerson(26)}}
        <h1>------------------</h1>
      {{$store.getters.getUserInfo}}

 <h1>--------模块 modules----------</h1>
  {{$store.state.a.users}}  <br/>
  {{$store.getters.getUser}}
  <br/>
   <input type="button" value="updateUser"  @click="updateUser">
   <input type="button" value="action调用"  @click="updateUserAction">


  </div>
</template>

<script>
import Counter from './components/Counter.vue'
// import store from './store/index.js'
import store from './store/index-modules'
import {INCREMENT,DECREMENT} from './store/mutations-types'

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
      // this.$store.commit("decrement")  // 魔法字符串最好不要有 ，使用常量 
            this.$store.commit(DECREMENT)  // 使用常量 
    },
    increment(){
          // this.$store.commit("increment")
          this.$store.commit(INCREMENT)
    },
    counterAdd(count){
      // 直接传参数
      this.$store.commit('counterAdd',count);
      // 传对象
      setTimeout(()=>{
        this.$store.commit({type:'counterAddO',count});
      },2000)
    },
    updateUserInfo(){
      this.$store.commit('updateUserInfo');
    },
    updateUserInfoAction(){
      // action 调用
      this.$store.dispatch("updateUserInfoAction",{remark:'这是携带的备注信息',success:()=>{
   
             console.log("成功后的执行方法")        
      }}).then(res=>{
        console.log(res);
      })
    },
    updateUser(){
      this.$store.commit('add');
    },
    updateUserAction(){
      this.$store.dispatch('update') ;
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
