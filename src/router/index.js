import { createRouter, createWebHashHistory } from 'vue-router'


import Home from '../views/MyHome.vue'
import MyFavoris from '../views/MyFavoris.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/favoris', component: MyFavoris},
  ]

  const router = createRouter({
    history:createWebHashHistory(),
    routes
  })

  export default router