<template>
  <div id="header" 
  class="sticky-top">
      <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      fixed="top"
      class="primary-menu navbar-expand-lg border-bottom-0"
    >
    <div class="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">

      <!-- Logo --> 
      <a href="index.html" class="mb-lg-auto mt-lg-4">
			<span class="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
        <b-img
              v-bind="mainProps"
              src="../assets/marca-maria.gif"
              rounded="circle"
              alt="marca personal"
              class="img-fluid rounded-pill d-block"
            ></b-img>
			</span>
			<h1 class="text-5 text-white text-center mb-0 d-lg-block">Maria Campora</h1>
        </a> 
        <!-- Logo End -->
        
        <ul class="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
          <li class="social-icons-linkedin">
            <a
              data-bs-toggle="tooltip"
              title="in/mariagrafico"
              href="https://www.linkedin.com/in/mariagrafico/"
              target="_blank"
              data-bs-original-title="Linkedin"
              aria-label="Linkedin"
            >
              <fa-icon :icon="['fab', 'linkedin-in']" />
            </a>
          </li>
          <li class="social-icons-instagram">
            <a
              data-bs-toggle="tooltip"
              title="instagram/mariagrafico"
              data-bs-placement="top"
              href="https://www.instagram.com/mariagrafico/"
              target="_blank"
              data-bs-original-title="Instagram"
              aria-label="Instagram"
            >
              <fa-icon :icon="['fab', 'instagram']" />
            </a>
          </li>
          <li class="social-icons-behance">
            <a
              data-bs-toggle="tooltip"
              title="behance/campora"
              data-bs-placement="top"
              href="https://www.behance.net/campora"
              target="_blank"
              data-bs-original-title="Behance"
              aria-label="Behance"
            >
              <fa-icon :icon="['fab', 'behance']" />
            </a>
          </li>
          <li class="social-icons-facebook">
            <a
              data-bs-toggle="tooltip"
              title="facebook/mariagrafico"
              href="https://www.facebook.com/soymariagrafico/"
              target="_blank"
              data-bs-original-title="Facebook"
              aria-label="Facebook"
            >
              <fa-icon :icon="['fab', 'facebook-f']" />
            </a>
          </li>
        </ul>


      <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <fa-icon v-if="expanded" :icon="['fas', 'times']" />
        <fa-icon v-else :icon="['fas', 'bars']" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#home" smooth-scroll>Inicio</b-nav-item>
          <b-nav-item href="#about" smooth-scroll>Sobre mi</b-nav-item>
          <b-nav-item href="#proyect" smooth-scroll>Proyectos</b-nav-item>
          <b-nav-item href="#contact" smooth-scroll>Contáctame</b-nav-item>
          <b-nav-item href="#detail" smooth-scroll active>Detalles</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    
    </div>
      </b-navbar>
  </div>
</template>
<style lang="scss">
#menu {
  .primary-menu{
    position: fixed;
    left: 0;
    top: 0;
    width: 260px;
    height: 100% !important;
    background: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    z-index: 2;
    overflow: hidden;
    overflow-y: auto;
  }
 .social-icons {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }
  .social-icons.social-icons-sm li {
    margin: 2px 4px;
  }
  .social-icons li {
    padding: 0;
    overflow: visible;
  }
  .text-5{
    font-size: 1.3125rem !important;
  }
  .ms-auto {
    margin-left: auto!important;
  }
  .navbar-toggler {
    padding: 10px;
    border: none;
  }
  @media (max-width: 991.98px){
  .navbar-expand-lg ul.navbar-nav li {
      display: block;
      border-bottom: 1px solid rgba(250, 250, 250, 0.15);
      margin: 0;
      padding: 0;
  }
  }
}
</style>
<script>
export default {
  name: "Header",
  data: () => {
    return { };
  },
};
</script>
