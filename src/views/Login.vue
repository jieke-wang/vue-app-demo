<template>
  <div class="login-box">
      <div class="form-box">
          <h3>后台管理系统</h3>
          <el-form
          :model="loginForm"
          status-icon
          :rules="rules"
          ref="loginFormDom"
          label-width="80px"
          class="loginForm">
            <el-form-item label="账号" prop="userName">
                <el-input v-model="loginForm.userName"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="code">
                <el-input placeholer="请输入验证码" v-model="loginForm.code" autocomplete="off">
                    <template #append>
                        <img class="img-dom" src="../assets/logo.png" alt="验证码">
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="submit-btn" type="primary" @click="submitForm">登录</el-button>
            </el-form-item>
          </el-form>
      </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    // useRoute 获取到的是当前的路由信息
    const route = useRoute();
    // useRouter 获取到的是路由组件
    const router = useRouter();
    console.log(route, router);

    // 表单魔心
    const loginForm = reactive({
      userName: "",
      password: "",
      code: "",
    });

    // 自定义验证
    const validateUserName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入账号"));
      } else if (value.length < 4) {
        callback(new Error("账号至少为4位"));
      } else {
        callback();
      }
    };

    // 表单引用
    const loginFormDom = ref(null);
    // 表单验证规则
    const rules = {
      userName: [
        { required: true, message: "请输入账号", trigger: "blur" },
        { validator: validateUserName, trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 16, message: "密码长度为6~16", trigger: "blur" },
      ],
      code: [
        { required: true, message: "请输入验证码", trigger: "blur" },
        { min: 4, max: 4, message: "密码长度应为4位", trigger: "blur" },
      ],
    };

    const submitForm = () => {
      loginFormDom.value.validate((valid) => {
        if (valid) {
          localStorage.setItem("token", "NewToken");
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              userName: loginForm.userName,
              nickName: "jack",
            })
          );

          router.push('/');
        } else{
            ElMessage.error('验证不通过');
            console.log("error submit !!!");
            return false;
        }
      });
    };

    return {
        loginForm,
        loginFormDom,
        rules,
        submitForm
    };
  },
};
</script>

<style lang="scss" scoped>
.login-box{
    width: 100%;
    height: 100%;
    background: #efefef;
    padding-top: 100px;
    box-sizing: border-box;
    .form-box{
        padding: 30px 10px;
        width: 500px;
        height: 300px;
        margin: 0 auto;
        background: #fff;
        border-radius: 10px;
    }
    h3{
        text-align: center;
    }
    .submit-btn{
        width: 100%;
    }
    .img-dom{
        width: 100px;
        height: 34px;
    }
}
</style>
<style>
.form-box /deep/ .el-input-group__append{
    padding: 0;
    box-sizing: border-box;
    height: 40px;
}
</style>