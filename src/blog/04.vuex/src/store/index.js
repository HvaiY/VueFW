import Vue from 'vue';
import Vuex from 'vuex';
import {
    INCREMENT,
    DECREMENT
} from './mutations-types'

Vue.use(Vuex);
// state：存储状态。也就是变量；
// getters：派生状态。也就是set、get中的get，有两个可选参数：state、getters分别可以获取state中的变量和其他的getters。外部调用方式：store.getters.personInfo()。就和vue的computed差不多；
// mutations：提交状态修改。也就是set、get中的set，这是vuex中唯一修改state的方式，但不支持异步操作。第一个参数默认是state。外部调用方式：store.commit('SET_AGE', 18)。和vue中的methods类似。
// actions：和mutations类似。不过actions支持异步操作。第一个参数默认是和store具有相同参数属性的对象。外部调用方式：store.dispatch('nameAsyn')。
// modules：store的子模块，内容就相当于是store的一个实例。调用方式和前面介绍的相似，只是要加上当前子模块名，如：store.a.getters.xxx()。
const Store = new Vuex.Store({
    // 全局参数
    state: {
        counter: 1000,
        persons: [{
                id: '001',
                name: '大海',
                age: 18
            },
            {
                id: '002',
                name: '小海',
                age: 28
            }, {
                id: '003',
                name: '琪琪',
                age: 38
            },
            {
                id: '004',
                name: '琳琳',
                age: 26
            }
        ],
        userInfo: {
            code: '123',
            name: '琳琳',
            age: '23'
        }
    },
    mutations: {
        // //这里是set方法 
        // decrement(state) {
        //     state.counter--;
        // },
        // increment(state) {
        //     state.counter++;
        // },
        //这里是set方法 
        [DECREMENT](state) {
            state.counter--;
        },
        [INCREMENT](state) {
            state.counter++;
        },
        counterAdd(state, count) {
            state.counter = state.counter + count;
        },
        counterAddO(state, payload) {
            state.counter += payload.count;
        },
        updateUserInfo(state) {
            // state.userInfo.address = "上海"; // 以往 这个不会进行双向绑定，vuex 没有在state 属性里面对address初始化，则无法监控
            //  state.userInfo['email'] = "337646685@qq.com"; // 以往 同样不会监控 页面不会变化 ，变化的仅仅是vue store
            Vue.set(state.userInfo, 'phone', '123456'); //vue 提供的设置方法可以做到数据双向绑定
            // delete 删除同样可以做到
            delete state.userInfo.age;
            Vue.delete(state.userInfo, 'name');
        },
        updateUserInfoActionM(state, remark) {
            console.log(remark)
            Vue.set(state.userInfo, 'remark', remark);
        }
    },
    getters: {
        allPersons(state) {
            return state.persons;
        },
        more20Person(state, getters) {
            return getters.allPersons.filter(t => t.age > 20);
        },
        moreAgePerson(state, getters) {
            return function (age) {
                return getters.allPersons.filter(t => t.age > age);
            }
        },
        getUserInfo(state) {
            return state.userInfo;
        }
    },
    actions: {
        // 异步方法一般需要再actions 里面 调用 mutations 里面的方法处理
        updateUserInfoAction(context, payload) {

            return new Promise((resolve) => {
                setTimeout(() => {
                    context.commit("updateUserInfoActionM", payload.remark);
                    payload.success();
                    resolve("成功执行了 ");
                }, 1000)
            });

        }

    },
    modules: {

        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里

    }

});

export default Store;