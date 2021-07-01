import user from "@/store/modules/user"

export default [
  {
    path: '*',
    redirect: '/news',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/News'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile'),
    beforeEnter: (to, from, next) => {
      if(!user.state.unique.id) {
        next('/news');
      }
      next();
    },
  },
]
