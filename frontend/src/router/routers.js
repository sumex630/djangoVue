const Test = () => import('@/views/Test.vue')

const Login = () => import('@/views/Login.vue')
const NotFound = () => import('@/views/NotFound.vue')

const Home = () => import('@/views/Home.vue')
const Index = () => import('@/views/Index.vue')

const TopNav = () => import('@/components/TopNav')
const LeftNav = () => import('@/components/LeftNav')
const MySettings = () => import('@/views/setting/MySetting.vue')
const Plan = () => import('@/views/setting/Plan.vue')

const EnterpriseList = () => import('@/views/enterprise/EnterpriseList.vue')

const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: "登录"
    }
  },
  {
    path: '*',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    redirect: '/index',
    component: Home,
    meta: {
      title: "工作台",
      isTopMenu: true,
    },
    children: [{
        path: '/index',
        name: 'index',
        components: {
          default: Index,
          top: TopNav,
          aside: LeftNav
        },
        meta: {
          title: "首页",
          leaf: true, // 只有一个节点
          iconCls: 'iconfont icon-home', // 图标样式class
        }
      },
      {
        path: '/mySet',
        name: 'mySet',
        components: {
          default: MySettings,
          top: TopNav,
          aside: LeftNav
        },
        meta: {
          iconCls: 'el-icon-menu',
          title: "我的设置"
        },
        children: [{
          path: 'plan',
          component: Plan,
          name: 'plan',
          meta: {
            title: "我的计划"
          }
        }, ]
      }
    ]
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: Home,
    redirect: '/enterprise/list',
    meta: {
      title: "企业管理",
      isTopMenu: true
    },
    children: [{
      path: '/enterprise/list',
      name: 'EnterpriseList',
      components: {
        default: EnterpriseList,
        top: TopNav,
        aside: LeftNav
      },
      meta: {
        leaf: true,
        iconCls: 'el-icon-setting',
        title: "企业信息"
      },
    }]
  }
]

export {
  routes
}