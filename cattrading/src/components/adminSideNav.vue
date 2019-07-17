<template>
  <ul class="sidenax">
    <li>
      <a href="#myinfo">个人信息</a>
    </li>
    <li>
      <a href="#xiugai">修改资料</a>
    </li>
    <li>
      <a href="#mima">修改密码</a>
    </li>
    <li>
      <a href="#addknowledges">添加选猫知识</a>
    </li>
    <li>
      <a href="#addcatclass">添加猫咪品种</a>
    </li>
    <li>
      <a href="#usermanagement">用户管理</a>
    </li>
    <li>
      <a href="#goodsmanagement">商品管理</a>
    </li>
    <li>
      <a href="#contactus">关于/联系我们</a>
    </li>

    <router-link to="/">退出登录</router-link>
  </ul>
</template>

 <script>
</script>


<style scoped>
.sidenax {
  background-color: antiquewhite;
  width: 220px;
  height: 500px;
   position: fixed;
 top: 60px;
}

.sidenax li {
  margin-bottom: 20px;
  /* padding-top: 24px; */
}
.sidenax li a {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(145, 145, 140);
}
</style>

