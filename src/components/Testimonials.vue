<template>
  <section id="testimonials">
    <div class="section">
    <div class="container p-lg-5 bg-white">
      <div class="fadeInUp wow" data-wow-duration="0.5s">
        <!--Heading-->
        <div class="position-relative d-flex text-center mb-5">
          <h2
            class="
              text-24 text-muted
              opacity-1
              text-uppercase
              fw-600
              w-100
              mb-0
            "
          >
            Testimonios
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
            Algunas recomendaciones
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


        <carousel :items="2">
          <div class="p-4 bg-light rounded mr-2">
            <p>
              Trabajar con María fue una gran experiencia. Ella está
              acostumbrada a trabajar de forma empoderada y con visión de
              crecimiento lo que le permite asumir los proyectos en cualquier
              momento, sin importar su magnitud y complejidad.
            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Antonio Betancourt"
              :src="require('../../public/assets/client/1.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Antonio Betancourt</div>
              <small class="text-muted">Scrum Master - Walmart</small>
            </div>
            </div>
          </div>
           <div class="p-4 bg-light rounded mr-2">
            <p>
              Al laborar con recurso humano es importante ciertas características, como:
                responsabilidad, dedicación, puntualidad, ingenio, rapidez, adaptabilidad y proactividad.
                María demostró poseerlas e incluso superarlas, la recomiendo a ojos cerrados.
            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Telmo Chacón"
              :src="require('../../public/assets/client/2.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Telmo Chacón</div>
              <small class="text-muted">Magister Informática.</small>
            </div>
            </div>
          </div>
           <div class="p-4 bg-light rounded mr-2">
            <p>
              María hizo un excelente trabajo creativo. Realizó un estudio completo de los
                servicios que presto y se enfocó en eso para hacer este bonito entregable. 
            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Argenis J."
              :src="require('../../public/assets/client/3.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Argenis J.</div>
              <small class="text-muted">ESL teacher</small>
            </div>
            </div>
          </div>
           <div class="p-4 bg-light rounded mr-2">
            <p>
              El trabajo desarrollado por María ha sido óptimo, muy profesional y actualizado.
                Maneja muy bien los tiempos y logra conectar los requerimientos del cliente. 
            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Antonio Betancourt"
              :src="require('../../public/assets/client/4.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Cristian Jara</div>
              <small class="text-muted">Director - CJara</small>
            </div>
            </div>
          </div>
           <div class="p-4 bg-light rounded mr-2">
            <p>
              Hemos trabajado en varios de mis proyectos culturales personales, las portadas
                de mis libros, afiches y revistas para el Festival de jazz en el Orinoco en Venezuela. 
            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Ivo Farfán"
              :src="require('../../public/assets/client/5.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Ivo Farfán</div>
              <small class="text-muted">Dr. Músico y escritor.</small>
            </div>
            </div>
          </div>
          <div class="p-4 bg-light rounded mr-2">
            <p>
            María me entregó varias opciones en menos tiempo del que imaginaba y todas
                estaban bellísimas y reflejaban la esencia del proyecto. Lo difícil fue elegir una sola. 

            </p>

            <div class="d-flex">
              <b-img
              class="client-avatar mx-2"
              alt="Marlon"
              :src="require('../../public/assets/client/6.jpg')"
            ></b-img>

            <div class="data-client">
              <div>Marlon</div>
              <small class="text-muted">@personajesvenezolanos</small>
            </div>
            </div>
          </div>

        </carousel>
      </div>
    </div>
    </div>
  </section>
</template>
<style lang="scss">
#testimonials {
  background: #fff url("../../public/assets/fondomc.png") center center
    no-repeat;

  .client-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .owl-nav{
    display: none;
  }
  .owl-dots{
    margin-top: 20px;
  }
}
</style>
<script>
import carousel from "vue-owl-carousel2";

export default {
  name: "Testimonials",
  components: { carousel },
  data: () => {
    return {};
  },
};
</script>
