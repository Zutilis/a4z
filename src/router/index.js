import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LineupView from '@/views/LineupView.vue'
import StandsView from '@/views/StandsView.vue'
import PartnersView from '@/views/PartnersView.vue'
import FoodView from '@/views/FoodView.vue'
import InfosView from '@/views/InfosView.vue'
import TicketingView from '@/views/TicketingView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/line-up', name: 'line-up', component: LineupView },
  { path: '/stands', name: 'stands', component: StandsView },
  { path: '/partners', name: 'partenaires', component: PartnersView },
  { path: '/food', name: 'food', component: FoodView },
  { path: '/infos', name: 'infos', component: InfosView },
  { path: '/ticketing', name: 'billetterie', component: TicketingView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router