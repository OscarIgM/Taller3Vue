import { createRouter, createWebHistory } from "vue-router";
import ListadoNoticias from "../views/ListadoNoticias.vue";
import DetalleNoticia from "../views/DetalleNoticia.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: ListadoNoticias,
    },
    {
      path: "/DetalleNoticia/:newsId",
      name: "DetalleNoticia",
      component: () => import("../views/DetalleNoticia.vue"),
      props: true,
    },
    {
      path: "/Eventos",
      name: "Eventos",
      component: () => import("../views/Eventos.vue"),
      props: true,
    },
  ],
});

export default router;
