<template>
  <el-row class="tac">
    <el-col :span="6">
        <el-menu  default-active="2"  class="el-menu-vertical-demo">
                <router-link to="/admin">  <el-menu-item index="1"> <i class="el-icon-view"></i>View Products</el-menu-item> </router-link>
                <router-link to="/admin/new"><el-menu-item index="2"><i class="el-icon-news"></i>New Product </el-menu-item></router-link>
                <router-link to="/admin/edit/:id"><el-menu-item index="3"><i class="el-icon-edit"></i>Edit Product</el-menu-item></router-link>
          
          </el-menu>
    </el-col>
    <el-col :span="18">
       <router-view></router-view>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to Your Admin"
    };
  }
};
</script>
<style scoped>
router-link-active {
  text-decoration: none;
  color: #000;
}

</style>

