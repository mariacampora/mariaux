import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlayCircle);
library.add(faFacebookF);
library.add(faLinkedinIn);
library.add(faInstagram);
library.add(faBehance);
library.add(faFileDownload);
library.add(faPhotoVideo);
library.add(faBars);
library.add(faTimes);
library.add(faChevronUp);

Vue.component("fa-icon", FontAwesomeIcon);

import { BootstrapVue, ImagePlugin } from "bootstrap-vue";

// Mis SCSS
import "./styles/style.scss";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(ImagePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
