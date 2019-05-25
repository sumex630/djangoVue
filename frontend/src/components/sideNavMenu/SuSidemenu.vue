<template>
  <div class="mainmenu-wrapper">
    <slot></slot>
    <el-menu
      ref="menu"
      router
      class="el-menu-horizontal"
      :default-active='$route.fullPath'
      v-show="!collapsed"
      :mode="modeSetting"
      background-color="#fff"
      text-color="#000"
      active-text-color="#409EFF"
      @on-select="handleSelect"
    >
      <template v-for="item in menuList">
        <su-submenu
          v-if="item.children"
          :key="`menu_${item.title}`"
          :index="item.path"
          :parent="item"
        ></su-submenu>
        <el-menu-item v-else :key="`menu_${item.title}`" :index="item.path">
          <!-- <Icon :type="item.icon"/> -->
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import SuSubmenu from "./SuSubmenu.vue";

export default {
  name: "SuNavMenu",
  props: {
    menuList: {
      type: Array,
      default: () => []
    },
    modeSetting: {
      type: String,
      default: ''
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
    return {};
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    handleSelect() {}
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
.el-menu-horizontal {
  position: fixed;
  width: 200px;
  height: 100%;
  overflow-y: auto;
  text-align: left;
  z-index: 100;
  box-shadow:0px 1px 4px 0px rgba(0,21,41,0.12);
}
</style>