<template>
  <div class="mainmenu-wrapper">
    <slot></slot>
    <el-menu
      ref="menu"
      router
      class="el-menu-horizontal"
      :default-active="$route.fullPath"
      v-show="!collapsed"
      :mode="modeSetting"
      :unique-opened="true"
      background-color="#fff"
      text-color="#000"
      active-text-color="#409EFF"
      @on-select="handleSelect"
    >
      <template v-for="item in leftMenuList">
        <su-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :index="item.path"
          :parent="item"
        ></su-submenu>
        <el-menu-item v-else :key="`menu_${item.name}`" :index="item.path">
          <!-- <Icon :type="item.icon"/> -->
          {{ item.meta.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SuSubmenu from "./SuSubmenu.vue";
import { deepCopy } from "@/lib/util";

export default {
  name: "SuNavMenu",
  props: {
    // menuList: {
    //   type: Array,
    //   default: () => []
    // },
    modeSetting: {
      type: String,
      default: "vertical"
    },
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SuSubmenu
  },
  data() {
    return {
      leftMenuList: []
    };
  },
  computed: {},
  //监控data中的数据变化
  watch: {
    $route(to, from) {
      // console.log(to.path);
      this.init()
    }
  },
  //方法集合
  methods: {
    init() {
      let defaultActive =
        this.$route.matched[0].path == "" ? "/" : this.$route.matched[0].path; //获取当前路由
      let routers = deepCopy(this.$router.options.routes);
      // console.log('routers', routers);
      let menuList = [];
      routers.forEach(element => {
        let isTopMenu =
          element.meta &&
          element.meta.isTopMenu &&
          element.path == defaultActive;
        if (isTopMenu) {
          //  除导航之外的路由
          // delete(element.children)
          // menuList.push(element)
          console.log("defaultActive", defaultActive);
          console.log("element12", element.children);
          this.leftMenuList = element.children;
        }
      });
      // this.menuList = menuList
      // if(this.$route.matched[0].path) {
      //   this.defaultActive = this.$route.matched[0].path
      // }else {
      //   this.defaultActive = "/"
      // }
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
.el-menu-horizontal {
  position: fixed;
  width: 200px;
  height: 100%;
  overflow-y: auto;
  text-align: left;
  z-index: 100;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
}
</style>