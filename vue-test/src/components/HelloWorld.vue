<template>
  <div>
    <h2>{{$store.state.info}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.more20StuAge(28)}}</h2>
  </div>
</template>

<script>
  export default {
    name: "HelloWorld",
  }
</script>

<style scoped>

</style>