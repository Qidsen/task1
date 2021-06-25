<template>
  <div class="d-flex justify-space-between task1__topbar">
    <v-app-bar
      flex
      color="#2A9D8F"
      max-height="96px"
    >
      <template class="topbar__template" v-slot:extension>
        <v-tabs>
          <router-link v-if="unique.id" to="/profile">
            <v-tab>Profile</v-tab>
          </router-link>
          <router-link to="/news">
            <v-tab>News</v-tab>
          </router-link>
        </v-tabs>
        <router-link to="/login">
          <v-btn block>
            {{ unique.id ? "Log Out" : "Log In" }}
          </v-btn>
        </router-link>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Topbar",
  computed: {
    ...mapState('user', ['unique']),
  }
}
</script>

<style lang="scss">
  .task1__topbar {
    .topbar__template {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
