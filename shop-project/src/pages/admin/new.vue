<template>
  <product-form :isCreating="true"> </product-form>
</template>

<script>
  import ProductFrom from '../../components/products/ProductForm.vue'
  export default {
   components: {
      'product-form': ProductFrom
    }
};
   
</script>

