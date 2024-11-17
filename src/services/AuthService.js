import { apiInstanse } from "./apiInstanse";


export class AuthService {
    static login(body) {
        return apiInstanse.post('users/login/', body);
    }

    static register(body) {
        return apiInstanse.post('users/register/', body);
    }
}