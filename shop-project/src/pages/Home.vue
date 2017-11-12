<template v-for="item in products">
  <div >
  <product-list></product-list>
  </div>
</template>

<script>
  import ProductList from '../components/products/ProductList.vue'
  export default {
   components: {
      'product-list': ProductList
    }
};
</script>
