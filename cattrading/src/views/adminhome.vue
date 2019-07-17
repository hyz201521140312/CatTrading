 <template>
  <div class="adminhome" @click="change1">
    <top-nav></top-nav>
    <adminsid-nav></adminsid-nav>
    <component v-bind:is="currentTabComponent"></component>
  </div>
</template>                           
 

 <script>
import myinfo from "@/components/admin/myinfo";
import xiugai from "@/components/admin/xiugai";
import mima from "@/components/admin/mima";
import addknowledges from "@/components/admin/addknowledges";
import addcatclass from "@/components/admin/addcatclass";
import usermanagement from "@/components/admin/usermanagement";
import goodsmanagement from "@/components/admin/goodsmanagement";
import contactus from "@/components/admin/contactus";
import adminSideNav from "@/components/adminSideNav";
export default {
  name: "adminhome",
  data() {
    return {
      currentTabComponent: "myinfo"
    };
  },
  components: {
    "adminsid-nav": adminSideNav,
    myinfo: myinfo,
    xiugai: xiugai,
    mima: mima,
    addcatclass: addcatclass,
    addknowledges: addknowledges,
    usermanagement: usermanagement,
    goodsmanagement: goodsmanagement,
    contactus: contactus
  },
  methods: {
    change1: function(ev) {
      console.log(ev.target.getAttribute("href"));
      //currentTabComponent:当前选项卡组件   href="#list"前面加‘#’防止其跳到另一个页面去
      this.currentTabComponent = ev.target.getAttribute("href").substring(1);
    }
  },
  created() {
    this.axios
      .get("/admininfo", {
        params: {
          userid: this.$route.query.id
        }
      })
      .then(res => {
        console.log(res);
        this.myinfo = res.data;
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
      