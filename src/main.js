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
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faChartArea } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlayCircle);
library.add(faFacebookF);
library.add(faLinkedinIn);
library.add(faInstagram);
library.add(faBehance);
library.add(faDownload);
library.add(faPhotoVideo);
library.add(faBars);
library.add(faTimes);
library.add(faChevronDown);
library.add(faHome);
library.add(faUserCircle);
library.add(faBriefcase);
library.add(faEnvelope);
library.add(faFileImage);
library.add(faChevronUp);
library.add(faPalette);
library.add(faDesktop);
library.add(faPencilRuler);
library.add(faPaintBrush);
library.add(faChartArea);
library.add(faBullhorn);

Vue.component("fa-icon", FontAwesomeIcon);

import { BootstrapVue, ImagePlugin, VBScrollspyPlugin } from "bootstrap-vue";

// Mis SCSS
import "./styles/style.scss";
import "animate.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(ImagePlugin);
Vue.use(VBScrollspyPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
