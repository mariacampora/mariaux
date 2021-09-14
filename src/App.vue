<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss"></style>
<script>
const WOW = require("wow.js/dist/wow.js");
let wow = new WOW();

export default {
  name: "App",
  mounted() {
    wow.init();
  },
};
</script>
