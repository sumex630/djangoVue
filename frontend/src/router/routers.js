const Home = () => import('@/views/Home.vue')
const Index = () => import('@/views/Index.vue')

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  }
]

export {routes}