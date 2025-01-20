import { defineStore } from "pinia";
import { AuthService } from "@/services/AuthService";
import { jwtDecode } from "jwt-decode";

const ACCESS_KEY = "token";
const REFRESH_KEY = "refresh";

const token = localStorage.getItem(ACCESS_KEY);
const decodedToken = token && token !== 'undefined' ? jwtDecode(token) : {};


export const useAuthStore = defineStore("auth", {
  // state: () => ({
  //   token: localStorage.getItem(ACCESS_KEY) || null, // Загружаем токен из localStorage
  // }),
  state: () => ({
    accessToken: localStorage.getItem(ACCESS_KEY) || null,
    refreshToken: localStorage.getItem(REFRESH_KEY) || null,
    userName: decodedToken.username,
    userId: decodedToken.user_id,
  }),
  getters: {
    isAuthenticated: (state) => !!state.accessToken, // Проверка авторизации
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
        const decodedToken = jwtDecode(access);
        this.userName = decodedToken.username;
        this.userId = decodedToken.user_id;
        alert("Регистрация прошла успешно!");
      } catch (error) {
        const errors = error.response?.data || { detail: "Неизвестная ошибка" };
        console.log(`Ошибка: ${JSON.stringify(errors)}`);
      }
    },
    async login(credentials) {
      try {
        const response = await AuthService.login(credentials);
        console.log({response})
        const { access, refresh } = response.data;
        this.accessToken = access; // Симуляция токена
        this.refreshToken  = refresh;
        localStorage.setItem(ACCESS_KEY, this.accessToken);
        localStorage.setItem(REFRESH_KEY, this.refreshToken);
        const decodedToken = jwtDecode(access);
        this.userName = decodedToken.username;
        this.userId = decodedToken.user_id;
        console.log("Вход успешный!");
      } catch (error) {
        console.error("Ошибка авторизации:", error);
        alert("Ошибка входа. Проверьте данные.");
      }
    },

    logout() {
      this.accessToken = null;
      this.refreshToken = null;
      localStorage.removeItem(ACCESS_KEY); // Удаляем токен
      localStorage.removeItem(REFRESH_KEY); // Удаляем токен
      alert("Вы вышли из системы.");
    },
  },
});
  