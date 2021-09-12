<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<style lang="scss">
@import url(https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;800&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);
body {
  font-size: 18px !important;
  font-family: "Urbanist", sans-serif;
  section {
    height: 100vh;
    padding: 90px 40px 60px 280px;
    @media (max-width: 991px) {
      padding-left: 40px;
    }
    h2 {
      font-size: 30px;
      margin-bottom: 40px;
    }
    h3 {
      font-size: 35px;
    }
    p {
      margin-bottom: 1.2em;
    }
  }
}
</style>
<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const WOW = require("wow.js/dist/wow.js");
let wow = new WOW();

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    wow.init();
  },
};
</script>
