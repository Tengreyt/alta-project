import { useAuthStore } from '@/stores/authStore'
import axios from 'axios'

export const apiInstanse = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

apiInstanse.interceptors.request.use(config => {
    const authStore = useAuthStore();
    if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
    }

    return config 
})
