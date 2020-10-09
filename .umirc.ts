import { defineConfig } from 'umi'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  links: [{ rel: 'icon', href: '/favicon.ico' }],
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      exact: false,
      component: '@/layouts/index',
      routes: [
        {
          path: '/index',
          component: '@/pages/home',
          title: 'index',
        },
        {
          exact: false,
          path: '/cv',
          component: '@/pages/home/cv',
          title: 'CV',
        },
        {
          exact: false,
          path: '/note',
          component: '@/pages/note',
          title: '别人的文章',
        },
      ],
    },
  ],
})
