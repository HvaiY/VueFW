import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
// state：存储状态。也就是变量；
// getters：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
// mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
// actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
// modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。
const Store = new Vuex.Store({
    // 全局参数
    state: {
        counter: 1000
    },
    mutations: {
        //这里是set方法 
        decrement(state){
           state.counter--;
        },
        increment(state){
          state.counter++;
        }
    },
    getters: {
    },
    actions: {},
    modules: {

        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

    }

});

export default Store;