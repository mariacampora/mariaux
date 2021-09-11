<template>
  <section id="sobremi">
    <div class="fondo">
      <div class="texto">
        <h2>Sobre mí</h2>
      <p>
        Me gusta investigar, observador, analizar, comprender el contexto y
        circunstancias del problema, definir hallazgos de valor que concluyan en
        el diseño de experiencias significativas.
      </p>
      <p>
        Estudie publicidad y mercadeo, diseño gráfico y actualmente diseño de
        experiencias. He participado en diversos proyectos de diseño y
        desarrollo de productos, me distingo por mi colaboración en trabajo en
        equipo, adaptabilidad y flexibilidad a los cambios.
      </p>
      <p>
        Me encanta poder ayudar a mejorar la vida de las personas creando
        productos que sean eficientes y productivos.
      </p>
      <b-button
        href="../../public/assets/ux_maria_campora.pdf"
        class="my-4 px-4 py-2"
        variant="outline-light"
        pill
        target="_blank"
        rel=""
      >
        <fa-icon :icon="['fas', 'file-download']" 
        class="mr-2"/>
        Descargar CV
      </b-button>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#sobremi {
  padding: 0;
  background-image: url("../../public/assets/foto1.jpg");
  background-repeat: no-repeat;
  background-position: right;
  background-color: #000000;
  height: 100vh;
  .fondo{
    background: rgba($color: #000000, $alpha: 0.8);
    height: 100%;
    width: 100%;
  }
  .texto{
    padding: 90px 40px 60px 280px;
    color: white;
    max-width: 900px;
  }
}
</style>

<script>
export default {
  name: "SobreMi",
  data: () => {
    return {};
  },
};
</script>
