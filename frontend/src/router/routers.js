const Home = () => import('@/views/Home.vue')
const Index = () => import('@/views/Index.vue')
const MainNav = () => import('@/views/MainNav.vue')
const LeftNav = () => import('@/views/LeftNav.vue')

const routes = [
  {
    path: '/',
    redirect:"/Index",
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta:{
      title:"Home"
    }
  },
  {
    path: '',
    redirect:"/Index",
    name: 'MainNav',
    component: MainNav,
    meta:{
      title:"MainNav"
    },
    children: [
      {
        path: 'Index',
        name: 'Index',
        component: Index,
        meta:{
          title:"Index"
        },
      },
      {
        path: 'LeftNav',
        name: 'LeftNav',
        component: LeftNav,
        meta:{
          title:"LeftNav"
        },
        children: [
          {
            path: 'Index',
            name: 'Index',
            component: Index,
            meta:{
              title:"Index"
            },
          }
        ]
      },
    ]
  },
  {
    path: '/main',
    name: 'LeftNav',
    component: LeftNav
  }
]

export {routes}