<template>
  <section id="what_do" class="section">
    <div class="container px-lg-5">
      <!--Heading-->
      <div class="position-relative d-flex text-center mb-5">
        <h2
          class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0"
        >
          Servicios
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
          ¿Qué hago?
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

      <div class="text-center">
        <p>
          UX es la experiencia que vive el usuario en el momento de interactuar
          con nuestro producto. Para lograr una buena experiencia debemos
          cumplir con objetivos específicos para una audiencia determinada.
        </p>
        <p>
          Mi misión es hacer que estas experiencias se sientan sin esfuerzo y
          perfectamente adaptadas a las necesidades nuestros usuarios.
        </p>
        <b-img
          class="img-process my-4"
          src="../assets/process.png"
          alt="Que hago"
        ></b-img>

        <p class="d-none">
          Entender Comprender los objetivos centrales y lo que el diseño
          pretende lograr. Investigar Determinar el contexto, las motivaciones y
          necesidades de los usuarios. Idear Es la mejor manera de comprender y
          evaluar la experiencia real del usuario. PrototiparBuscar la solución
          más adecuada. Iterar desde bocetos hasta crear prototipos funcionales.
        </p>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#what_do {
  .img-process {
    width: 70%;
  }
}
</style>
<script>
export default {
  name: "WhatDo",
  data: () => {
    return {};
  },
};
</script>
