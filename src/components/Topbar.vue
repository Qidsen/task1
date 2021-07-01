<template>
  <div class="d-flex justify-space-between task1__topbar">
    <v-app-bar
      flex
      color="#2A9D8F"
      height="96px"
    >
      <template class="topbar__template">
        <div class="topbar__navigation">
          <router-link :class="{'webpage__topbar-active': $route.name === 'profile'}" v-if="unique.id" to="/profile">
            Profile
          </router-link>
          <router-link :class="{'webpage__topbar-active': $route.name === 'news'}" to="/news">
            News 
          </router-link>
        </div>
        <v-btn
          :class="{'webpage__topbar-login': $route.name === 'login'}"
          @click="!unique.id ? logIn() : logOut()">
            {{ !unique.id ? "Log In" : "Log Out" }}
        </v-btn>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: "Topbar",
  methods: {
    ...mapActions('auth', ['logIn', 'logOut']),
  },
  computed: {
    ...mapState('user', ['unique']),
  }
}
</script>

<style lang="scss">
  .v-application {
    a {
      color: white !important;
      font-family: Rubik;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      text-decoration: none;
      padding: 0 12px;
    }
  }
  .v-toolbar__content {
    display: flex;
    justify-content: space-between;

    .theme--light.v-btn {
      font-family: Rubik;
      font-size: 24px;
      font-weight: 400;
      line-height: 28px;
      color: #6A040F;
    }
    .v-btn {
      width: 100%;
      max-width: 225px;
      height: 64px !important;
      border: 2px solid #6A040F;
      background-color: transparent !important;
      text-transform: none;
    }
    .webpage__topbar-active {
      color: #E9C46A !important;
      text-decoration: underline;
    }
    .webpage__topbar-login {
      border-color: #E9C46A;
      color: #E9C46A !important;
    }
  }
</style>
