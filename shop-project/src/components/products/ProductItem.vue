<<template>
  <el-col :span="8" :offset="3">
    <el-card class="product-item" :body-style="{ padding: '0px' }">
      <div class="details">
          <el-button type="success" icon="el-icon-edit"></el-button>
          <el-button type="danger" icon="el-icon-delete"></el-button>
          <el-button type="primary" icon="el-icon-view">Details Product</el-button>
      </div>
      <img src="/static/bonsai.jpg" class="image"/>
      <div style="padding: 14px;">
         <h4 class="name-product">BonSai Cherry</h4>
        <div class="bottom clearfix">
           <p class="name_price">Price:<span class="price">200$</span></p>
          <el-button type="text" icon="el-icon-goods" class="button add-cart">Add Cart </el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</template>
<<script>
export default {
}
</script>
