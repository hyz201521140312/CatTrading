<template>
  <div class="reg ss">
    <h4>修改资料</h4>
    <div class="myf1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="adminname">
          <el-input v-model="ruleForm.adminname"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="管理名言" prop="mytitle">
          <el-input v-model="ruleForm.mytitle"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var validatecx = (rule, value, callback) => {
      if (this.ruleForm.cx == "卖家") {
        this.flag = true;
      } else {
        this.flag = false;
      }
      callback();
    };

    return {
      flag: false,
      ruleForm: {
        adminname: "",
        sex: "男",
        phone: "",
        mytitle: "",
      },
      rules: {
        adminname: [
          { required: true, message: "请填写用户名", trigger: "blur" },
          { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请填写联系电话", trigger: "blur" }
          //   { min: 2, max: 6, message: "长度在 2 到 6 个字符", trigger: "blur" }
        ],
        sex: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
      } 
    };
  },
  created() {
    this.axios
      .get("/admininfo", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res);
        this.ruleForm = res.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //验证全部通过
          this.axios
            .post("/adminupdata", this.ruleForm)
            .then(res => {
              console.log(res);
                if (res.data.msg3 == "修改成功") {
                   this.$message({
                    message: "修改成功",
                    type: "success"
                  });
                } else {
                  this.$message({
                    message: "修改失败",
                    type: "error"
                  });
                  //跳转到登陆页面
                  
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
.ss {
  width: 1000px;
  position: relative;
  top: -450px;
  left: 500px;
}
</style>
