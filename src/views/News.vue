<template>
  <div class="webpage__news">
    <Loader v-if="loading"/>
    <div v-else class="webpage__news-info">
      <p v-for="(item, index) in pieceOfNews" :key="index">{{ item.title }}
        <br>
        <span>
          {{ item.text }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState, mapMutations } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: "News",
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    ...mapMutations('news', ['setPieceOfNews']),
  },
  
  async created() {
    if(this.pieceOfNews[0].id == null) {
      this.loading = true;
      const { data } = await axios.get('/news');
      setTimeout(() => {
        for(let i = 0; i < data.data.length; i++) {
          this.setPieceOfNews({id: data.data[i].id, title: data.data[i].title, text: data.data[i].text});
        }
        this.pieceOfNews.shift();
        this.loading = false;
      }, 1000);
    }
  },

  computed: {
    ...mapState('news', ['pieceOfNews']),
  },

  components: {
    Loader,
  },
}
</script>

<style lang="scss">
  .webpage__news {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;

    .webpage__news-info {
      width: 100%;
      display: flex;
      flex-direction: column;

      p {
        margin: 100px 50px -50px 50px;
        padding: 24px 24px;
        background: #1A759F;
        font-family: Rubik;
        font-size: 48px;
        font-weight: 700;
        line-height: 57px;
        color: white;

        span {
          font-size: 24px;
          font-weight: 500;
          line-height: 28px;
        }
      }
    }
  }
</style>
