const Test = () => import('@/views/Test.vue')

const Login = () => import('@/views/Login.vue')
const NotFound = () => import('@/views/NotFound.vue')

const Home = () => import('@/views/Home.vue')
const Index = () => import('@/views/Index.vue')

const TopNav = () => import('@/components/TopNav')
const LeftNav = () => import('@/components/LeftNav')
const MySettings = () => import('@/views/setting/MySetting.vue')
const Plan = () => import('@/views/setting/Plan.vue')
const Setting = () => import('@/views/setting/Setting.vue')

const EnterpriseList = () => import('@/views/enterprise/EnterpriseList.vue')
const Validate = () => import('@/views/enterprise/Validate.vue')

const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      icon: 'el-icon-menu',
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
      icon: 'el-icon-menu',
      title: "首页",
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
          title: "工作台",
          icon: 'el-icon-menu', // 图标样式class
        }
      },
    ]
  },
  {
    path: '/enterprise',
    name: 'enterprise',
    component: Home,
    redirect: '/enterprise/list',
    meta: {
      icon: 'el-icon-menu',
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
        icon: 'el-icon-menu',
        title: "企业信息"
      },
    }, {
      path: '/enterprise/validate',
      name: 'validate',
      components: {
        default: Validate,
        top: TopNav,
        aside: LeftNav
      },
      meta: {
        icon: 'el-icon-menu',
        title: "企业认证"
      },
    }, {
      path: '/enterprise/mySet',
      name: 'mySet',
      components: {
        default: MySettings,
        top: TopNav,
        aside: LeftNav
      },
      meta: {
        icon: 'el-icon-menu',
        icon: 'el-icon-menu',
        title: "我的设置"
      },
      children: [{
        path: 'plan',
        component: Plan,
        name: 'plan',
        meta: {
          icon: 'el-icon-menu',
          icon: 'el-icon-menu',
          title: "我的计划"
        }
      }, {
        path: 'setting',
        component: Setting,
        name: 'Setting',
        meta: {
          icon: 'el-icon-menu',
          icon: 'el-icon-menu',
          title: "设置"
        }
      }]
    }]
  }
]

export {
  routes
}