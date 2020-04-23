<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import jsonp from 'jsonp'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      age :35,
      data : ''
    }
    

  },
  mounted(){
    let url ="/activity/servicetime";
     jsonp(url,(err,res)=>{
      let result = res;
      this.data = result; 
    })
  }
    // ,mounted(){
    //   axios.get(url).then(()=>{
        
    //   })
    // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
