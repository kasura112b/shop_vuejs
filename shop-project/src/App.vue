<template>

  <div id="app">
    <div id="menu">
      <el-menu class="el-menu-demo" mode="horizontal" active-text-color="#409eff"> 
      <router-link to="/"><el-menu-item index="1"><i class="el-icon-d-caret"></i> Home</el-menu-item></router-link>
      <router-link to="/admin"><el-menu-item index="2"><i class="el-icon-tickets"></i>Admin</el-menu-item></router-link>
      <router-link to="/cart"><el-menu-item index="3"><i class="el-icon-goods"></i>Cart</el-menu-item></router-link>
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
  a {
    text-decoration: none;
}
</style>
