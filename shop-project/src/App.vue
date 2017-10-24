<template>

  <div id="app">
    <div id="menu">
      <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/admin">Admin</router-link></el-menu-item>
      <el-menu-item index="3"><router-link to="/cart">Cart</router-link></el-menu-item>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding:0;
  margin:0;
}
ul>li>a {
    text-decoration: none;
}
</style>
