<template>
      
     <div class="myinfo">
    <h1>管理员信息</h1> 
    <ul>
        <li><span class="s">用户名：</span><span>{{myinfo.adminname}}</span></li>
        <li><span class="s">性别：</span><span>{{myinfo.sex}}</span></li>
        <li><span class="s">电话：</span><span>{{myinfo.phone}}</span></li>
        <li><span class="s">管理名言：</span><span>{{myinfo.mytitle}}</span></li>
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
      .get("/admininfo", {
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
  /* background-color: pink; */
  width: 350px;
}

.myinfo li {
  background-color: pink;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
.s {
  font-size: 24px;
  font-weight: bold;
}

</style>

