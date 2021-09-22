<template>
  <section id="portfolio" class="section bg-light">
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
          Mi portafolio
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

      <!--Filtro-->

      <b-nav align="center">
        <b-nav-item data-filter=".ui" active>Active</b-nav-item>
        <b-nav-item data-filter=".ui">Link</b-nav-item>
        <b-nav-item data-filter=".brand">Another Link</b-nav-item>
        <b-nav-item data-filter=".rrss" active>Active</b-nav-item>
        <b-nav-item data-filter=".editorial">Link</b-nav-item>
        <b-nav-item data-filter=".*">Another Link</b-nav-item>
      </b-nav>

      <ul
        class="
          portfolio-menu
          nav nav-tabs nav-light
          justify-content-center
          border-bottom-0
          mb-5
        "
      >
        <li class="nav-item">
          <a data-filter=".ux" href="" class="nav-link active">UX</a>
        </li>
        <li class="nav-item">
          <a data-filter=".ui" href="" class="nav-link">UI</a>
        </li>
        <li class="nav-item">
          <a data-filter=".brand" href="" class="nav-link">Brand</a>
        </li>
        <li class="nav-item">
          <a data-filter=".rrss" href="" class="nav-link">Social Media</a>
        </li>
        <li class="nav-item">
          <a data-filter=".editorial" href="" class="nav-link">Editorial</a>
        </li>
        <li class="nav-item">
          <a data-filter="*" class="nav-link" href="">Todo</a>
        </li>
      </ul>
      <!--Filtro end-->

      <!--portfolio-->
      <b-card-group columns> </b-card-group>

      <div class="portfolio popup-ajax-gallery">
        <div
          class="row portfolio-filter g-4"
          style="position: relative; height: 1094.62px"
        >
          <div
            class="col-sm-6 col-lg-4 brand"
            style="position: absolute; left: 0px; top: 0px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-1.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 design"
            style="position: absolute; left: 416px; top: 0px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-2.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 artwork photos"
            style="position: absolute; left: 832px; top: 0px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-3.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 artwork brand photos"
            style="position: absolute; left: 0px; top: 285.156px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-4.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 design"
            style="position: absolute; left: 832px; top: 285.156px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-5.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 brand"
            style="position: absolute; left: 832px; top: 570.312px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-6.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-sm-6 col-lg-4 design photos"
            style="position: absolute; left: 416px; top: 678.625px"
          >
            <div class="portfolio-box rounded">
              <div class="portfolio-img rounded">
                <img class="img-fluid d-block" src="" alt="" />
                <div class="portfolio-overlay">
                  <a
                    class="popup-ajax stretched-link"
                    href="ajax/portfolio-ajax-project-dark-7.html"
                  ></a>
                  <div class="portfolio-overlay-details">
                    <h5 class="text-white fw-400">Project Title</h5>
                    <span class="text-light">Category</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
#portfolio {
  height: 100% !important;
  .card-subtitle {
    margin: 5px 0 10px 0;
    font-size: 0.7em;
  }
}
</style>
<script>
export default {
  name: "Portfolio",
  data: () => {
    return {};
  },
};
</script>
