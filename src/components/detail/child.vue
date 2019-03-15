<template>
  <div>
    <h2>这是子组件</h2>
    <h3>父组件传过来的值为：{{childData}}</h3>
    <h4>父组件改变的state数据为{{$store.state.Count}}</h4>
  </div>
</template>

<script>
export default {
  props: {
    childData: {}
  },
  data(){
      return{

      }
  },
  mounted(){
      let that = this;
      console.log(that.$store.state.Count)
  }
};
</script>

