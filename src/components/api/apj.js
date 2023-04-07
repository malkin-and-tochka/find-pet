import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const AuthAPI = {
    login(email,) {
        return (
            instance.get('/login', email)
        )
    },
    logout() {
        return (
            instance.get('/logout')
        )
    },
    authMe() {
        return (
            instance.get('/auth')
        )
    }
}