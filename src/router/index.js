import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '@/pages/MemoriesPage.vue';

const routes = [
  {
    path: "/",
    redirect: "/memories"
  },
  {
    path: "/memories",
    name: "memories-page",
    component: MemoriesPage
  },
  {
    path: "/memories/:id",
    name: "memory-page",
    component: () => import("@/pages/MemoryPage.vue")
  },
  {
    path: "/memories/add",
    name:"add-memory=page",
    component: ()=>import("@/pages/AddMemoryPage.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
