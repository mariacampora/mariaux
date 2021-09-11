<template>
  <section id="proyect">
    <h2>Proyectos en los que he participado</h2>
    <b-card
      sub-title="UX / DISEÑO WEB / BRANDING"
      img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-end
      img-width="50%"
      class="mb-3"
    >
      <b-card-text class="mt-3">
        Optimización del sitio web corporativo Rediseño de la página de soporte
        según los resultados de la investigación.
      </b-card-text>
      <a href="#" class="card-link">Ver caso de éxito</a>
    </b-card>

    <b-card
      sub-title="UX / DISEÑO DE PRODUCTO"
      img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-end
      img-width="50%"
      class="mb-3"
    >
      <b-card-text class="mt-3">
        Software para firma digital Herramienta para realizar firmas
        electrónicas y digitales de documentos.
      </b-card-text>
      <a href="#" class="card-link">Ver caso de éxito</a>
    </b-card>

    <b-card
      sub-title="INVESTIGACIÓN / DISEÑO DE PRODUCTO"
      img-src="https://placekitten.com/1000/300"
      img-alt="Card image"
      img-end
      img-width="50%"
      class="mb-3"
    >
      <b-card-text class="mt-3">
        Un intento de mejorar la comunicación entre la comunidad educativa.
      </b-card-text>
      <a href="#" class="card-link">Ver caso de éxito</a>
    </b-card>

    <p class="text-center mb-3">
      <a href="https://www.behance.net/campora" target="_blank"
        >Ver otros proyectos
      </a>
    </p>
  </section>
</template>
<style lang="scss">
#proyect {
  height: 100% !important;
  .card-subtitle {
    margin: 5px 0 10px 0;
    font-size: 0.7em;
  }
}
</style>
<script>
export default {
  name: "Proyect",
  data: () => {
    return {};
  },
};
</script>
