<template>
  <el-row>
    <el-col :span="6">
        <el-menu  default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <router-link to="/admin">
                 <el-menu-item index="1">
                  View Products
                  </el-menu-item>
                  </router-link>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <router-link to="/admin/new">New Product</router-link>
              </el-menu-item>
          </el-menu>
    </el-col>
    <el-col :span="18">
       <router-view></router-view>
    </el-col>
</el-row>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Admin',

    }
  },

}
</script>
<style scoped><style>
