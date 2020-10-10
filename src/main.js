import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import fontawesome from '@/assets/fontAwesome/css/all.min.css';
import generalStyle from '@/assets/style/general.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Vuelidate from 'vuelidate';
import VueNotifications from 'vue-notifications';
import iziToast from 'izitoast'; // https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css';

function toast ({ title, message, type, timeout, cb }) {
  if (type === VueNotifications.types.warn) type = 'warning';
  return iziToast[type]({ title, message, timeout });
}
iziToast.settings({
  timeout: 4000,
  position: 'topRight'
  // transitionIn: 'flipInX',
  // transitionOut: 'flipOutX',
  // onOpening: function () {
  //   console.log('callback abriu!');
  // },
  // onClosing: function () {
  //   console.log('callback fechou!');
  // }
});
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
};

Vue.use(VueNotifications, options);

Vue.use(Vuelidate);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(fontawesome);
Vue.use(generalStyle);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created () {
    AOS.init({
      once: true // whether animation should happen only once - while scrolling down
    });
  },
  render: h => h(App)
}).$mount('#app');
