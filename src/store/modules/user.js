import axios from 'axios';

export default {
  namespaced: true,
  state: {
    unique: {
      status: "",
      id: null,
    },
    info: {},
  },
  mutations: {
    setUnique(state, payload) {
      state.unique = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    }
  },
  actions: {
    getProfile({ commit }, unique) {
      return axios.get(`/user-info/${unique.id}`).then(({ data }) => {
        commit('setInfo', data.data);
      })
    },
  },
}
