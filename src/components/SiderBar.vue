<template>
  <div id="siderbar" class="sticky-top">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
      fixed="top"
      class="primary-menu navbar-expand-lg border-bottom-0"
    >
      <div
        class="
          container-fluid
          position-relative
          h-100
          flex-lg-column
          ps-3
          px-lg-3
          pt-lg-5
          pb-lg-2
        "
      >
        <!-- avatar -->
        <div class="sidebar-header mt-lg-5">
          <a href="index.html" class="mb-lg-auto mt-lg-5">
            <span
              class="
                bg-dark-2
                rounded-pill
                p-1
                mb-lg-1
                d-none d-lg-inline-block
              "
            >
              <b-img
                src="../assets/avatar.jpg"
                rounded="circle"
                alt="marca personal"
                width="150"
                class="img-fluid rounded-pill d-block"
              ></b-img>
            </span>
          </a>
          <h1 class="text-5 text-white text-center mb-0 d-lg-block">
            Maria Campora
          </h1>
          <small class="text-complementario fw-500">UX/UI Designer</small>
        </div>
        <!-- avatar fin-->

        <ul class="social-icons mt-lg-auto ms-auto ms-lg-0 d-flex">
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

        <b-collapse id="navbar-toggle-collapse" class="w-100 my-lg-auto" is-nav>
          <b-navbar-nav class="flex-column text-lg-center w-100" v-b-scrollspy>
            <b-nav-item href="#cover">Inicio</b-nav-item>
            <b-nav-item href="#about">Sobre mi</b-nav-item>
            <b-nav-item href="#what_do">¿Qué hago?</b-nav-item>
            <b-nav-item href="#portfolio">Portafolio</b-nav-item>
            <b-nav-item href="#form_contact">Contáctame</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<style lang="scss">
#siderbar {
  .nav-link.active {
    color:  #FD521D;
    cursor: pointer;
  }
  .text-complementario {
    color: #1289aa;
  }
  .sidebar-header {
    padding-bottom: 60px;
    padding-bottom: 24px;
    text-align: center;
  }
  .primary-menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 260px;
    height: 100% !important;
    background: #fff;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    -webkit-box-shadow: 0 0 15px black;
    box-shadow: 0 0 15px black;
    z-index: 2;
    overflow: hidden;
    overflow-y: auto;
    .social-icons {
      margin: 0;
      padding: 0;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      list-style: none;
      li {
        padding: 0;
        overflow: visible;
        width: 26px;
        &:first-child {
          margin-left: 0px;
        }
        a {
          color: rgba(255, 255, 255, 0.5);
          :hover {
            &.fa-linkedin-in {
              color: #007bb5;
            }
            &.fa-instagram {
              color: #bc2a8d;
            }
            &.fa-behance {
              color: #1769ff;
            }
            &.fa-facebook-f {
              color: #3b5998;
            }
          }
        }
      }
    }
  }
  @media (max-width: 991.98px) {
    .primary-menu {
      position: initial;
      width: 100%;
      height: auto !important;
      overflow: visible;
    }
  }
  @media (min-width: 992px) {
    .social-icons {
      position: absolute;
      bottom: 5px;
    }
  }

  .navbar-toggler {
    padding: 10px;
    border: none;
  }
}
</style>
<script>
export default {
  name: "SiderBar",
  data: () => {
    return {};
  },
  methods: {
    // Convenience method to scroll a heading into view.
    // Not required for scrollspy to work
    scrollIntoView(event) {
      event.preventDefault();
      const href = event.target.getAttribute("href");
      const el = href ? document.querySelector(href) : null;
      if (el) {
        this.$refs.content.scrollTop = el.offsetTop;
      }
    },
  },
};
</script>
