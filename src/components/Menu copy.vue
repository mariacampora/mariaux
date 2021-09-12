<template>
  <div id="menu">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      fixed="top"
      class="d-md-block d-lg-none"
    >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#home">Inicio</b-nav-item>
          <b-nav-item href="#about">Sobre mi</b-nav-item>
          <b-nav-item href="#proyect">Proyectos</b-nav-item>
          <b-nav-item href="#contact">Contáctame</b-nav-item>
          <b-nav-item href="#detail">Detalles</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div
      class="sidebar container-fluid h-100 flex-lg-column m-0 p-0"
      style="position: fixed"
    >
      <b-navbar
        class="navbar-w h-100 p-2 d-none d-lg-block my-lg-auto"
        type="dark"
        variant="dark"
      >
        <div class="sidebar-header">
          <a href="#home">
            <b-img
              v-bind="mainProps"
              src="../assets/marca-maria.gif"
              rounded="circle"
              alt="marca personal"
              class="d-flex m-auto"
            ></b-img>
          </a>
          <div class="text-center text-white my-5">
            <span class="sidebar-name">Maria Campora</span> <br />
            <small class="sidebar-status">UX Designer</small>
          </div>
        </div>
        <b-navbar-nav class="d-block text-center mt-5">
          <b-nav-item href="#home" data-scroll>Inicio</b-nav-item>
          <b-nav-item href="#about" data-scroll>Sobre mi</b-nav-item>
          <b-nav-item href="#proyect" data-scroll>Proyectos</b-nav-item>
          <b-nav-item href="#contact" data-scroll>Contáctame</b-nav-item>
          <b-nav-item href="#detail" data-scroll>Detalles</b-nav-item>
        </b-navbar-nav>

        <ul class="social-icons social-icons-muted social-icons-sm mt-lg-auto ms-auto ms-lg-0 d-flex">
          <li>
            <a
              class="social-icon-linkedin"
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
          <li>
            <a
              class="social-icon-instagram"
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
          <li>
            <a
              class="social-icon-behance"
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
          <li>
            <a
              class="social-icon-facebook"
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
      </b-navbar>
    </div>
  </div>
</template>
<style lang="scss">
#menu {
  .navbar-dark {
    background: #123;
  }
  .navbar-w {
    max-width: 230px;
  }
  .sidebar {
    max-width: 300px;
    z-index: 999;
    .sidebar-header {
      margin: 80px 0 0 0;
    }
    li.nav-link.active {
        color: #fa521e;
      }
  }
  .social-icon {
    list-style-type: none;
    position: absolute;
    bottom: 0;
    a {
      margin: 0 8px;
      color: rgba(255, 255, 255, 0.5);
      .svg-inline--fa {
        height: 2em;
      }
      &:hover {
        .fa-behance {
          color: #fff;
        }
        .fa-instagram {
          color: #c32aa3;
        }
        .fa-facebook-f {
          color: #3b5998;
        }
        .fa-linkedin-in {
          color: #007bb5;
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "Menu",
  data: () => {
    return {
      mainProps: {
        width: 120,
        height: 120,
        class: "m1",
      },
    };
  },
};
</script>
