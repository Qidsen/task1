export default [
  {
    path: '/login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/news',
    component: () => import('@/views/News'),
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile'),
  },
]
