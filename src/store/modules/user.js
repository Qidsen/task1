export default {
  namespaced: true,
  state: {
    unique: {
      status: "",
      id: 0,
    },
    info: {
      city: "",
      languages: [],
      social: [],
    },
  },
  getters: {
    getStatus(state) {
      return state.status;
    },
    getUserById(state) {
      return state.id;
    },
    getCity(state) {
      return state.info.city;
    },
    getLanguages(state) {
      return state.info.languages;
    },
    getSocial(state) {
      return state.info.social;
    },
  },
  mutations: {
    setUnique(state, payload) {
      state.unique = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    }
  },
}
