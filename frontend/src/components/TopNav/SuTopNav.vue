<template>
  <div class="mainmenu-wrapper cpt-s" v-if="isVisionTop">
    <el-menu
      ref="menu"
      router
      class="el-menu-horizontal"
      :default-active="defaultActive"
      mode="horizontal"
      background-color="#fff"
      text-color="#000"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <div class="logo">
        <img src="@/assets/logo.png" alt style="width: 24px; height: 24px" />
      </div>
      <template v-for="item in menuList">
        <su-submenu
          v-if="item.children"
          :key="`menu_${item.name}`"
          :index="item.path"
          :parent="item"
        ></su-submenu>
        <el-menu-item v-else :key="`menu_${item.name}`" :index="item.path">{{ item.meta.title }}</el-menu-item>
      </template>
      <div class="info">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo-inner">
            <i class="el-icon-s-custom"></i> admin
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click="handleUserInfo">个人信息</el-dropdown-item>
            <el-dropdown-item divided @click="handleLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-menu>
  </div>
</template>

<script>
import SuSubmenu from "./SuSubmenu.vue";
import { deepCopy } from "@/lib/util";

export default {
  name: "SuNavMenu",
  props: {
    isVisionTop: {
      type: Boolean,
      default: true
    }
  },
  components: {
    SuSubmenu
  },
  data() {
    return {
      menuList: [],
      defaultActive: "/"
    };
  },
  computed: {
    route() {
      return this.$route;
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSelect(e) {},
    handleUserInfo() {},
    handleLogout() {},
    init() {
      let routerList = deepCopy(this.$router.options.routes);
      let menuList = [];
      routerList.forEach(element => {
        let isTopMenu = element.meta && element.meta.isTopMenu;
        if (isTopMenu) {
          delete element.children;
          menuList.push(element);
        }
      });
      this.menuList = menuList;
      if (this.$route.matched[0].path) {
        this.defaultActive = this.$route.matched[0].path;
      } else {
        this.defaultActive = "/";
      }
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
.el-menu-horizontal {
  position: fixed;
  width: 100%;
  padding: 0 30px;
  z-index: 100;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
  .logo {
    float: left;
    margin-right: 30%;
    margin-left: 1%;
    height: 60px;
    display: flex;
    align-items: center;
  }
  .info {
    float: right;
    margin-right: 1%;
    margin-left: 1%;
    height: 60px;
    display: flex;
    align-items: center;
  }
}
</style>