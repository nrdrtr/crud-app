import axios from 'axios';


export default class UserService {
    getUsers() {
        return axios.get("https://653278d0d80bd20280f59854.mockapi.io/api/v1/users")
    }
    getUserById(id) {
        return axios.get(`https://653278d0d80bd20280f59854.mockapi.io/api/v1/users/${id}`);
    }

    addUser(values) {
        return axios.post("https://653278d0d80bd20280f59854.mockapi.io/api/v1/users",values)
    }
    updateUser(id, values) {
        return axios.put(`https://653278d0d80bd20280f59854.mockapi.io/api/v1/users/${id}`, values);
      }
      
    deleteUser(id) {
        return axios.delete(`https://653278d0d80bd20280f59854.mockapi.io/api/v1/users/${id}`);
      }
      
}