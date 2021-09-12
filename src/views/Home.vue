<template>
  <div class="home">
    <Portada />
    <QueHago />
    <SobreMi />
    <Proyect />
    <Testimonials />
    <Formulario />
  </div>
</template>

<script>
import Portada from "../components/Portada.vue";
import QueHago from "../components/QueHago.vue";
import SobreMi from "../components/SobreMi.vue";
import Proyect from "../components/Proyect.vue";
import Formulario from "../components/Formulario.vue";
import Testimonials from "../components/Testimonials.vue";

export default {
  name: "Home",
  components: {
    Portada,
    QueHago,
    SobreMi,
    Proyect,
    Formulario,
    Testimonials,
  },
  data: () => {},
};
</script>
