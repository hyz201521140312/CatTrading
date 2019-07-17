<template>
      
     <div class="myinfo">
    <h1>基本信息</h1> 
    <ul>
        <li><span class="s">用户名：</span><span>{{myinfo.username}}</span></li>
        <li><span class="s">性别：</span><span>{{myinfo.sex}}</span></li>
        <li><span class="s">电话：</span><span>{{myinfo.tel}}</span></li>
        <li><span class="s">邮箱：</span><span>{{myinfo.email}}</span></li>
        <li><span class="s">生日：</span><span>{{myinfo.birth}}</span></li>
        <li><span class="s">用户权限：</span><span>{{myinfo.cx}}</span></li>
        <li><span class="s">简介:</span><span>{{myinfo.title}}</span></li>

    </ul>
  </div>
</template>
<script>
export default {
    name:'myinfo',
  data() {
      return {
       myinfo:{}  
      }
  },
    mounted(){
    this.axios
      .get("/userinfo", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res);
        this.myinfo=res.data
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
</script>

<style scoped>
.myinfo{
  width: 400px;  
  position: relative;
  left: 0px;
  top: 140px;
  left: 0px;
  bottom: 0px;
  margin: auto;
}
.myinfo ul {
  background-color: pink;
  width: 350px;
}

.myinfo li {
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
 
}
</style>

