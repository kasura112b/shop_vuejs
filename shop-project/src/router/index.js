import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

// Admin Components
import Index from '@/pages/admin/Index'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'
import Edit from '@/pages/admin/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/admin',
      //Parent Component
      component: Index,
      //Children Component
      children:[
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Products',
          component: Products
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ]
})
