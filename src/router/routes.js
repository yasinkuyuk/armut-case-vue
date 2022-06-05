export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/ServicePage"),
  },
  {
    path: "/service/:id",
    name: "service",
    component: () => import("@/pages/ServiceQuestions"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/pages/SuccessPage"),
  },
];
