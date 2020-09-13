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
  },
  {
    path: '/tournament/:id',
    name: 'Tournament',
    component: function () {
      return import(/* webpackChunkName: "Tournament" */ '@views/tournaments/tournament/tournament.vue')
    }
  }
]

export default routes
