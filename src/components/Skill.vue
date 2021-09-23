<template>
  <section id="skill" class="section">
    <div class="container px-lg-5">
      <!-- Heading -->
      <div class="position-relative d-flex text-center mb-5">
        <h2
          class="text-24 text-muted opacity-1 text-uppercase fw-600 w-100 mb-0"
        >
          Software
        </h2>
        <p
          class="text-9 position-absolute w-100 align-self-center lh-base mb-0"
        >
          Habilidades
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

      <!-- My Skills -->
      <div class="row gx-5 mt-5">
        <div class="col-md-6">
          <p class="fw-500 text-start mb-2">
            Web Design <span class="float-end">85%</span>
          </p>
          <div class="progress progress-sm mb-4">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 85%; background-color: #40B726;"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p class="fw-500 text-start mb-2">
            HTML/CSS <span class="float-end">95%</span>
          </p>
          <div class="progress progress-sm mb-4">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 95%"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div class="col-md-6">
          <p class="fw-500 text-start mb-2">
            JavaScript <span class="float-end">65%</span>
          </p>
          <div class="progress progress-sm mb-4">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 65%; background-color: #FC4375;"
              aria-valuenow="65"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <p class="fw-500 text-start mb-2">
            Bootstrap <span class="float-end">99%</span>
          </p>
          <div class="progress progress-sm mb-4">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 99%; background-color: #1287A8;"
              aria-valuenow="99"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>

      <h2 class="text-6 mt-5 mb-4">Herramientas</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'palette']" />
            </div>
            <h6>UI/UX Design</h6>
            <p class="text-muted mb-0">
              Adobe XD, Figma, Sketch.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'desktop']" />
            </div>
            <h6>Web Design</h6>
            <p class="text-muted mb-0">
              Visual Studio Code, Sublime text.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'pencil-ruler']" />
            </div>
            <h6>Graphic Design</h6>
            <p class="text-muted mb-0">
              Ilustrator, Photoshop, Indesign, Premier.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'paint-brush']" />
            </div>
            <h6>App Design &amp; Develop</h6>
            <p class="text-muted mb-0">
              HTML, CSS y Java Script
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'chart-area']" />
            </div>
            <h6>Framework</h6>
            <p class="text-muted mb-0">
              Vue js.
            </p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="featured-box style-3 mb-5">
            <div class="featured-box-icon rounded">
              <fa-icon :icon="['fas', 'bullhorn']" />
            </div>
            <h6>Otros</h6>
            <p class="text-muted mb-0">
              Git, Bootstrap.
            </p>
          </div>
        </div>
      </div>

            <div class="text-center mt-5">
        <b-button
          href="../../assets/ux_maria_campora.pdf"
          class="px-4 py-2 ml-2"
          variant="outline-info"
          pill
          target="_blank"
          rel=""
        >
          <fa-icon :icon="['fas', 'download']" class="mr-2" />
          Descargar CV
        </b-button>
      </div>

    </div>
  </section>
</template>
<style lang="scss">
#skill {
  .progress-sm {
    height: 0.5rem !important;
  }
  .featured-box{
    box-sizing: border-box;
    position: relative;
    &.style-3{
      padding-left: 70px;
      padding-top: 0;
    .featured-box-icon {
      width: 55px;
      height: 55px;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      top: 0;
      left: 0;
      margin-bottom: 0;
      text-align: center !important;
      font-size: 22px;
      background: #E9ECEF;
      position: absolute;
      justify-content: center !important;
      color: #1289aa;
      }
    }
  }
}
</style>
<script>
export default {
  name: "Skill",
  data: () => {
    return {};
  },
};
</script>
