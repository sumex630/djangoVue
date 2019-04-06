<template>
    <div class="home">
        <el-button @click="handleCount(count)">{{ count }}==>点击 +1</el-button>
        <div>计算后的值为：{{ res }}</div>
    </div>
</template>

<script>
  import {api} from "@/api";

  export default {
    name: 'home',
    data() {
      return {
        count: 0,
        res: 0
      }
    },
    methods: {
      handleCount(count) {
        api.getImg({count: count})
            .then(res => {
                console.log(res.data.count)
                console.log(this)
                this.res = res.data.count
                this.count = res.data.count
            })

      }
    }
  }
</script>
