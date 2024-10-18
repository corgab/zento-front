import { createWebHistory, createRouter } from 'vue-router'
import { store } from './store'
import HomePage from './pages/HomePage.vue'
import TagsPage from './pages/TagsPage.vue'
import Post from './pages/Post.vue'
import RegisterPage from './pages/user/RegisterPage.vue'
import LoginPage from './pages/user/LoginPage.vue'
import Dashboard from './pages/user/DashboardPage.vue'
import NotFound from './pages/404.vue'
import VerifyEmail from './pages/VerifyEmail.vue'

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
    name: 'RegisterPage',
    component: RegisterPage,
    beforeEnter: (to, from, next) => {
      if (store.user) {
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
      if (store.user) {
        next('/dashboard')
      } else {
        next()
      }
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/verify-email',
    component: VerifyEmail,
    props: true,
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Middleware per gestire la protezione delle rotte
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.user) {
      next({ name: 'LoginPage' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
