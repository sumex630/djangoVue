<template>
  <el-container>
    <el-header>
      <router-view name="top"></router-view>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <router-view name="aside"></router-view>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {}
};
</script>
