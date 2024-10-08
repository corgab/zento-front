import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import TagsPage from './pages/TagsPage.vue'
import Post from './pages/Post.vue'
import RegisterPage from './pages/user/RegisterPage.vue'
import LoginPage from './pages/user/LoginPage.vue'
import Dashboard from './pages/user/DashboardPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {
    path: '/posts/:post',
    name: 'SinglePost',
    component: Post,
    props: true,
  },
  {
    path: '/tags/:tag',
    name: 'TagsPage',
    component: TagsPage,
    props: true,
  },
  {
    path: '/register',
    name: 'RegiserPage',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken')
      if (token) {
        next('/dashboard')
      } else {
        next()
      }
    },
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('authToken')
      if (token) {
        next('/dashboard')
      } else {
        next()
      }
    },
  },
  {
    path: '/dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {},

  // {path: '/:day', name:'Post', component: PostPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
