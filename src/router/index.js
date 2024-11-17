import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage/MainPage.vue";
import { useAuthStore } from "@/stores/authStore";
import ProtectedPage from "@/pages/ProtectedPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: MainPage, meta: { requiresAuth: false }   },
    {
      path: "/protected",
      name: "Protected",
      component: ProtectedPage ,
      meta: { requiresAuth: true }
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
})

export default router;
