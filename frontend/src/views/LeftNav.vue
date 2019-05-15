<template>
  <div class="nav-menu">
    <el-container>
      <el-aside width="200px">
        <!-- <su-navMenu :menuList="menuList"></su-navMenu> -->


        <!-- <el-menu
          router
          default-active="2"
          class="el-menu-vertical"
          popper-append-to-body
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航qweeeeee三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu> -->
      </el-aside>
      <el-container>
        <el-main>
          <!-- <router-view></router-view> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  components: {
  },
  data() {
    return {
      activeIndex2: "1",
     menuList: [
        {
          path: "/func1", //菜单项所对应的路由路径
          title: "功能1", //菜单项名称
          children: [
            {
              path: "/func31",
              title: "功能3-1",
              children: []
            },
            {
              path: "/func32",
              title: "功能3-2",
              children: []
            },
            {
              path: "/func33",
              title: "功能3-3",
              children: []
            }
          ]
        },
        {
          path: "/func2",
          title: "功能2",
          children: []
        },
        {
          path: "/func3",
          title: "功能3",
          children: []
        }
      ]
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
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
  text-align:left
}
.el-menu-vertical {
  position: fixed;
  z-index: 3;
  height: 100%;
  width: 200px;
  overflow-y: auto;
}
</style>