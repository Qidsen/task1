import axios from 'axios';

export default {
  namespaced: true,
  state: {
    status: "",
    pieceOfNews: [],
  },
  getters: {
    getStatus(state) {
      return state.status;
    },
    getNewsId(state) {
      return state.pieceOfNews.id;
    },
    getTitle(state) {
      return state.pieceOfNews.title;
    },
    getText(state) {
      return state.pieceOfNews.text;
    },
  },
  mutations: {
    setPieceOfNews(state, payload) {
      state.pieceOfNews.push(payload);
    },
  },
  actions: {
    getNews ({ commit }) {
      return axios.get('/news').then(({ data }) => {
        for(let i = 0; i < data.data.length; i++) {
          commit('setPieceOfNews', {id: data.data[i].id, title: data.data[i].title, text: data.data[i].text});
        }
      })
    },
  },
}
