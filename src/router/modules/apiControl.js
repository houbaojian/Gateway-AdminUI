/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const apiControlRouter = {
  path: '/apiControl',
  component: Layout,
  redirect: '/apiControl/apiGroupTable',
  name: 'apiControl',
  meta: {
    title: 'apiControl',
    icon: 'tree'
  },
  children: [
    {
      path: 'apiGroupTable',
      component: () => import('@/views/apiControl/apiGroupTable'),
      name: 'apiGroupTable',
      meta: { title: 'apiGroupTable' }
    },
    {
      path: 'apiTable',
      component: () => import('@/views/apiControl/apiTable'),
      name: 'apiTable',
      meta: { title: 'apiTable' }
    }
  ]
}
export default apiControlRouter
