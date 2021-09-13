<template>
  <section id="quehago" class="section">
    <div class="container px-lg-5">
      <div class="text-center">
        <h2>¿Qué hago?</h2>
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
#quehago {
  background: #ededed;
  .img-process {
    width: 70%;
  }
}
</style>
<script>
export default {
  name: "QueHago",
  data() {},
};
</script>
