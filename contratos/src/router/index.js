import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import InfofrmView from '../views/InfofrmView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listagem',
      name: 'listagem',
      component: ListView
    },
    {
      path: '/infofrm/',
      name: 'infofrm',
      component: InfofrmView,
      props: true
    }
  ]
})

export default router
