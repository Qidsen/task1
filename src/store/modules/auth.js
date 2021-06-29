import axios from 'axios';
import router from '@/router'

export default {
  namespaced: true,

  actions: {
    logIn() {
      router.push('/login').catch(()=>{});
    },
    logOut({ commit }) {
      commit('user/setUnique', { id: null }, { root: true });
      router.push('/news').catch(()=>{});
    },
    makeLogin({ commit }, logParams) {
      return axios.post('/validate', logParams).then(({ data }) =>
        commit('user/setUnique', { status: status, id: data.data.id }, { root: true }),
      )
    },
  },
}
