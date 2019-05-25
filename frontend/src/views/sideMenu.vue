<template>
  <div class="nav-menu">
    <el-container>
      <el-aside width="200px">
        <su-sidemenu :menuList="menuList"></su-sidemenu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SuSidemenu from "@/components/sideNavMenu/SuSidemenu.vue";

export default {
  name: "LeftNav",
  components: {
    SuSidemenu
  },
  data() {
    return {
      menuList: [
        {
          path: "func1", //菜单项所对应的路由路径
          title: "功能11111111111", //菜单项名称
          children: [
            {
              path: "func31",
              title: "功能3-11111111111111"
            },
            {
              path: "func32",
              title: "功能3-2"
            },
            {
              path: "func33",
              title: "功能3-3"
            }
          ]
        },
        {
          path: "func2",
          title: "功能2"
        },
        {
          path: "func3",
          title: "功能3",
          children: [
            {
              path: "fu",
              title: "功能3-11111111111111"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(newR, oldR) {
      console.log("newR", newR, oldR);
    }
  },
  //方法集合
  methods: {
    handleSelect(e) {
      console.log("handleSelect", e);
    }
  },
  created() {},
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
.el-menu {
  border-right: 0;
  text-align: left;
}
.el-menu-vertical {
  position: fixed;
  z-index: 3;
  height: 100%;
  width: 200px;
  overflow-y: auto;
}
</style>