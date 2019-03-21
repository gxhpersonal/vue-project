<template>
  <div>
    <div>{{data}}</div>
    <img :src="image" alt="">
    <p>邮箱号：{{email}}</p>
    <p :style="color">sdfsdfdsfdsf</p>
    <p>{{now}}</p>
    <p>{{shenfenzheng}}</p>
  </div>
</template>

<script>
const Mock = require("mockjs");
const Random = Mock.Random
export default {
  data() {
    return {
      data: Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        "list|1-10": [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            "id|+1": 1
          }
        ]
      }),
      email:Random.email(),
      image:Random.dataImage(),
      color:'color:'+Random.color(),
      now:Random.guid(),
      shenfenzheng:Random.id()
    };
  },
  mounted() {
    console.log(this.email);
  }
};
</script>

<style lang="scss" scoped>
</style>
