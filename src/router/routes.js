const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@views/Home/index.vue')
  },
  {
    path: '/tournaments',
    name: 'Tournaments',
    component: () => import(/* webpackChunkName: "Tournaments" */ '@views/tournaments/index.vue')
  }
]

export default routes
