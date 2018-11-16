/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const applyControlRouter = {
  path: '/applyControl',
  component: Layout,
  redirect: '/applyControl/applyTable',
  name: 'applyControl',
  meta: {
    title: 'applyControl',
    icon: 'component'
  },
  children: [
    {
      path: 'applyTable',
      component: () => import('@/views/applyControl/applyTable'),
      name: 'applyTable',
      meta: { title: 'applyTable' }
    }
  ]
}
export default applyControlRouter
