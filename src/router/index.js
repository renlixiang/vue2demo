import Vue from 'vue'
import Router from 'vue-router'
import LoginVue from '@/components/Login.vue'
import MainVue from '@/components/Main'
import testVue from '@/components/test1'
import test2Vue from '@/components/test2'
import HomeVue from '@/components/Home'
import ThreeVue from '@/components/Three'

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
            component: LoginVue
        },{
            path: '/',
            name: 'main',
            component: MainVue,
            children: [
                {
                    path: '/home',
                    name: '首页',
                    component: HomeVue,
                    meta: {affix: true}
                },{
                    path: '/nav1/test1',
                    name: '测试1',
                    component: testVue,
                },{
                    path: '/nav1/test2',
                    name: '测试2',
                    component: test2Vue
                },{
                    path: '/nav2/three',
                    name: '3D',
                    component: ThreeVue
                }
            ]
        }

    ]
})
