import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      setTimeout(() => {
        VueScrollTo.scrollTo(to.hash, 1000);
        return { selector: to.hash }
      }, 400)
    } else if (savedPosition) {
      setTimeout(() => {
        VueScrollTo.scrollTo(savedPosition, 1000);
        return savedPosition;
      }, 500)
    } else {
      VueScrollTo.scrollTo(1500);
      return { x: 0, y: 0 }
    }
  },
})
router.beforeEach((to, from, next) => {
  next();
});

export default router
