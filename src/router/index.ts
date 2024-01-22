import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import UserPage from '../pages/UsersPage.vue'
import Profile from '@/pages/ProfilePage.vue'
import ProductsPage from '@/pages/ProductsPage.vue'
import type { RouteType } from '@/types/route'
import HomePage from '@/pages/HomePage.vue'
import UsersPage from '@/pages/UsersPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth',
      name: 'authorization',
      component: AuthView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          component: HomePage
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'users',
          component: UsersPage
        },
        {
          path: 'products',
          component: ProductsPage
        },
        {
          path: 'orders',
          component: OrdersPage
        },
        {
          path: 'posts',
          component: UserPage
        }
      ]
    }
  ]
})

export default router

export const RouterList: RouteType[] = [
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'Profile',
    path: '/profile'
  },
  {
    title: 'Users',
    path: '/users'
  },
  {
    title: 'Products',
    path: '/products'
  },
  {
    title: 'Orders',
    path: '/orders'
  }
]
