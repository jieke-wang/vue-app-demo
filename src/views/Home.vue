<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row
          type="flex"
          class="row-gb"
          align="middle"
          justify="space-between"
        >
          <el-col :span="6">
            <div class="logo-box">
              <img src="../assets/logo.png" alt="logo" class="logo" />
              <h4>后台管理系统</h4>
            </div>
          </el-col>
          <el-col :span="2">
            <el-dropdown>
              <span class="el-dropdown-link">
                Jack <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="goRouter('/info')"
                    >个人中心</el-dropdown-item
                  >
                  <el-dropdown-item @click="goRouter('/password')"
                    >修改密码</el-dropdown-item
                  >
                  <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <nav-tab></nav-tab>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import NavTab from "../components/NavTab.vue";

export default {
  name: "Home",
  setup() {
    const router = useRouter();
    let goRouter = (path: string) => {
      router.push(path);
    };
    let logout = () => {
      localStorage.removeItem("token");
      router.push("/login");
    };

    return {
      NavTab,
      goRouter,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #efefef;
  }
  .el-main {
    padding: 20px;
  }
  .el-aside {
    height: 100%;
  }
  .el-container {
    height: 100%;
  }
  .logo-box {
    display: flex;
    align-content: flex-end;
    margin-top: 7px;
    box-sizing: border-box;
  }
  .logo {
    height: 50px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409eff;
  }
}
</style>