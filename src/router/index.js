import VueRouter from "vue-router";
import { routes } from "./routes";

const router = new VueRouter({
  routes,
  mode: "history",
});

// Protecting success page from external requests
// router.beforeEach((to, from, next) => {
//   if (to.name == "success" && from.name != "service") {
//     next("/");
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if (to.name == "service" && from.name != "index") {
    next("/");
  } else {
    next();
  }
});

export default router;
