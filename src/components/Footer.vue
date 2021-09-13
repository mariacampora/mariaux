<template>
  <div id="footer">
    <div class="section bg-dark-1 text-muted">
      <div class="container px-lg-5 fadeInUp wow" data-wow-duration="0.5s">
        <b-row cols="1" cols-md="2" align-v="center">
          <b-col class="text-center text-lg-start">
            <p class="mb-3 mb-lg-0">
              Copyright © 2021
              <a href="/">Campora</a>
              - Todos los derechos reservados. <br />
            </p>
          </b-col>
          <b-col class="text-right">
            <ul class="nav justify-content-center justify-content-lg-end">
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms-policy"
                  href="#"
                  >Terms &amp; Policy |</a
                >
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#disclaimer"
                  href="#"
                  >Disclaimer</a
                >
              </li>
            </ul>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#footer {
}
</style>
<script>
export default {
  name: "Footer",
  data: () => {
    return {};
  },
};
</script>
