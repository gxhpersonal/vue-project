<template>
  <div>
      这是父组件
      <childC :childData="Data"></childC>
  </div>
</template>

<script>
import childC from "./child.vue";
export default {
  components:{
    childC
  },
  data(){
    return{
      Data:{a:1,b:2}
    }
  }
}
</script>
