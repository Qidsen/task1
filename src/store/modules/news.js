export default {
  namespaced: true,
  state: {
    status: "",
    pieceOfNews:
    [
      {
        id: null,
        title: null,
        text: null,
      },
    ],
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
}
