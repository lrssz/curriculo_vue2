import { createRouter, createWebHistory } from "vue-router";
import Sobre from "../views/Sobre.vue";
import Gostos from "../views/Gostos.vue";
import Contatos from "../views/Contatos.vue";

const routes = [
  { path: '/', name: 'Sobre', component: Sobre },
  { path: '/gostos', name: 'Gostos', component: Gostos },
  { path: '/contatos', name: 'Contatos', component: Contatos },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
