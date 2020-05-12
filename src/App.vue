<template>
  <div id="app">
   <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage';
export default {
  name: 'App',
  components: {
  },
  data(){

  },
  mounted(){
    //storage.setItem('a',1);   //向mall中写入a 赋值1，与user平级
    //storage.setItem('user',{a:1}); //将user的属性覆盖掉
    //storage.setItem('abc',{a:1},'user');  //在user中添加属性，并赋值
    //storage.clear('a');   //删除a属性
    storage.clear('a','user');   //删除user下的a
  }
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
