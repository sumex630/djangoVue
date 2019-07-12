<template>
  <div class="test">
    <el-row :gutter="20">
      <el-col :xs="4" :sm="4" :md="6"></el-col>
      <el-col :xs="16" :sm="16" :md="12">
        <el-col :xs="24" :sm="24" :md="12" >
          <div class="grid-content bg-purple">
            <el-image style="width: 100%; height: 100%"  fit="fill" src="https://openai.grandhonor.net/public/img/image_reco.png"></el-image>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" >
          <div class="grid-content bg-purple-light">
            <el-image style="width: 100%; height: 100%"  fit="fill" src="https://openai.grandhonor.net/public/img/txt_rec.png"></el-image>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" >
          <div class="grid-content bg-purple">
            <el-image style="width: 100%; height: 100%"  fit="fill" src="https://openai.grandhonor.net/public/img/txt_rec.png"></el-image>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" >
          <div class="grid-content bg-purple-light">
            <el-image style="width: 100%; height: 100%"  fit="fill" src="https://openai.grandhonor.net/public/img/txt_rec.png"></el-image>
          </div>
        </el-col>
      </el-col>
      <el-col :xs="4" :sm="4" :md="6"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "test",
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
.el-col {
  border-radius: 4px;
  margin-bottom: 20px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>