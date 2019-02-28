import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/Layout'
Vue.use(Router)

const children = [
  {
    path: '/',
    name: 'menu',
    component: () => import('@/view/Domains/Menu'),
  }
]

const router = new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children
    },
    {
      path: '*',
      component: Layout,
      children: [
        {
          path: '*',
          name: 'not-found',
          component: () => import('@/components/NotFound')
        }
      ]
    }
  ],
  scrollBehavior: () => ({ y: 0 })
})

export default router
