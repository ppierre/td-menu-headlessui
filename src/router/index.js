import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import MenuMinimalist from '../views/MenuMinimalist.vue'
import MenuMinimalistTransition from '../views/MenuMinimalistTransition.vue'
import MenuMinimalistAnimation from '../views/MenuMinimalistAnimation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/menu-minimalist', component: MenuMinimalist },
    { path: '/menu-minimalist-transition', component: MenuMinimalistTransition },
    { path: '/menu-minimalist-animation', component: MenuMinimalistAnimation },
  ]
})

export default router
