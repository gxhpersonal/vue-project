<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>持续开发中。。。</h2>
    <router-link class="detail-btn" to="/detail">去详情页</router-link>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to my vue project"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  li {
    display: inline-block;
    margin: 0 10px;

    a {
      color: #42b983;
    }
  }
}
.hello {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .detail-btn {
    width: 200px;
    height: 50px;
    background: linear-gradient(90deg, #41b883, #35495e);
    border-radius: 15px;
    text-align: center;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
  }
}
</style>
