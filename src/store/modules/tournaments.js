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
  tournaments: [
    {
      id: '1',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Pubg Mobile',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Pubg Game',
      game: 'Pubg',
      prize: '6000',
      joined: '476/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    },
    {
      id: '2',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Mobile legends',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Mobile Legends',
      game: 'Mobile legends',
      prize: '6000',
      joined: '300/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    },
    {
      id: '3',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Modern combat 5',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Modern combat 5',
      game: 'Modern combat 5',
      prize: '2000',
      joined: '400/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    },
    {
      id: '4',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Clash of clans',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Clash of clans',
      game: 'Clash of clans',
      prize: '7000',
      joined: '250/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    },
    {
      id: '5',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Modern warfare',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Modern warfare',
      game: 'Modern warfare',
      prize: '7000',
      joined: '520/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    },
    {
      id: '6',
      img: 'https://via.placeholder.com/439x248?text=Visit+Blogging.com+NowC/O https://placeholder.com/',
      name: 'Pubg',
      date: '12 Jan 2020',
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Pubg',
      game: 'Pubg',
      prize: '4000',
      joined: '500/600',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their'
    }

  ]
}

/*
|---------------------------------------------
| Getters
|---------------------------------------------
*/
const getters = {
  getTournaments (state) {
    return state.tournaments
  }
}
/*
|---------------------------------------------
| Mutations
|---------------------------------------------
*/
const mutations = {}
/*
|---------------------------------------------
| Actions
|---------------------------------------------
*/
const actions = {}

// Export the module
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
