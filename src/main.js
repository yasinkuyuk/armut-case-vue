import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
Vue.config.productionTip = false;
import VueRouter from "vue-router";
import "./index.css";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faChevronLeft, faXmark } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faChevronLeft, faXmark);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
