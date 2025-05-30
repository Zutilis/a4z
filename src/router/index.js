import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LineupView from '@/views/LineupView.vue'
import StandsView from '@/views/StandsView.vue'
import PartnersView from '@/views/PartnersView.vue'
import FoodView from '@/views/FoodView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/line-up', name: 'line-up', component: LineupView },
  { path: '/stands', name: 'stands', component: StandsView },
  { path: '/food', name: 'food', component: FoodView },
  { path: '/partners', name: 'partenaires', component: PartnersView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router