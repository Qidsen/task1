import axios from 'axios';

export default {
  namespaced: true,
  state: {
    status: "",
    pieceOfNews: [],
  },
  mutations: {
    setPieceOfNews(state, payload) {
      state.pieceOfNews = payload;
    },
  },
  actions: {
    getNews ({ commit }) {
      return axios.get('/news').then(({ data }) => {
        commit('setPieceOfNews', data.data);
      })
    },
  },
}
