/*
|--------------------------------------------------------------------------
| Vuex Store
|--------------------------------------------------------------------------
|
| Vuex will act as a centralize store for the application.
| Here we build all the modules for the app.
| Some of the dashboard modules will be dynamically registered.
|
*/
// Imports
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import tournaments from './modules/tournaments'
import homeGames from './modules/home-games'
// Extend Vue to use Vuex
Vue.use(Vuex)

// Enable strict mode
const isDev = process.env.NODE_ENV !== 'production'
// Export the store
export default new Vuex.Store({
  strict: isDev,
  modules: { tournaments, homeGames }
})
