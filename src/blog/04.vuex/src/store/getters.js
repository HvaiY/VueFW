export default {
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
}