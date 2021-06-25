<template>
  <div class="webpage__profile">
    <div v-if="loading" class="webpage__profile-loading">
      <Loader/>
    </div>
    <span v-else-if="!dataInfo" class="webpage__profile-error">User not found!</span>
    <div v-else class="webpage__profile-info">
      <span>City: {{ info.city }}</span>
      <ul>
        <span>Languages knowledge:</span>
        <li v-for="(item, index) in info.languages" :key="'lang' + index"> {{ item }}</li>
      </ul>
      <ul>
        <span>Links:</span>
        <li v-for="(item, index) in info.social" :key="'social' + index">
          <a :href="`${item.link}`" rel="noopener noreferrer" target="_blank"> <img :src="require(`@/assets/img/svg/${info.image[index]}`)" :alt="`${info.image[index]}`">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
const axios = require('axios');
import { mapState, mapMutations } from 'vuex';
import Loader from '@/components/Loader';
import {LINK_ICONS} from '@/constants/LINKS';

export default {
  name: 'Profile',
  data() {
    return {
      loading: true,
      dataInfo: true,
      icons: LINK_ICONS,
    }
  },
  methods: {
    ...mapMutations('user', [
      'setInfo',
    ]),
  },

  async created() {
    if(this.unique.id == null) {
      this.loading = false;
      this.dataInfo = false;
      return;
    }
    const { data } = await axios.get(`/user-info/${this.unique.id}`);
    setTimeout(() => {
      this.setInfo({city: data.data.city, languages: data.data.languages, social: data.data.social, image: this.icons});
      this.loading = false;
    }, 1000);
    console.log(this.info);
  },

  computed: {
    ...mapState('user', ['unique', 'info']),
  },

  components: {
    Loader,
  },
}

</script>

<style lang="scss">
  .webpage__profile {
    width: 100%;
    height: 100%;
    display: flex;  

    .webpage__profile-loading {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    .webpage__profile-error {
      width: 100%;
      display: flex;
      justify-content: center;
      font-family: Rubik;
      font-size: 36px;
      font-weight: 700;
      line-height: 57px;
      color: white;
    }

    .webpage__profile-info {
      width: 100%;
      display: flex;
      background: #1A759F;
      margin: 50px 50px;
      padding: 24px 24px;
      border-radius: 8px;
      flex-direction: column;
      font-family: Rubik;
      font-size: 36px;
      font-weight: 700;
      line-height: 57px;
      color: white;

      ul {
        padding: 0;
        li, li::marker {
          width: 100%;
          margin-left: 26px;
          font-size: 28px;
          color: black;
        }
      }
      
      a {
        color: black;
        img {
          position: relative;
          width: 48px;
          height: 48px;
        }
      }
    }
  }
</style>
