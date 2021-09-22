<template>
  <section id="cover">
    <div class="hero-content section d-flex fullscreen">
      <div class="container my-auto">
        <h1>UX/UI Design</h1>

        <h2 class="text-16 fw-600 mb-2 mb-md-3">
          <span class="typed"> Descubre, Define, Desarrolla y Entrega</span>
          <span class="typed-cursor">|</span>
        </h2>

        <p class="mt-5">
          ¡Hola, Soy Maria! Soy una diseñadora apasionada y motivada,
          especializada en experiencias de usuario e interfaces.
        </p>
      </div>
      <a href="#about" class="scroll-down-arrow smooth-scroll">
        <span class="animated">
          <fa-icon :icon="['fas', 'chevron-down']" />
        </span>
      </a>
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

  .scroll-down-arrow {
    position: absolute;
    z-index: 3;
    bottom: 20px;
    left: 50%;
    margin-left: -16px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 20px;
    text-align: center;
    color: #000;
    .fa-chevron-down {
      position: relative;
      animation: fadeInDown 1.5s infinite;
      -webkit-animation: fadeInDown 1.5s infinite;
      -moz-animation: fadeInDown 1.5s infinite;
      -o-animation: fadeInDown 1.5s infinite;
    }
  }
  @keyframes FadeInDown {
    0% {
      top: -25px;
      opacity: 0;
    }
    100% {
      top: 10px;
      opacity: 1;
    }
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
