<template>
  <div id="app">
    <Preholder />
    <router-view />
    <Footer />
  </div>
</template>
<style lang="scss">
$primary: #20c997;

@import url(https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;800&display=swap);
@import url(https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap);
body {
  font-size: 18px !important;
  font-family: "Urbanist", sans-serif;
}
#app {
  .section {
    position: relative;
    padding: 4.5rem 0;
    overflow: hidden;
  }
  .fullscreen {
    min-height: 100vh !important;
  }
  .hero-wrap {
    position: relative;
    overflow: hidden;
  }
  .bg-dark {
    background-color: #111418 !important;
  }
  .bg-dark-1 {
    background-color: #212529 !important;
  }
  .fw-600 {
    font-weight: 600 !important;
  }
  .text-5 {
    font-size: 1.3125rem !important;
  }
  .text-24 {
    font-size: calc(1.95rem + 5.4vw) !important;
  }
  .me-2 {
    margin-right: .5rem!important;
  }
  .opacity-1 {
    opacity: 0.1;
  }
  .heading-separator-line {
    width: 80px;
  }
  .border-primary {
    border-color: $primary!important;
  }
  .text-primary{
    color: $primary!important;
  }
}
</style>
<script>
import Footer from "./components/Footer.vue";

const WOW = require("wow.js/dist/wow.js");
let wow = new WOW();

export default {
  name: "App",
  components: {
    Footer,
  },
  mounted() {
    wow.init();
  },
};
</script>
