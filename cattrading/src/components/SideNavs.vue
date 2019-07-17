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
      <a href="#addgood">添加商品</a>
    </li>
     <li>
      <span><a href="#ugoodsmanagement">商品管理</a></span>
    </li>
    <li>我的帖子</li>
    <li>系统消息</li>
    <li>
      <router-link to="/">退出登录</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
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
.sidenax li a{
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgb(145, 145, 140);
}



</style>

