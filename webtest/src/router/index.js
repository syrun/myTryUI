import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/component',
    children: [
      {
        path: 'component',
        name: 'Layout',
        redirect: '/component/button',
        component: () => import('@/views/layout/index.vue'),
        children: [{
          path: 'button',
          name: 'Button',
          component: () => import('@/views/button/index.vue')
        }, {
          path: 'icon',
          name: 'Icon',
          component: () => import('@/views/icon/index.vue')
        }, {
          path: 'layout',
          name: 'Layout',
          component: () => import('@/views/container/index.vue')
        }, {
          path: 'checkbox',
          name: 'CheckBox',
          component: () => import('@/views/checkbox/index.vue')
        }, {
          path: 'message',
          name: 'Message',
          component: () => import('@/views/message/index.vue')
        }, {
          path: 'upload',
          name: 'Upload',
          component: () => import('@/views/upload/index.vue')
        }]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router