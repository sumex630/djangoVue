<template>
  <div class="e-line-bar">
    <div id="line-bar" style="with: 100%; min-height: 350px"></div>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "ELineBar",
  components: {},
  props: {
    // "eId": {
    //   type: String,
    //   required: true
    // },
    "legendData": {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {};
  },
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    initData() {
      // 指定图表的配置项和数据
      const option = {
        // color: ["#1890F0", "#FBA737", "#2EEE59"],
        tooltip: {
          show: false
        },
        legend: {
          data: this.legendData,
          top: 1
        },
        xAxis: {
          data: [1, 2, 3, 4, 5, 6],
          type: "category",
          name: "xaxis",
          // nameLocation: 'middle', // 坐标轴名字的位置
          nameGap: 6,
          // 设置x轴坐标颜色
          axisLabel: {
            textStyle: {
              color: "#000000" //y 轴文本颜色
            }
          },
          // 设置x轴坐标颜色
          axisLine: {
            lineStyle: {
              color: "#A7A7A7"
            }
          },
          nameTextStyle: {
            color: "#000000"
          }
        },
        yAxis: {
          type: "value",
          // show: false,  // 是否显示 y轴
          name: "yaxis",
          // min: 0,
          // max:110,
          // interval: 5000,
          // nameLocation: 'top', // 坐标轴名字的位置
          nameGap: 16,
          axisLabel: {
            //设置 y 轴文本颜色
            textStyle: {
              color: "#000000" //y 轴文本颜色
            }
          },
          nameTextStyle: {
            color: "#000000"
          },
          axisLine: {
            show: false // 是否显示y轴的坐标线
          },
          axisTick: {
            show: false // 是否显示 y 轴的坐标线上的刻度
          },
          splitLine: {
            // 虚线
            show: true,
            lineStyle: {
              type: "dashed"
            }
          }
        },
        grid: {
          // 设置图表与外框(div)的间距
          x: 50,
          y: 60,
          x2: 60,
          y2: 30,
          borderWidth: 1
        },
        series: [
          {
            name: "series",
            type: "line",
            barWidth: 20,
            color: [],
            data: [1, 2, 3, 4, 5, 6],
            label: {
              normal: {
                color: "#000000",
                show: true,
                position: "top"
              }
            }
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      var _that = this;
      this.myChart.setOption(option);
      window.addEventListener("resize", function() {
        _that.myChart.resize();
      });
    }
  },
  created() {},
  mounted() {
    this.myChart = echarts.init(document.getElementById("line-bar"));
    this.initData();
  },
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