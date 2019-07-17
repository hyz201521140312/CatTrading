<template>
  <div class="addgoods">
    <h4>添加选猫知识</h4>
    <div class="myf1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>

        <el-form-item label="图片地址" prop="pic">
          <el-input v-model="ruleForm.pic"></el-input>
        </el-form-item>

        <el-form-item label="发表时间">
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="ruleForm.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>

        <el-form-item label="浏览量" prop="number">
          <el-input v-model="ruleForm.number"></el-input>
        </el-form-item>

        <el-form-item label="文字详情" prop="info">
          <el-input type="textarea" v-model="ruleForm.info"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认添加</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      ruleForm: {
        title: "",
        pic: "",
        date1: "",
        number: "",
        info:''
        // id:'',    //页面中没有显示，只是为了方便有值之后传给服务器----使数据库goods表的userid为user表的id
      },
      rules: {
        title: [
          { required: true, message: "请填写标题", trigger: "blur" }
        ],
        pic: [{ required: true, message: "请填写图片地址", trigger: "blur" }],
        number: [
          { required: true, message: "浏览量", trigger: "blur" }
        ],
        info: [
          { required: true, message: "请填文字详情", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/addcatknowledges", this.ruleForm)
            .then(res => {
              console.log(res);
              if (res.data.msg5 == "添加成功") {
                this.$message({
                  message: "添加成功",
                  type: "success"
                });
                // this.$router.push({ path: "/userhome?id=" + res.data.myid });
              } else {
                this.$message({
                  message: "添加失败",
                  type: "error"
                });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
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


<style scoped>
.myf1 {
  width: 60%;
  margin: 600px auto;
}
.addgoods {
  width: 1000px;
  position: relative;
  top: -450px;
  left: 500px;
}

.price {
  width: 30%;
}
</style>
