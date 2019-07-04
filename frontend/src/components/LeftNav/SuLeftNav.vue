<template>
  <el-aside :width="asideW" :class="{showSidebar:!isCollapse}" v-if="isVisionLeft">
    <el-menu
      ref="menu"
      router
      class="el-menu-horizontal"
      :default-active="$route.fullPath"
      :unique-opened="true"
      :collapse="isCollapse"
      background-color="#fff"
      text-color="#000"
      active-text-color="#409EFF"
      @on-select="handleSelect"
    >
      <!--展开折叠开关-->
      <div class="menu-toggle" @click.prevent="handleCollapse">
        <i class="el-icon-s-fold" v-show="!isCollapse" title="收起"></i>
        <i class="el-icon-s-unfold" v-show="isCollapse" title="展开"></i>
      </div>
      <template v-for="item in leftMenuList">
        <su-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :index="item.path"
          :parent="item"
        ></su-submenu>
        <el-menu-item v-else :key="`menu_${item.name}`" :index="item.path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import SuSubmenu from "./SuSubmenu.vue";
import { deepCopy } from "@/lib/util";

export default {
  name: "SuNavMenu",
  props: {
    isVisionLeft: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SuSubmenu
  },
  data() {
    return {
      leftMenuList: [],
      isCollapse: false
    };
  },
  computed: {
    asideW() {
      return this.isCollapse ? '64px' : '200px'
    }
  },
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      this.init();
    }
  },
  //方法集合
  methods: {
    handleCollapse(){
      this.isCollapse = !this.isCollapse
    },
    init() {
      let defaultActive =
        this.$route.matched[0].path == "" ? "/" : this.$route.matched[0].path; //获取当前路由
      let routers = deepCopy(this.$router.options.routes);
      let menuList = [];
      routers.forEach(element => {
        let isTopMenu =
          element.meta &&
          element.meta.isTopMenu &&
          element.path == defaultActive;
        if (isTopMenu) {
          //  除导航之外的路由
          this.leftMenuList = element.children;
        }
      });
    },
    handleSelect() {}
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
.el-menu-horizontal:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu--collapse {
  width: 64px;
}
.el-menu-horizontal {
  position: fixed;
  height: 100%;
  overflow-y: auto;
  text-align: left;
  z-index: 100;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
}
.menu-toggle {
  background: #4A5064;
  text-align: center;
  color: white;
  height: 26px;
  font-size: 18px;
  line-height: 30px;
}
.menu-toggle:hover {
  cursor: pointer;
}
.showSidebar {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>