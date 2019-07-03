<template>
  <div class="mainmenu-wrapper">
    <slot></slot>
    <el-menu
      ref="menu"
      router
      class="el-menu-horizontal"
      :default-active="defaultActive"
      v-show="!collapsed"
      :mode="modeSetting"
      background-color="#fff"
      text-color="#000"
      active-text-color="#409EFF"
      @select="handleSelect"
    >
      <div class="logo"></div>
      <template v-for="item in menuList">
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
import SuSubmenu from "./SuSubmenu.vue"
import {deepCopy} from '@/lib/util'

export default {
  name: "SuNavMenu",
  props: {
    // menuList: {
    //   type: Array,
    //   default: () => []
    // },
    modeSetting: {
      type: String,
      default: "horizontal"
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
      menuList: [],
      defaultActive:"/"
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
    handleSelect(e) {
      console.log("select", e);
    },
    init() {
      let routerList = deepCopy(this.$router.options.routes)
      let menuList = []
      routerList.forEach(element => {
        let isTopMenu = element.meta && element.meta.isTopMenu
        if(isTopMenu) {
          delete(element.children)
          menuList.push(element)
        }
      });
      this.menuList = menuList
      if(this.$route.matched[0].path) {
        this.defaultActive = this.$route.matched[0].path
      }else {
        this.defaultActive = "/"
      }
    }
  },
  created() {
    this.init()
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
}
</style>