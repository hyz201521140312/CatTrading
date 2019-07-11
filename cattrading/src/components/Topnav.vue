<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <router-link  to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/salebuy">买猫卖猫</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/knowledge">选猫知识</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to="/variety">猫咪品种</router-link>
      </el-menu-item>
      <el-menu-item class="fr" index="5">
        <router-link to="/contactus">联系我们</router-link>
      </el-menu-item>
      <el-menu-item class="fr" index="6">
        <router-link to="/aboutus">关于我们</router-link>
      </el-menu-item>
      <el-menu-item class="fr" index="7">
        <router-link to="/reg">注册</router-link>
      </el-menu-item>
      <el-menu-item class="fr" index="8">
        <router-link to="/login">登录</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "1"
    }
  },
  watch: {
    "$route.path": function() {
      console.log(this.$route.path);
      this.jiantiluyou();
    }
  },
  created() {
    this.jiantiluyou();
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

     jiantiluyou() {
      if (this.$route.path == "/salebuy") {
        this.activeIndex2 = "2";
      } else if (this.$route.path == "/knowledge") {
        this.activeIndex2 = "3";
      }else if (this.$route.path == "/variety") {
        this.activeIndex2 = "4";
      }else if (this.$route.path == "/contactus") {
        this.activeIndex2 = "5";
      }else if (this.$route.path == "/aboutus") {
        this.activeIndex2 = "6";
      }else if (this.$route.path == "/reg") {
        this.activeIndex2 = "7";
      }else if (this.$route.path == "/login") {
        this.activeIndex2 = "8";
      }
    }
  }
};
</script>


<style scoped>
.fl {
  float: left;
}

.fr {
  float: right;
}

router-link {
    text-decoration: none;
}
</style>
