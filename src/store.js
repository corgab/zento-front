import { reactive } from 'vue'

export const store = reactive({
  // appUrl: 'http://31.56.7.95/',
  appUrl: 'http://127.0.0.1:8000/',
  isAuthenticated: !!localStorage.getItem('authToken'),
  user: null,

  setAuth(token, user) {
    this.isAuthenticated = true
    this.user = user
    localStorage.setItem('authToken', token)
  },

  logout() {
    this.isAuthenticated = false
    this.user = null
    localStorage.removeItem('authToken')
  },
})
