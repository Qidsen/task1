import axios from 'axios';

export default {
  namespaced: true,
  state: {
    status: "",
    pieceOfNews: [],
  },
  mutations: {
    setPieceOfNews(state, payload) {
      Array(payload).map(function(id, title, text ) {
        { id, title, text }
      });
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
