import { defineStore } from "pinia";
import { AuthService } from "@/services/AuthService";

const ACCESS_KEY = "token";
const REFRESH_KEY = "refresh";


export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem(ACCESS_KEY) || null, // Загружаем токен из localStorage
  }),

  getters: {
    isAuthenticated: (state) => !!state.token, // Проверка авторизации
  },

  actions: {

    async login(credentials) {
      try {
        const response = await AuthService.login(credentials);
        this.token = response.data.access // Симуляция токена
        localStorage.setItem(ACCESS_KEY, this.access);
        localStorage.setItem(REFRESH_KEY, this.refresh);
        alert("Вход успешный!");
      } catch (error) {
        console.error("Ошибка авторизации:", error);
        alert("Ошибка входа. Проверьте данные.");
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem(ACCESS_KEY); // Удаляем токен
      localStorage.removeItem(REFRESH_KEY); // Удаляем токен
      alert("Вы вышли из системы.");
    },
  },
});
  