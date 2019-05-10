const About = () => import('.././views/About.vue')
const Home = () => import('.././views/Home.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

export {routes}