export default {
    state: {
        users: [{
            code: 'a001',
            name: '小a'
        }]
    },
    mutations: {
        add(state) {
            state.users.push({
                name: '小卜',
                code: 'b001'
            });
        }
    },
    getters: {
        getUser(state) {
            return state.users;
        }
    },
    actions: {
        update(context) {
            console.log(context)
            // 可以访问根store
            console.log(context.rootGetters.allPersons)
            setTimeout(() => {
                context.commit('add');
            }, 1000)
        }
    }
}