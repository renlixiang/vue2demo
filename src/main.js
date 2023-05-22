import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import './theme/index.css'
import router from './router'
import store from './store/index'
import fireworks from '@/js/mouseStyle/fireworks'
import benevolence from "@/js/mouseStyle/benevolence";
import cobweb from '@/js/bgImage/cobweb'
import randomWrite from '@/js/mouseStyle/randomWrite'
import petal from "@/js/bgImage/petal";


Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$fireworks = fireworks
Vue.prototype.$benevolence = benevolence
Vue.prototype.$randomWrite = randomWrite
Vue.prototype.$cobweb = cobweb
Vue.prototype.$petal = petal

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

