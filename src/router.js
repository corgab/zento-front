import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import TagsPage from './pages/TagsPage.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  {
    path: '/tags/:tag',
    name: 'TagsPage',
    component: TagsPage,
    props: true,
  },

  // {path: '/:day', name:'Post', component: PostPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
