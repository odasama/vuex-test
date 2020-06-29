<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改</button>
    <button @click="aupdateInfo">异步修改</button>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="addition(5)">+5</button>
    <button @click="addition(10)">+10</button>
    <h2>{{$store.getters.more20Stu}}</h2>
    <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.more20StuAge(28)}}</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from "./components/HelloWorld";

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    data() {
      return {
        message:'消息'
      }
    },
    methods:{
      increment(){
        this.$store.commit('increment');
      },
      decrement(){
        this.$store.commit('decrement');
      },
      addition(count){
        this.$store.commit('addition',count)
      },
      updateInfo(){
        this.$store.commit('updateInfo')
      },
      aupdateInfo(){
        //this.$store.commit('aupdateInfo')
        this.$store.dispatch('aupdateInfo','携带的payload').then(message=>console.log(message))
      }
    }
  }
</script>

<style>
</style>
