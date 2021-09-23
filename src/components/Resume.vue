<template>
  <section id="resume" class="section bg-light">
    <div class="container px-lg-5">
      <!-- Heading -->
      <div class="position-relative d-flex text-center mb-5">
        <h2
          class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0"
        >
          Curriculum
        </h2>
        <p
          class="text-9 position-absolute w-100 align-self-center lh-base mb-0"
        >
          Resumen
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
      <!-- Heading end-->

      <div class="row gx-5">
        <!-- My Education -->
        <div class="col-md-6">
          <h2 class="text-6 mb-4">Mi Educación</h2>
          <div class="bg-white rounded p-4 mb-4">
            <p class="text-muted small">2021 - hoy</p>
            <h3 class="text-5 text-info">Escuela Product Design</h3>
            <p class="mb-0">Platzi</p>
            <small class="text-muted m-0">En curso.</small>
          </div>
          <div class="bg-white rounded p-4 mb-4">
            <p class="text-muted small">2020 - 2021</p>
            <h3 class="text-5 text-info">Certificación UX Design</h3>
            <p class="mb-0">Platzi</p>
            <small class="text-muted m-0">21 cursos aprobados.</small>
          </div>
          <div class="bg-white rounded p-4 mb-4">
            <p class="text-muted small">1999 - 2002</p>
            <h3 class="text-5 text-info">Publicidad y mercadeo</h3>
            <p class="mb-0">IUTIRLA</p>
            <small class="text-muted m-0">Sede Monagas, Venezuela.</small>
          </div>
        </div>

        <!-- My Experience -->
        <div class="col-md-6">
          <h2 class="text-6 mb-4">Mi Experiencia</h2>
          <div class="bg-white rounded p-4 mb-4">
            <p class="text-muted small">2018 - hoy</p>
            <h3 class="text-5 text-info">UI / UX Designer</h3>
            <p class="mb-0">Openagora</p>
            <small class="text-muted m-0">
              Diseño de productos digitales y website. User Research, UX
              Writing, Integrar principios UX. Realizar sketch, wireframe,
              mockup, prototipos y pruebas de usabilidad. System Design. HTML,
              Css y Js.</small
            >
          </div>
          <div class="bg-white rounded p-4 mb-4">
            <p class="text-muted small">2018 - 2005</p>
            <h3 class="text-5 text-info">Jefe del Departamento del Desarrollo Web</h3>
            <p class="mb-0">GEB</p>
            <small class="text-muted m-0"
              >Diseño de productos digitales, website y la intranet. User
              Research, UX Writing e integrar principios UX en interfaces.
              Supervisar, planificar y liderar equipos de 6 personas. Diseño de
              interfaz, first mobile, responsive design. Diseño de material
              publicitario. Implementación de marcos de trabajo ágiles.</small
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
</style>
<script>
export default {
  name: "Resume",
  data: () => {
    return {};
  },
};
</script>
