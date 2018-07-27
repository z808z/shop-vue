import Vue from 'vue'
import Router from 'vue-router'
import CartPage from '@/pages/CartPage'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ProductPage from '@/pages/ProductPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})
