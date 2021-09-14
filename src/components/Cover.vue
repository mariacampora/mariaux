<template>
  <section id="cover">
    <div class="hero-content section d-flex fullscreen">
      <div class="container my-auto">
        <h1>UX/UI Design</h1>
        <h2>
          Descubre, Define, <br />
          Desarrolla y Entrega
        </h2>

        <p class="pb-5">
          ¡Hola, Soy Maria! Soy una diseñadora apasionada y motivada,
          especializada en experiencias de usuario e interfaces.
        </p>
        <a href="#" target="_blank" rel="" class="d-none">
          <small class="mr-2">¿No estas de humor para leer? </small>
          <fa-icon :icon="['fa', 'play-circle']" />
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#cover {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 60px;
    vertical-align: middle;
  }
  p {
    max-width: 900px;
    position: absolute;
    bottom: 40px;
  }
  a {
    text-decoration: none;
    color: green;
    position: absolute;
    bottom: 60px;
    right: 40px;
  }
}
</style>
<script>
export default {
  name: "Cover",
  data: () => {
    return {};
  },
};
</script>
