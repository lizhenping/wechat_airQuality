const common = require("../common/common.js");
Page({
  data: {
    inputVal: '',  //输入的内容
    disabled: true, //按钮是否可用状态
    modalHidden: true, //modal弹出状态
    loading: false, //加载状态
    modalErrorText: "请求失败,请检测网络"
  },
  modalChange: function () {
    this.setData({
      modalHidden: true
    })
  },
  inputEvt(e) {
    let value = e.detail.value;
    /**
     * this.data无法更改数据,要通this.setData()的方式,避免数据不统一;
    */
    this.setData({
      inputVal: value,
      disabled: !(value.length>0)
    })
  },
  search(){
    let that = this;
    /**
     * 微信小程序开发中request的注意事项:1)url中不允许带有端口.
     * 路由跳转: 
     * 1) 需要跳转的应用内页面路径,路径后可带参数,参数与路径之间用?分隔,参数键跟参数值用=相连，不同参数用&分隔;
     * 2) 跳转地址，必须是相对地址；
    */
    that.setData({
      loading: true,
      disabled: true
    });
    var nowDate = common.formateDate(new Date());
    var finalUrl = common.addParams('../result/result',{city: this.data.inputVal,"level":"2.2级",time: nowDate});
    //请求后台数据，若成功，页面跳转，若失败，则弹出失败原因
    var status = 200;
    if(status == 200){
      wx.navigateTo({
        url: finalUrl,
        success(res) {
          //  console.log(res);
        },
        complete(res){
          /**
           * 引用调用的意义??
           * 若这里用this的话，这是page中的this哦，下面的写法会报错,这也就是开始用that的原因;
           * 报错提示:thirdScriptError ==> this.setData is not a function.
          */
          // this.setData({
          //    disabled: false,
          //    loading: false
          // });
        }
      })
    }else{
      that.setData({
        modalHidden: false,
        modalErrorText: '请求失败,请联系管理员~'
      });
    }
    //无论成功失败，均必须将disabled置为false，否则会导致从结果页返回至查询页，按钮无法点击;即使input的值不为空;
    that.setData({
      loading: false,
      disabled: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
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