 <template>
  <div class="userhome" @click="change1">
    <top-nav></top-nav>
    <sid-nav v-show="flag1"></sid-nav>
    <side-navs v-show="flag2"></side-navs>
    <component
      v-bind:is="currentTabComponent"
    ></component>
  </div>  
</template>                     
 

 <script>
import myinfo from "@/components/user/myinfo";
import xiugai from "@/components/user/xiugai";
import mima from "@/components/user/mima";
import addgood from "@/components/user/addgood";
import ugoodsmanagement from "@/components/user/ugoodsmanagement";
import SideNav from "@/components/SideNav";
import SideNavs from "@/components/SideNavs";
export default {
  name: "userhome",
  data() {
    return {
      currentTabComponent: "myinfo",
      flag1:true,  
      flag2:false,
    };
  },
  components: {
    "side-nav": SideNav,
    "side-navs": SideNavs,
    myinfo: myinfo,
    xiugai: xiugai,
    mima:mima,
    addgood:addgood,
    ugoodsmanagement:ugoodsmanagement
  },
  methods: {
    change1: function(ev) {
      console.log(ev.target)
      console.log(ev.target.getAttribute("href"));
      //currentTabComponent:当前选项卡组件   href="#list"前面加‘#’防止其跳到另一个页面去
      this.currentTabComponent = ev.target.getAttribute("href").substring(1);
    }
  },
  created() {
    this.axios
      .get("/userinfo", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res);
        this.myinfo = res.data;
        if(res.data.cx=='普通用户'){
            this.flag1=true;
            this.flag2=false;
        }
        else if(res.data.cx=='卖家'){
          console.log("卖家")
            this.flag2=true;
            this.flag1=false;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
 
 <style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
      