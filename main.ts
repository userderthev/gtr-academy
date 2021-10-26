import { App as vueApp, createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import { auth } from "./firebase";

import "jquery";
import "@popperjs/core";
import "popper.js";
import "bootstrap";
import "perfect-scrollbar";
import "nouislider";
import "chartjs";
import "moment";
import "bootstrap-switch";
// import "./assets/styles/custom-bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/@fortawesome/fontawesome-free/css/solid.css";
import "../node_modules/@fortawesome/fontawesome-free/css/regular.css";
import "../node_modules/@fortawesome/fontawesome-free/css/brands.css";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "@/assets/css/nucleo-icons.css";
import "@/assets/scss/blk-design-system-pro.scss";

import "@/assets/js/plugins/bootstrap-switch.js";
import "@/assets/js/blk-design-system-pro.js";

let app: vueApp<Element>;
auth.onAuthStateChanged((user) => {
  if (!app) {
    app = createApp(App);
    app
      .use(store)
      .use(router)
      .mount("#app");
  }
  if (user) {
    store.dispatch("auth/doGetUserProfile", user);
  }
});
