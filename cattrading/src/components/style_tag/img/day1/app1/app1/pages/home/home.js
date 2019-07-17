// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    one:"show",
    two:"hide"

  },


 /**
   * 业务函数--第一个按钮的点击事件加载
   */
  one_clicked:function(){
    console.log(6666)
    console.log(this)
    this.setData({ one: "show", two: "hide" })

  },
  two_clicked:function(){
    // this.data.one = "hide"
    // this.data.two = "show"
    //传入的对象的成员名  在data里面有  就是覆盖  没有就是添加新的数据
    this.setData({one:"hide",two:"show"})

  },
  con1:function(){
        console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   * 为了开发时在特定的场景下  需要去帮我们执行某些代码,而提供的接口
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})