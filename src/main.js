import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fontawesome from '@/assets/fontAwesome/css/all.min.css'
import generalStyle from '@/assets/style/general.scss'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(fontawesome)
Vue.use(generalStyle)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
