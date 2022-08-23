<template>
 <router-view />
</template>

<script>
import navBar from './views/NavBar.vue';

export default {
  name: 'App',
  components:{
    navBar
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
}
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
h1{
    font-family: 'Dancing Script', cursive;
}
.logo{
    width:100px;
}
.register input, .login input, .add input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid #A0522D;
}
.register button, .login button, .add button{
    width:320px;
    height: 40px;
    border: 1px solid #A0522D;
    color: #fff;
    cursor: pointer;
    background-color: #CD853F;
}
body{
  padding: 0;
  margin: 0;
}
</style>
