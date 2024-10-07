import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import TagsPage from './pages/TagsPage.vue'
import Post from './pages/Post.vue'
import RegisterPage from './pages/RegisterPage.vue'
import LoginPage from './pages/LoginPage.vue'
import { beforeMain } from '@popperjs/core'

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
  { path: '/register', name: 'RegiserPage', component: RegisterPage },
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

  // {path: '/:day', name:'Post', component: PostPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
