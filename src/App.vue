<template>
  <div id="app font-raleway">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  async mounted() {
    await this.$store.dispatch("getServices");
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
