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
          <a :href="`${item.link}`" rel="noopener noreferrer" target="_blank"> 
            <img :src="require(`@/assets/img/svg/${item.label}.svg`)" :alt="`${item.label}`">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Loader from '@/components/Loader';

export default {
  name: 'Profile',
  data() {
    return {
      loading: true,
      dataInfo: true,
    }
  },
  methods: {
    ...mapActions('user', ['getProfile']),
  },
  computed: {
    ...mapState('user', ['unique', 'info']),
  },
  async created() {
    if(this.unique.id == null) {
      this.dataInfo = false;
      this.loading = false;
      return;
    }
    await this.getProfile(this.unique);
    this.loading = false;
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
