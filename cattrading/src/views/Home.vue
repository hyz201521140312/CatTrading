<template>
  <div class="home">
    <top-nav></top-nav>
    <div class="lbt"></div>
    <div class="w">
      <!-- 热门猫咪 -->
      <div class="hotcat">
        <div class="title">
          <div class="name">热门猫咪</div>
          <div class="engname">-------- FAVORITE PET CAT -------</div>
        </div>
        <div class="hotpic">
          <div class="hotpicup">
            <div class="one"></div>
            <div class="two"></div>
            <div class="two"></div>
            <div class="two"></div>
          </div>
          <div class="hotpicdow">
            <div class="two"></div>
            <div class="two"></div>
            <div class="two"></div>
            <div class="one"></div>
          </div>
        </div>
        <div class="more">
          <router-link to="/variety">查看更多>></router-link>
        </div>
      </div>

      <!-- 优品推荐 -->
      <div class="goodvariety">
        <div class="title">
          <div class="name">优品推荐</div>
          <div class="engname">-------- OPTIMAL PRODUCT -------</div>
        </div>
        <div class="hotpic">
          <div class="goodpic1">
            <div class="sixev"></div>
            <div class="sixev"></div>
            <div class="sixev"></div>
            <div class="sixev"></div>
            <div class="sixev"></div>
          </div>
        </div>
      </div>

      <!-- 各猫种 -->
      <div class="bomao">
        <div class="f1titles">
           <div class="title_left">
             <div class="left"></div>


           </div>
           <div class="title_right"></div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    // HelloWorld
  }
};
</script>

<style scoped>
.lbt {
  width: 100%;
  height: 470px;
  background-color: pink;
}

.w {
  width: 1200px;
  height: auto;
  background-color: blue;
  margin: 20px auto;
}
.hotcat {
  width: 100%;
  height: 600px;
  background-color: rgb(218, 137, 16);
}

.title {
  width: 100%;
  height: 80px;
  text-align: center;
  background-color: #0ff;
}

.name {
  /* margin-bottom: 10px; */
  width: 100%;
  font-size: 24px;
  height: 50px;
  text-align: center;
}

.engname {
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #b9b9b9;
  margin-bottom: 20px;
}
.hotpic {
  width: 100%;
  height: 520px;
  background-color: #256;
}
.hotpicup {
  width: 100%;
  height: 50%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.hotpicdow {
  width: 100%;
  height: 50%;
  background-color: green;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.one {
  width: 36%;
  height: 100%;
  background-color: #658;
}
.two {
  width: 20%;
  height: 100%;
  background-color: #687;
}
.more {
  width: 166px;
  height: 52px;
  text-align: center;
  line-height: 52px;
  margin: 30px auto;
  font-size: 14px;
  text-decoration: none;
  color: #333;
  border: solid 1px #dcdcdc;
  border-radius: 7px;
}

/* 优品推荐部分样式 */
.goodvariety {
  width: 100%;
  height: 500px;
  margin-top: 150px;
  background-color: #536;
}

.goodpic1 {
  width: 100%;
  height: 70%;
  background-color: red;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.sixev {
  width: 19%;
  height: 100%;
  background-color: #035;
}

/* 分类猫 */

.bomao {
  width: 100%;
  height: 800px;
  background-color: orange;
}

.f1titles {
  width: 100%;
  height: 100px;
  border-bottom: 2px solid #64c9b9;
  margin-bottom: 30px;
}

.left {
      float: left;
    width: 250px;
    height: 48px;
    overflow: hidden;
}
</style>


