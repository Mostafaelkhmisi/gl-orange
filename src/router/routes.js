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
      return import(/* webpackChunkName: "Tournament" */ '@views/tournaments/tournament/tournament.vue');
    }
  },
  {
    path: '*',
    name: 'Error404',
    component: function () {
      return import(/* webpackChunkName: "404" */ '@components/layout/errorPage.vue');
    }

  }
]

export default routes
