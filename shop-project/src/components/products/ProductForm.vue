<template>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="ruleForm" size="medium">
  <el-row>
    <el-col :span="12">
        <el-form-item label="Name" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="Price" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer" prop="manufacturer">
        <el-select v-model="ruleForm.manufacturer" placeholder="Manufacturer">
          <el-option label="SamSung" value="SamSung"></el-option>
          <el-option label="Aple" value="Apple"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="12">    
      <el-form-item label="Image" prop="image">
        <el-input v-model="ruleForm.image"></el-input>
      </el-form-item>
      <el-form-item label="Description" prop="desc">
        <el-input id="textarea" type="textarea"  v-model="ruleForm.desc"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
      <el-form-item class="button">
        <el-button  type="primary" @click="submitForm('ruleForm')">
          <span v-if="isCreating">Create</span>
            <span v-else>Edit</span>
        </el-button> 
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
</el-form>
</template>
<style scoped>
.button {
  float: right;
  margin:10px;
}
.el-button {
    width: 100px;
}
</style>
<script>
export default {
    props: ['isCreating'],
  data() {
        
    return {


      ruleForm: {
        name: "",
        price: "",
        manufacturer: "",
        image: "",
        desc: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input  Name",
            trigger: "blur"
          },
          {
            min: 3,
            max: 20,
            message: "Length should be 3 to 20",
            trigger: "blur"
          }
        ],
        price: [
          {
            required: true,
            message: "Please Input Price",
            trigger: "price"
          },
          {
            min: 3,
            max: 20,
            message: "Length should be 3 to 20",
            trigger: "price"
          }
        ],
        manufacturer: [
          {
            required: true,
            message: "Please select Manufacturer ",
            trigger: "change"
          }
        ],
        image: [
          {
            required: true,
            message: "Please Image Url",
            trigger: "blur"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please input Description form",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

