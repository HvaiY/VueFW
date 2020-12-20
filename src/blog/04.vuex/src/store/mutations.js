import Vue from 'vue'
import {
    INCREMENT,
    DECREMENT
} from './mutations-types'

export default {
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
    },
    add(state) {
        Vue.set(state.userInfo, 'test', "测试的一个内容分，方法名称与moduleA一样，那么两个方法一同存在");
    }
}