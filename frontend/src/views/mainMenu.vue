<template>
  <div class="main-nav">
    <el-container>
      <el-header>
        <su-mainmenu :menuList="routers" :modeSetting="horizontal"></su-mainmenu>
      </el-header>
      <div>
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
import SuMainmenu from "@/components/navMenu/SuMainmenu.vue"
import { mapState } from "vuex"
import { routes } from "@/router/routers.js"

export default {
  name: "MainNav",
  components: {
    SuMainmenu
  },
  data() {
    return {
      mmList:[],
      horizontal: "horizontal",
      menuList: [
        {
          path: "/func1", //菜单项所对应的路由路径
          title: "功能11111111111", //菜单项名称
          children: [
            {
              path: "/func31",
              title: "功能3-11111111111111"
            },
            {
              path: "/func32",
              title: "功能3-2"
            },
            {
              path: "/func33",
              title: "功能3-3"
            }
          ]
        },
        {
          path: "/func2",
          title: "功能2"
        },
        {
          path: "/func3",
          title: "功能3",
          children: [
            {
              path: "/fu",
              title: "功能3-11111111111111"
            }
          ]
        }
      ]
    };
  },
  computed: {
    ...mapState({
      routers: state => state.menuList.routers[0].children
    })
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    init() {
      let mainmenuList = []
      let sidemenuList = []
      console.log('routes', routes);
      routes.forEach((e, i) => {
        if(e.meta.menuClass && e.meta.menuClass == "parent"){
          this.getMenu(e.children)
        }
      });
    },
    getMenu(menuList) {
      menuList.forEach((e, i) => {
        if(e.children) {
          if(e.meta.menuClass == 'side') {
            console.log('shi');
            console.log('menuList.indexOf(e)', menuList.indexOf(e));
            this.mmList.push(e)
            menuList.splice(menuList.indexOf(e), 1)
          }
          this.getMenu(e.children)
        }else {
          // if(e.meta.menuClass == 'side') {
          //   console.log('shi');
          //   console.log('menuList.indexOf(e)', menuList.indexOf(e));
          //   this.mmList.push(e)
          //   menuList.splice(menuList.indexOf(e), 1)
          // }
        }
      });
      console.log('menuList', menuList);
      console.log('this.mmList', this.mmList);
    }
  },
  created() {
    this.init();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 如果页面有keep-alive缓存功能，这个函数会触发
  activated() {}
};
</script>
<style lang='scss' scoped>
.el-header {
  padding: 0;
}
</style>