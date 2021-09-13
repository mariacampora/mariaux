<template>
  <section id="testimonials" class="section">
    <div class="container px-lg-5">
      <div class="bg-white fadeInUp wow" data-wow-duration="0.5s">
        <b-row cols="1" cols-md="2" class="p-4" align-v="center">
          <b-col lg="6" class="text-center p-4">
            <h2>
              La innovación, el diseño estratégico <br />
              y el UX Design
            </h2>
            <p>
              Son procesos de mejora constante y, para que esto suceda, debemos
              estar en constante comunicación con los usuarios, empatizando,
              escuchando, observando, buscar sus opiniones, sugerencias,
              entendiendo cómo cambian y evolucionan con el tiempo e ir
              adaptando las soluciones que hemos creado.
            </p>
          </b-col>

          <b-col lg="6" class="client p-4">
            <p>
              Trabajar con María fue una gran experiencia. Ella está
              acostumbrada a trabajar de forma empoderada y con visión de
              crecimiento lo que le permite asumir los proyectos en cualquier
              momento, sin importar su magnitud y complejidad.
            </p>
            <div class="d-flex">
              <b-img
                src="../assets/client-6.jpg"
                class="mr-4 float-left"
                alt="Antonio Betancourt"
              ></b-img>
              Antonio Betancourt <br />
              Scrum Master - Walmart
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
#testimonials {
  background: #fff url("../../public/assets/fondomc.png") center center
    no-repeat;
  .client {
    background: #ededed;
    padding: 40px;
    img {
      border-radius: 50%;
      height: 90px;
    }
  }
}
</style>
<script>
export default {
  name: "Testimonials",
  data: () => {
    return {};
  },
};
</script>
