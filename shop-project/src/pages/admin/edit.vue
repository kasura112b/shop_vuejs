<template>
  <product-form> </product-form>
</template>

<script>
  import ProductFrom from '../../components/products/ProductForm.vue'
  export default {
    data () {
      return {
        model: {},
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
  },
   components: {
      'product-form': ProductFrom
    }
};
   
</script>

