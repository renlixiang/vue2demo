import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        MenuList: [],
        openTab: [],
        activeTab: '',
        users: [{
            userName: 'admin',
            password: '123456',
            phone: '19919878143',
            birthday: '1999-12-01',
            email: '2656742989@qq.com'
        }]

    },
    mutations: {

        // 添加标签页
        ADD_TAB (state, data) {
            // 判断是否已经存在
            const isExist = state.openTab.some(item => item.name === data.name)
            // 不存在，添加到数组内
            if (!isExist) {
                this.state.openTab.push(data)
                // window.sessionStorage.setItem('openTab',this.state.openTab)
                // this.state.openTab = window.sessionStorage.getItem('openTab')
                // console.log('data' + ' ' + data.name)
            }
            // let log = ''
            // for (let i in data) {
            //     log += i + ':' + data[i] + '\n'
            // }
            // console.log(log)

        },
        // 删除标签页
        DEL_TAB (state, route) {
            let index = 0
            // 找到在数组中的位置
            for (let tab of state.openTab) {
                if (tab.route === route) {
                    break
                }
                index++
            }
            // 删除
            this.state.openTab.splice(index, 1)
        },
        // 激活标签页
        ACTIVE_INDEX (state, index) {
            this.state.activeTab = index
            // console.log('index' + ':' + index)
        },

        ADD_USER: function (state, data) {
            state.users.push(data)
        },

        UPDATE_PASSWORD: function (state, data) {
            for (let i in state.users) {
                if((data.userName === state.users[i].userName) && (data.phone === state.users[i].phone) && (data.email === state.users[i].email)) {
                    state.users[i].password = data.password
                }
            }
        }
    },

    actions: {
        addUser({commit}, data) {
            commit('ADD_USER', data)
        },
        updatePassword({commit}, data) {
            commit('UPDATE_PASSWORD', data)
        },
        addTab ({commit}, data) {
            commit('ADD_TAB', data)
        },
        activeIndex({commit}, index) {
            commit('ACTIVE_INDEX', index)
        },
        delTab ({commit}, route) {
            commit('DEL_TAB', route)
        },
    }
})
