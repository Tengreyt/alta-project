import { defineStore } from "pinia";
import { AuthService } from "@/services/AuthService";

const ACCESS_KEY = "token";
const REFRESH_KEY = "refresh";


export const useAuthStore = defineStore("auth", {
  // state: () => ({
  //   token: localStorage.getItem(ACCESS_KEY) || null, // Загружаем токен из localStorage
  // }),
  state: () => ({
    accessToken: localStorage.getItem(ACCESS_KEY) || null,
    refreshToken: localStorage.getItem(REFRESH_KEY) || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token, // Проверка авторизации
  },

  actions: {
    async register(credentials) {
      try {
        const response = await AuthService.register(credentials);
        const { access, refresh } = response.data;
        this.accessToken = access; 
        this.refreshToken = refresh; 
        localStorage.setItem(ACCESS_KEY, access);
        localStorage.setItem(REFRESH_KEY, refresh);
        alert("Регистрация прошла успешно!");
      } catch (error) {
        const errors = error.response?.data || { detail: "Неизвестная ошибка" };
        console.log(`Ошибка: ${JSON.stringify(errors)}`);
      }
    },
    async login(credentials) {
      try {
        const response = await AuthService.login(credentials);
        this.token = response.data.access // Симуляция токена
        this.refreshToken  = response.data.refresh;
        localStorage.setItem(ACCESS_KEY, this.access);
        localStorage.setItem(REFRESH_KEY, this.refresh);
        console.log("Вход успешный!");
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
  