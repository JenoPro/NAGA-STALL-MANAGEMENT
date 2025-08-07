import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../components/Login/LoginPage.vue'
import Dashboard from '../components/Dashboard/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },

    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
})

export default router
