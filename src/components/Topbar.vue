<template>
  <div class="d-flex justify-space-between task1__topbar">
    <v-app-bar
      flex
      color="#2A9D8F"
      max-height="96px"
    >
      <template v-slot:extension>
        <v-tabs>
          <router-link to="/profile">
            <v-tab>Profile</v-tab>
          </router-link>
          <router-link to="/news">
            <v-tab>News</v-tab>
          </router-link>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
