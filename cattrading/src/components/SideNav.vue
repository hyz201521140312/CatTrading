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
    <li>我的帖子</li>
    <li>系统消息</li>
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
  margin-top: 60px;
}

.sidenax li {
  padding-top: 24px;
}

.c {
  background-color: pink;
}

.c li {
  background-color: yellow;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.s {
  font-size: 24px;
  font-weight: bold;
}

.myinfo {
  position: relative;
  left: 600px;
}
</style>

