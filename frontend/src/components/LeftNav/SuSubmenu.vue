<template>
  <el-submenu :index="parent.path">
    <template slot="title">
      <i :class="parent.meta.icon"></i>
      <span slot="title">{{ parent.meta.title }}</span>
    </template>
    <template v-for="item in parent.children">
      <su-submenu
        v-if="item.children"
        :key="`menu_${item.name}`"
        :index="`${parent.path}/${item.path}`"
        :parent="item"
      ></su-submenu>
      <el-menu-item v-else :key="`menu_${item.name}`" :index="`${parent.path}/${item.path}`">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
  name: "SuSubmenu",
  props: {
    parent: {
      type: Object,
      default: () => ({})
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
</style>