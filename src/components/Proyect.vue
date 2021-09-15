<template>
  <section id="proyect" class="section bg-light">
    <div class="container px-lg-5">
      <!--Heading-->
      <div class="position-relative d-flex text-center mb-5">
        <h2
          class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0"
        >
          Proyectos
        </h2>
        <p
          class="
            text-9
            fw-500
            position-absolute
            w-100
            align-self-center
            lh-base
            mb-0
          "
        >
          Mi experiencia
          <span
            class="
              heading-separator-line
              border-bottom border-3 border-primary
              d-block
              mx-auto
            "
          ></span>
        </p>
      </div>
      <!--Heading end-->

      <b-card
        sub-title="UX / UI / DISEÑO WEB"
        img-src="../../assets/proyect/OAweb.jpg"
        img-alt="Web Openagora"
        img-end
        img-width="50%"
        class="mb-3"
      >
        <b-card-text class="mt-3">
          Optimización del sitio web corporativo Rediseño de la página de
          soporte según los resultados de la investigación.
        </b-card-text>
        <a
          href="https://www.behance.net/gallery/125285955/Website-Openagora"
          class="card-link"
          target="_blank"
          >Ver caso de éxito</a
        >
      </b-card>

      <b-card
        sub-title="UX / DISEÑO WEB / BRANDING"
        img-src="../../assets/proyect/manual.jpg"
        img-alt="Manual Openagora"
        img-end
        img-width="50%"
        class="mb-3"
      >
        <b-card-text class="mt-3">
          Diseño de marca, resultante de la investigación de usuario expuesta en
          el proyecto anterior de Openagora.
        </b-card-text>
        <a
          href="https://www.behance.net/gallery/125266059/Manual-de-marca-Openagora"
          class="card-link"
          target="_blank"
          >Ver caso de éxito</a
        >
      </b-card>

      <b-card
        sub-title="UX / UI / DISEÑO WEB"
        img-src="../../assets/proyect/gobweb.jpg"
        img-alt="Web Gobernación"
        img-end
        img-width="50%"
        class="mb-3"
      >
        <b-card-text class="mt-3">
          Diseño y desarrollo de la nueva página web oficial de la Gobernación
          del estado Bolívar.</b-card-text
        >
        <a
          href="https://www.behance.net/gallery/102971763/Website-Gobernacion"
          class="card-link"
          target="_blank"
          >Ver caso de éxito</a
        >
      </b-card>

      <div class="text-center">
        <b-button
          href="https://www.behance.net/campora"
          class="my-4 px-4 py-2"
          variant="info"
          pill
          target="_blank"
          rel=""
        >
          <fa-icon :icon="['fas', 'photo-video']" class="mr-2" />
          Ver más proyectos
        </b-button>
      </div>
    </div>
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
