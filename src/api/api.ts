import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '080b6f04-633a-48af-ad35-2bac47390f36'
    }
})

export const usersAPI = {
    getUsers(currentPage: number, count: number) {
        return instance
            .get(`users?page=${currentPage}&count=${count}`,)
            .then(response => response.data)
    },
    authMe() {
        return instance
            .get(`auth/me`,)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance
            .post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance
            .delete(`follow/${id}`)
            .then(response => response.data)
    },
}

export const profileAPI = {
    getProfile(id: number) {
        return instance
            .get(`profile/${id}`,)
            .then(response => response.data)
    }
}