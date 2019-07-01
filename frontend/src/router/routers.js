const Home = () => import('@/views/Home.vue')
const Test = () => import('@/views/Test.vue')
const Index = () => import('@/views/Index.vue')
const mainMenu = () => import('@/views/mainMenu.vue')
const sideMenu = () => import('@/views/sideMenu.vue')

const routes = [{
  path: '/test',
  name: 'test',
  component: Test,
  meta: {
    title: '测试',
  },
  path: '/',
  name: 'mainMenu',
  redirect: '/index',
  component: mainMenu,
  meta: {
    title: '导航',
    menuClass: 'parent'
  },
  children: [{
      path: '/index',
      name: 'index',
      meta: {
        menuClass: 'main',
        title: '首页'
      },
      component: Index
    },
    // {
    //   path: '/sideMenu',
    //   name: 'sideMenu',
    //   component: sideMenu,
    //   meta: {
    //     menuClass: 'side',
    //     title: '侧导航'
    //   },
    // },
    {
      path: '/about',
      name: 'about',
      component: sideMenu,
      meta: {
        menuClass: 'main',
        title: '关于'
      },
      children: [{
          path: 'about111/33',
          name: 'about111',
          component: Home,
          meta: {
            menuClass: 'main',
            title: 'about1112'
          }
        },
        {
          path: 'about222',
          name: 'about222',
          component: Home,
          meta: {
            title: 'about222',
            menuClass: 'main',
          }
        },
        {
          path: 'aboutsss',
          name: 'aboutsss',
          component: Home,
          meta: {
            title: 'aboutsss',
            menuClass: 'side',
          },
          children: [{
            path: 'about222',
            name: 'about222',
            component: Home,
            meta: {
              title: 'about222',
              menuClass: 'side',
            }
          }, ]
        },
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: sideMenu,
      meta: {
        menuClass: 'main',
        title: '自由页',
      },
      children: [{
        path: 'aboutsss',
        name: 'aboutsss',
        component: Home,
        meta: {
          title: 'aboutsss',
          menuClass: 'side',
        },
        children: [{
          path: 'about222',
          name: 'about222',
          component: Home,
          meta: {
            title: 'about222',
            menuClass: 'side',
          }
        }, ]
      }, ]
    },
  ]
}, ]

export {
  routes
}