<template>
  <v-app>
    <Topbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Topbar from '@/components/Topbar';

export default {
  name: 'App',
  components: {
    Topbar,
  }
}
</script>

<style lang="scss">
  @import "~@/assets/styles/global.scss";
</style>
