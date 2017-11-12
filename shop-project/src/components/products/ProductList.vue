
<<template>
<el-row class="product">
  <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 3 : 3">
    <el-card class="product-item" :body-style="{ padding: '0px' }">
      <img src="/static/bonsai.jpg" class="image">
      <div class="details">
                <el-button type="success" icon="el-icon-edit"></el-button>
                <el-button type="danger" icon="el-icon-delete"></el-button>
                <el-button type="primary" icon="el-icon-share">Details Product</el-button>
       </div>
      <div style="padding: 14px;">
         <p class="name">Apple Mini Bonsai</p>
        <div class="bottom clearfix">
           <p class="name">Price:<span class="price">200$</span></p>
          <el-button type="text" class="button">Operating button</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
</template>

<style>
.product{
    margin: 50px;
}
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }
    .name{
    padding: 0px;
    font-size: 20px;
    margin: 0px 0px 5px 0px;
    }
    .price {
      color:gold;
    }
  .image {
    z-index: 3;
    position: relative;
    width: 100%;
    display: block;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    transition: all .3s cubic-bezier(.34,1.61,.7,1);
  }
 .product-item :hover .image{
     z-index: 0;
    -webkit-transform: translate3d(0,95px,0);
    transform: translate3d(0,95px,0);
  }
  .details{
    display: block;
    position: absolute;
    top: 0;
    margin: 30px 82px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
     name: 'product-list',
    data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>