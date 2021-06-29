import axios from 'axios';
import {LINK_ICONS} from '@/constants/LINKS';

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
      return state.unique.status;
    },
    getUserById(state) {
      return state.unique.id;
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
  actions: {
    getProfile({ commit }, unique) {
      return axios.get(`/user-info/${unique.id}`).then(({ data }) => {
        commit('setInfo', {city: data.data.city, languages: data.data.languages, social: data.data.social, image: LINK_ICONS});
      })
    },
  },
}
