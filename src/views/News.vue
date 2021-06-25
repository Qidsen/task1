<template>
  <div class="webpage__news">
    <p v-for="(item, index) in pieceOfNews" :key="index">{{ item.title }}
      <br>
      <span>
        {{ item.text }}
      </span>
    </p>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState, mapMutations } from 'vuex';

export default {
  name: "News",

  methods: {
    ...mapMutations('news', ['setPieceOfNews']),
  },
  
  async created() {
    if(this.pieceOfNews.length == 1) {
      const { data } = await axios.get('/news');
      for(let i = 0; i < data.data.length; i++) {
        this.setPieceOfNews({id: data.data[i].id, title: data.data[i].title, text: data.data[i].text});
      }
      this.pieceOfNews.shift();
    }
  },

  computed: {
    ...mapState('news', ['pieceOfNews']),
  }
}
</script>
