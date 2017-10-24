<template>
  <div class="">
    <h1>{{ msg }}</h1>
     <el-button @click="visible = true">AD </el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your edit',

    }
  }
}
</script>
