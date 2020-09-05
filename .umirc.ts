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
          exact: false,
          path: '/index',
          component: '@/pages/index',
          title: 'CV',
        },
      ],
    },
  ],
})
