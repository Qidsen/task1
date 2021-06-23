import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from '@/router'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

axios.defaults.baseURL = "https://mysterious-reef-29460.herokuapp.com/api/v1"
axios.defaults.headers.common = {
  'Content-Type': 'application/json',
}

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify: new Vuetify({}),
  render: h => h(App),
}).$mount('#app')
