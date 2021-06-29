<template>
  <div class="webpage__news">
    <Loader v-if="!pieceOfNews.length"/>
    <div v-else class="webpage__news-info">
      <p v-for="(item, index) in pieceOfNews" :key="index">{{ item.title }}
        <br>
        <span>
          {{ item.text }}
        </span>
      </p>
      <p class="webpage__news-amount">
        <span>
          Total news: {{ pieceOfNews.length }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: "News",
  methods: {
    ...mapActions('news', ['getNews']),
  },
  computed: {
    ...mapState('news', ['pieceOfNews']),
  },
  async created() {
    if(!this.pieceOfNews.length) {
      await this.getNews(this.pieceOfNews);
    }
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

      .webpage__news-amount {
        background: transparent;
        padding: 0;

        span {
          font-size: 48px;
          font-weight: 600;
          text-shadow:black 1px 1px 0, black 2px 2px 0, 
                      black 3px 3px 0, black 4px 4px 0, 
                      black 5px 5px 0;
        }
      }
    }
  }
</style>
