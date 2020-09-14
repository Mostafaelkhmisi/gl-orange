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
      img: require('@assets/imgs/games-cover/pubg.png'),
      name: 'Pubg Mobile',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/pubg-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Pubg Game',
      game: 'Pubg',
      prize: '6000',
      joined: '476/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '2',
      img: require('@assets/imgs/games-cover/mobilelegends.png'),
      name: 'Mobile legends',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/mobilelegends-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Mobile Legends',
      game: 'Mobile legends',
      prize: '6000',
      joined: '300/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '3',
      img: require('@assets/imgs/games-cover/modern.png'),
      name: 'Modern combat 5',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/modern-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Modern combat 5',
      game: 'Modern combat 5',
      prize: '2000',
      joined: '400/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '4',
      img: require('@assets/imgs/games-cover/clash1.png'),
      name: 'Clash of clans',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/clash-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Clash of clans',
      game: 'Clash of clans',
      prize: '7000',
      joined: '250/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '5',
      img: require('@assets/imgs/games-cover/modern.png'),
      name: 'Modern warfare',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/modern-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Modern warfare',
      game: 'Modern warfare',
      prize: '7000',
      joined: '520/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '6',
      img: require('@assets/imgs/games-cover/pubg.png'),
      name: 'Pubg',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/pubg-logo.png'),
      time: '20:00 PM',
      format: '5v5',
      title: 'eSports League - Pubg',
      game: 'Pubg',
      prize: '4000',
      joined: '500/600',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '7',
      img: require('@assets/imgs/games-cover/pubg.png'),
      name: 'Pubg',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/pubg-logo.png'),
      time: '20:00 PM',
      format: '1v1',
      title: 'eSports League - Pubg',
      game: 'Pubg',
      prize: '1000',
      joined: '100/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '8',
      img: require('@assets/imgs/games-cover/modern.png'),
      name: 'Cod',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/modern-logo.png'),
      time: '20:00 PM',
      format: '1v1',
      title: 'eSports League - Cod',
      game: 'Cod',
      prize: '1000',
      joined: '100/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '9',
      img: require('@assets/imgs/games-cover/clash1.png'),
      name: 'Clash',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/clash-logo.png'),
      time: '20:00 PM',
      format: '1v1',
      title: 'eSports League - Clash',
      game: 'Clash',
      prize: '1000',
      joined: '100/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '10',
      img: require('@assets/imgs/games-cover/modern.png'),
      name: 'Valorant',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/modern-logo.png'),
      time: '20:00 PM',
      format: '1v1',
      title: 'eSports League - Valorant',
      game: 'Valorant',
      prize: '1000',
      joined: '100/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
    },
    {
      id: '11',
      img: require('@assets/imgs/games-cover/modern.png'),
      name: 'Fortnite',
      date: '12 Jan 2020',
      gamelogo: require('@assets/imgs/gameslogo/modern-logo.png'),
      time: '20:00 PM',
      format: '1v1',
      title: 'eSports League - Fortnite',
      game: 'Fortnite',
      prize: '1000',
      joined: '100/200',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
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
