<template>
  <div id="home">
    <Header />
    <div id="main-wrapper">
      <Inicio />
      <SobreMi />
      <QueHago />
      <Proyect />
      <Testimonials />
      <Formulario />
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
import Header from "../components/Header.vue";
import Inicio from "../components/Inicio.vue";
import SobreMi from "../components/SobreMi.vue";
import QueHago from "../components/QueHago.vue";
import Proyect from "../components/Proyect.vue";
import Formulario from "../components/Formulario.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Header,
    Inicio,
    SobreMi,
    QueHago,
    Proyect,
    Formulario,
    Testimonials,
  },
  data: () => {},
};
</script>
