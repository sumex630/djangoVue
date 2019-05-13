<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cpt-parent {
  .out-wrap {
    padding: 20px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    padding: 20px;
    min-height: 390px;
  }
  .grid-title {
    background: #2c3e50;
    border-radius: 4px;
    min-height: 35px;
    color: #d3dce6;
    font-size: 16px;
    font-weight: 600;
    display:flex;
    justify-content:center;
    align-items:center
  }
}
</style>
