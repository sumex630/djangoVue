<template>
  <div class="main-nav">
    <el-container>
      <el-header>
        <su-mainmenu :menuList="menuList"></su-mainmenu>
      </el-header>
      <div>
        <router-view></router-view>
      </div>
    </el-container>
  </div>
</template>

<script>
import SuMainmenu from "@/components/navMenu/SuMainmenu.vue";

export default {
  name: "MainNav",
  components: {
    SuMainmenu
  },
  data() {
    return {
      menuList: [
        {
          path: "/func1", //菜单项所对应的路由路径
          title: "功能11111111111", //菜单项名称
          children: [
            {
              path: "/func31",
              title: "功能3-11111111111111",
            },
            {
              path: "/func32",
              title: "功能3-2",
            },
            {
              path: "/func33",
              title: "功能3-3",
            }
          ]
        },
        {
          path: "/func2",
          title: "功能2",
        },
        {
          path: "/func3",
          title: "功能3",
          children: [
            {
              path: "/fu",
              title: "功能3-11111111111111",
            },
          ]
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
.el-header {
  padding: 0;
}
</style>