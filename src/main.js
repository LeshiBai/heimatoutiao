import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'

Vue.use(vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
