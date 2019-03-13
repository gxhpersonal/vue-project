<template>
    <div>
        <h2>这是子组件</h2>
        <h3>父组件传过来的值为：{{childData}}</h3>
    </div>
</template>

<script>
export default {
    props:{
        childData:{}
    }
}
</script>

