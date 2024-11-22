import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/project/:id/',
    name: 'project',
    component: () => import('@/views/ProjectView.vue'),
  },
  {
    path: '/partners/',
    name: 'partners',
    component: () => import('@/views/PartnerView.vue'),
  },
  {
    path: '/legal/',
    name: 'legal',
    component: () => import('@/views/LegalView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;