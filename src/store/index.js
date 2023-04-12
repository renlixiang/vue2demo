import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    users: [{
        userName: 'admin',
        password: '123456',
        phone: '19919878143',
        birthday: '1999-12-01',
        email: '2656742989@qq.com'
    }]
}

const actions = {

}

const mutations = {
    add_user: function (state, data) {
        state.users.push(data)
    },

    updatePassword: function (state, data) {
        for (let i in state.users) {
            if((data.userName === state.users[i].userName) && (data.phone === state.users[i].phone) && (data.email === state.users[i].email)) {
                state.users[i].password = data.password
            }
        }
    }
}

const getters = {

}


const store = new Vuex.Store({
    namespaced: true,
    state,
    actions,
    mutations,
    getters

})
export default store
