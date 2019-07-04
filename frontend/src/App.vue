<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
body,
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;

  // 特殊组件样式
  .el-header {
    padding: 0px;
  }

  // 公共样式
  .common-s {
    .wrap-c {
      padding: 20px;
    }
  }

  // 组件样式
  .cpt-s {
    .el-row {
      margin-bottom: 20px;
    }
    .el-col {
      border-radius: 4px;
    }
    .el-card {
      background: #f2f2f2;
    }
  }
}
</style>
