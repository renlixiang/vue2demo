import Vue from 'vue'
import Router from 'vue-router'
import loginVue from '@/components/login.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: loginVue
        }

    ]
})
