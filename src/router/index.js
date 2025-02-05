import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage/MainPage.vue";
import { useAuthStore } from "@/stores/authStore";
import ProtectedPage from "@/pages/ProtectedPage.vue";
import LoginForm from "@/components/Login/LoginForm.vue";
import RegisterForm from "@/components/Login/RegisterForm.vue";
import AppLibrary from "@/pages/AppLibrary.vue";
import AppGeneration from "@/pages/AppGeneration.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainPage,  // Не добавляйте здесь AppHeader и AppFooter
    },
    {
      path: "/protected",
      name: "Protected",
      component: ProtectedPage, // Не добавляйте здесь AppHeader и AppFooter
    },
  
    {
      path: "/login",
      name: "Login",
      component: LoginForm,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterForm,
    },
    {
      path: "/library",
      name: "Library",
      component: AppLibrary,
    },
    {
      path: "/generate",
      name: "Generate",
      component: AppGeneration,
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
