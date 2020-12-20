import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleB from './modules/moduleB'
import moduleA from './modules/moduleA'



Vue.use(Vuex);
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
    mutations,
    getters,
    actions,
    modules: {

        //这里是我自己理解的是为了给全局变量分组，所以需要写提前声明其他store文件，然后引入这里
        // 模块中 的除state 之外全部合并到夫store 里面了 所有 mutations getters actions 全部一样了、可以调用
        a: moduleA,
        moduleB

    }

});

export default Store;