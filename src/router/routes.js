export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/ServicePage"),
  },
  {
    path: "/service/:id",
    name: "service",
    component: () => import("@/views/ServiceQuestions"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("@/views/SuccessPage"),
  },
];
