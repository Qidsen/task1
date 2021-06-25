<template>
  <div>
    <span> {{ info.city }} </span><br>
    <span v-for="(item, index) in info.languages" :key="'lang' + index"> {{ item }} </span><br>
    <p v-for="(item, index) in info.social" :key="'social' + index"> 
      {{ item.label }} 
      <a :href="`${item.link}`" target="_blank">
        {{ item.link }}
      </a>
    </p>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Profile',

  methods: {
    ...mapMutations('user', [
      'setInfo',
    ]),
  },

  async created() {
    const { data } = await axios.get(`/user-info/${this.unique.id}`);
    this.setInfo({city: data.data.city, languages: data.data.languages, social: data.data.social});
  },  

  computed: {
    ...mapState('user', ['unique', 'info']),
  },
}

</script>

<style lang="scss">

</style>
