import { createWebHistory, createRouter } from 'vue-router'

import HomePage from './pages/HomePage.vue'
import TagsPage from './pages/TagsPage.vue'
import Post from './pages/Post.vue'

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

  // {path: '/:day', name:'Post', component: PostPage}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
