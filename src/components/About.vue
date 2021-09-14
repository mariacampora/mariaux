<template>
  <section id="about" class="section bg-light">
    <div class="container px-lg-5">
      <!--Heading-->
      <div class="position-relative d-flex text-center mb-5">
        <h2
          class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0"
        >
          Sobre mí
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
          Conóceme
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
      <div class="row gy-5">
        <div class="col-lg-7 col-xl-8 text-lg-start">
          <h2 class="text-7 fw-500 mb-3">
            Soy <span class="text-primary">Maria Campora,</span> Diseñador UX
          </h2>
          <p>
            Me gusta investigar, observador, analizar, comprender el contexto y
            circunstancias del problema, definir hallazgos de valor que
            concluyan en el diseño de experiencias significativas.
          </p>
          <p>
            Estudie publicidad y mercadeo, diseño gráfico y actualmente diseño
            de experiencias. He participado en diversos proyectos de diseño y
            desarrollo de productos, me distingo por mi colaboración en trabajo
            en equipo, adaptabilidad y flexibilidad a los cambios. Mi trabajo
            ayuda a mejorar la vida de las personas creando productos eficientes
            y productivos.
          </p>
        </div>
        <div class="col-lg-5 col-xl-4">
          <div class="ps-lg-4">
            <ul class="list-style-2 list-style-light p-2">
              <li><span class="me-2">Nombres:</span> Maria Campora</li>
              <li>
                <span class="me-2">Correo:</span
                ><a class="text-primary" href="mailto:camporamaria@gmail.com">
                  camporamaria@gmail.com</a
                >
              </li>
              <li class="border-0">
                <span class="me-2">De:</span> Santiago, Chile
              </li>
            </ul>
            <b-button
              href="../../assets/ux_maria_campora.pdf"
              class="px-4 py-2 ml-2"
              variant="primary"
              pill
              target="_blank"
              rel=""
            >
              Descargar CV
              <fa-icon :icon="['fas', 'file-download']" class="ml-2" />
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#about {
  .list-style-2.list-style-light > li {
    border-bottom: 1px solid rgba(250, 250, 250, 0.12);
  }
  .list-style-2 > li {
    list-style-type: none;
    border-bottom: 1px solid #eaeaea;
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>

<script>
export default {
  name: "About",
  data: () => {
    return {};
  },
};
</script>
