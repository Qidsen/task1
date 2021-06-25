export default {
  namespaced: true,
  state: {
    unique: {
      status: "",
      id: null,
    },
    info: {
      city: null,
      languages: null,
      social: null,
      image: null,
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
