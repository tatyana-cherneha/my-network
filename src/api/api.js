import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "9a5014b7-2caf-4bf3-8ce3-061b9f078edf"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
       return instance.delete(`follow/${userId}`)
    },
    authUser() {
        return instance.get(`auth/me`)
    },
    getProfile(userId) {
       return  instance.get(`profile/` + userId)
    }
}


export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    }
}
