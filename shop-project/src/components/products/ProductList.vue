
<template >
<el-row class="product">
    <div>
      <product-item ></product-item>
    </div>
</el-row>
</template>

<style>
@import url('./product-list.css');
</style>

<script>
import ProductItem  from './ProductItem'

export default {
     name: 'product-list',
   components: {
      'product-item': ProductItem
    },
    data(){
      return {

      }
    },
    computed: {
      products () {
        return this.products
      }
    },
}
 const products = [
        {
          id: 1,
          manId: 1,
          name: 'BonSai Mini Cherry',
          price: 659,
          image: '/static/bonsai.jpg',
          description: ''
        },
        {
          id: 2,
          manId: 2,
          name: 'BonSai Mini Apple',
          price: 769,
          image: '/static/bonsai1.jpg',
          description: ''
        },
        {
          id: 3,
          manId: 3,
          name: 'BonSai Mini Lemon',
          price: 649,
          image: '/static/bonsai2.jpg',
          description: '',
        }
      ]
</script>
