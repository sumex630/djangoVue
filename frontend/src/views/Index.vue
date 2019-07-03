<template>
  <div class="index cpt-parent">
    <div class="">
      <el-row :gutter="20" type="flex">
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
       
      </el-row>
      <el-row :gutter="20" type="flex">
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
       
      </el-row>
      <el-row :gutter="20" type="flex">
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
        <el-col :span="8">
          <el-card><e-line-bar></e-line-bar></el-card>
        </el-col>
       
      </el-row>
      
      
    </div>
  </div>
</template>

<script>
import ELineBar from "@/components/echarts/ELineBar.vue";
import ERate from "@/components/echarts/ERate.vue";
export default {
  name: "index",
  components: {
    ELineBar,
    ERate
  },
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