import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import news from './modules/news'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    news,
    auth,
  },
})
