<template>
  <div>
    <top-nav></top-nav>
    <div class="pic">
      <img src="http://www.maomijiaoyi.com/application/views/TPL_SIMPLE/images/zhishi.jpg" alt />
    </div>
    <div class="w">
      <div class="knowledbox">
        <div class="titknow">
          <div class="choosecat">选猫知识</div>
          <div class="engname">—— THE CAT knowledge ——</div>
        </div>


        <div class="contents">
          <div class="left">
            <div v-for="n in msg" :key="n.id">
              <cat-infor  :pic="n.pic" :date1="n.date1" :id="n.id" :info="n.info" :number="n.number" :title="n.title">
              </cat-infor>
            </div>
              
          </div>
          <div class="right">
            <div v-for="n in msgright" :key="n.id">
               <router-link :to='{path:"/firstpage",query:{id:n.id}}' class="myrouter">
              <good-advise :pic="n.pic" :info="n.info" :price="n.price" :shop="n.shop" :title1="n.title1"></good-advise>
              </router-link>
            </div>

          </div>
        </div>


          <!-- <div class="title3">
        <div class="yptj">友情链接</div>
        <div>—— FRIENDLY LINK ——</div>
      </div> -->
      </div>
    </div>
  </div>
</template>


<script>
import catinfor from '@/components/style_tag/cat_infor.vue';
import goodadvise from '@/components/style_tag/good_advise.vue';
export default {
  data: function (){
    return {
      msg:[],
      msgright:[]
    }
  },
  components:{
    "cat-infor":catinfor,
    "good-advise":goodadvise
  },
  created:function (){
    this.axios.post('/catknowledges')
    .then((res)=>{
      // console.log(res.data);
       var newlist = [];
        for (var i = 0; i < res.data.length; i++) {
          var comment = res.data[i];
          comment.date1 = comment.date1.slice(0, 10);
          newlist.push(comment);
        }
        res.data = newlist;

      this.msg=newlist;
    })
    .catch(err=>{
      console.log(err)
    })

    this.axios.get("goodszhanshi",{
      params:{kw:"推荐"}
    })
    .then((res)=>{
      console.log(res.data);
      this.msgright = res.data;
    })
    .catch((err)=>{
      console.log(err);
    })
  }
};
</script>

<style scoped>
.myrouter {
   text-decoration: none;
   color: #333;
}
.w {
  width: 1220px;
  margin: 0 auto;
}
.pic {
  width: 100%;
  height: 322px;
}
.pic img {
  width: 100%;
  height: 100%;
}
.knowledbox {
  width: 100%;
  height: 1000px;
  /* background-color: #365; */
}
.titknow {
  width: 100%;
  height: 80px;
  /* background-color: orange; */
}
.choosecat {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 24px;
  margin: 10px;
}
.contents {
  width: 100%;
  height: 800px;
  /* background-color: #ccc; */
  display: flex;
  justify-content: space-between;
}

.contents .left {
  width: 65%;
  height: 100%;
  /* background-color: red; */
}
.contents .right {
  width: 30%;
  height: 100%;
  /* background-color: green; */
}
.title3 {
  width: 100%;
  height: 100px;
  /* background-color: #ff0; */
  text-align: center;
}
.title3 .yptj {
  font-size: 24px;
  margin: 10px 0;
}
</style>


