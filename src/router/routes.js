export const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/pages/ServicePage/index.vue"),
  },
  {
    path: "/questions/:id",
    name: "ques",
    component: () => import("@/pages/ServiceQuestions/index.vue"),
  },
];
