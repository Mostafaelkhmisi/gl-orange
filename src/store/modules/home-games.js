/*
|--------------------------------------------------------------------------
| Vuex Module
|--------------------------------------------------------------------------
|
| Vuex module for Socket.io connection.
|
*/

/*
|---------------------------------------------
| States
|---------------------------------------------
*/
const state = {
  homeCarousel: [
    {
      id: '1',
      img: require('@assets/imgs/home-games/image-1.png')
    },
    {
      id: '2',
      img: require('@assets/imgs/home-games/image-2.png')
    },
    {
      id: '3',
      img: require('@assets/imgs/home-games/image-3.png')
    },
    {
      id: '4',
      img: require('@assets/imgs/home-games/image-4.png')
    },
    {
      id: '5',
      img: require('@assets/imgs/home-games/image-5.png')
    },
    {
      id: '6',
      img: require('@assets/imgs/home-games/image-1.png')
    },
    {
      id: '7',
      img: require('@assets/imgs/home-games/image-2.png')
    },
    {
      id: '8',
      img: require('@assets/imgs/home-games/image-3.png')
    },
    {
      id: '9',
      img: require('@assets/imgs/home-games/image-4.png')
    },
    {
      id: '10',
      img: require('@assets/imgs/home-games/image-5.png')
    }
  ]
};
/*
|---------------------------------------------
| Getters
|---------------------------------------------
*/
const getters = {
  getHomecarousel (state) {
    return state.homeCarousel;
  }
};
/*
|---------------------------------------------
| Mutations
|---------------------------------------------
*/
const mutations = {};
/*
|---------------------------------------------
| Actions
|---------------------------------------------
*/
const actions = {};

// Export the module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
