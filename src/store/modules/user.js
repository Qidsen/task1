export default {
  namespaced: true,
  state: {
    status: "",
    id: 0,
    city: "",
    languages: [],
    social: [],
  },
  getters: {
    getUserById(state) {
      return state.id;
    },
    getStatus(state) {
      return state.status;
    },
  },
}
