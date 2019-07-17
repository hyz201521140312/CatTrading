<template>
  <div class="cat_info">
    <div class="pic">
      <img :src="pic" alt />
    </div>
    <div class="info">
      <div class="title_">{{title}}</div>
      <div class="date_num">
        <span>{{date1}}</span>
        <span>&nbsp;&nbsp;浏览量:{{number}}</span>
      </div>
      <div class="short_line">
        <span></span>
      </div>
      <div class="detail">
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{info}}
        </span>
      </div>
    </div>
    <div class="red_line"></div>
  </div>
</template>
<script>
  export default{
    data:function (){
      return {}
    },
    props:["pic","date1","id","info","number","title"]
  }
</script>
<style scoped>

.cat_info {
  width: 793px;
  height: 230px;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  position: relative;
  /* overflow: hidden;
  text-overflow: ellipsis; */
  margin-bottom: 30px;
}

.pic {
  width: 280px;
  height: 230px;
  position: relative;
}
.pic img {
  width: 280px;
  height: 210px;
  position: absolute;
  bottom: 0px;
  left: 0;
  /* background-color: pink; */
}

.info {
  width: 513px;
  height: 180px;
  /* background-color: brown; */
}

.info .title_ {
  /* width: 100%; */
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
  padding-top: 5px;
  box-sizing: border-box;
}
.info .date_num,
.info .short_line {
  height: 30px;
  line-height: 30px;
  margin-top: 7px;
}

.info .date_num {
  font-size: 12px;
  color: #333;
}

.info .short_line span {
  display: block;
  width: 27px;
  height: 1px;
  background-color: #1b1b1b;
}

.info .detail {
  margin-top: -12px;
  font-size: 12px;
  color: #999;
  font-family: MicrosoftYaHei;
  width: 513px;
  height: 130px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.red_line {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 0px;
  height: 1px;
  background-color: #ea5413;
  transition: 1s;
}

.cat_info:hover .red_line {
  width: 793px;
}
.cat_info:hover .title_ {
  color: #ea5413;
}
</style>