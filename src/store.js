import { reactive } from 'vue'
import axios from 'axios'

export const store = reactive({
  appUrl: 'http://127.0.0.1:8000/',
  user: null,

  register(user) {
    return axios
      .post(`${this.appUrl}api/register`, user)
      .then((response) => {
        this.user = response.data.user
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`
        return response
      })
      .catch((error) => {
        console.error('Errore nella registrazione:', error.response.data)
        throw error
      })
  },

  login(user) {
    return axios
      .post(`${this.appUrl}api/login`, user)
      .then((response) => {
        this.user = response.data.user
        axios.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${response.data.token}`
        return response
      })
      .catch((error) => {
        console.error('Errore nel login:', error.response.data)
        throw error
      })
  },

  logout() {
    return axios
      .post(`${this.appUrl}api/logout`)
      .then((response) => {
        this.user = null
        delete axios.defaults.headers.common['Authorization']
        return response
      })
      .catch((error) => {
        console.error('Errore nel logout:', error.response.data)
        throw error
      })
  },
})
