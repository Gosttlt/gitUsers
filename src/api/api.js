import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.github.com/search',
});

export const usersAPI = {
    async getUsers(pages) {
        let data = await instance.get(`/users?q=a&page=${pages}&per_page=9`)
        return data.data
    }
}
