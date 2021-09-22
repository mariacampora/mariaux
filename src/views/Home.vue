<template>
  <div id="home">
    <SiderBar />
    <div id="main-wrapper">
      <Cover />
      <About />
      <WhatDo />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Call />
      <FormContact />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss">
#home {
  #main-wrapper {
    margin-left: 260px;
  }
  @media (max-width: 991.98px) {
    #main-wrapper {
      margin-left: auto;
    }
  }
}
</style>

<script>
import SiderBar from "../components/SiderBar.vue";
import Cover from "../components/Cover.vue";
import About from "../components/About.vue";
import WhatDo from "../components/WhatDo.vue";
import Resume from "../components/Resume.vue";
import Portfolio from "../components/Portfolio.vue";
import Testimonials from "../components/Testimonials.vue";
import Call from "../components/Call.vue";
import FormContact from "../components/FormContact.vue";
import Footer from "../components/Footer.vue";

const WOW = require("wow.js/dist/wow.js");
let wow = new WOW();

export default {
  name: "Home",
  components: {
    SiderBar,
    Cover,
    About,
    WhatDo,
    Resume,
    Portfolio,
    Testimonials,
    Call,
    FormContact,
    Footer,
  },
  data: () => {
    return {};
  },
  mounted() {
    wow.init();
  },
};
</script>
