// pages/search/search.js
/**
 * 详解app小程序的逻辑->使用App()来注册,且必须在app.js中注册,还不允许注册多个呢，需要注意;
 * onLaunch: 监听初始化;
 * onShow: 监听显示,也就是进入前台;
 * onHide: 监听隐藏,也就是按home离开微信;
 * onError: 监听错误
 * 当然,这里也可以自定义全局的方法和全局变量
*/
/**
 * app.json中不能有任何的注释信息,否则页面会出错哟~
 * Page()可用于注册页面,在每一个页面的js文件中注册
*/
const common = require("../common/common.js");
Page({

  /**
   * 页面的初始数据
   */
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
     * this.data无法更改数据,要通this.setData()的方式,否则会造成数据的不统一;
    */
    this.setData({
      inputVal: value,
      disabled: !(value.length>0)
    })
  },
  search(){
    /** 
     * 这里需要保留pages()的应用;
     * 
    */
    let that = this;

    /**
     * 微信小程序开发中request的注意事项:1)url中不允许带有端口.
     * 路由跳转: 需要跳转的应用内页面路径,路径后可带参数,参数与路径之间用?分隔,参数键跟参数值用=相连，不同参数用&分隔
    */
    that.setData({
      loading: true,
      disabled: true
    });
    //格式化时间
    var nowDate = common.formateDate(new Date());
    /**
     * 这里的跳转地址,一定得是相对地址,不存在绝对地址的哦~
    */
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
           * 若这里用this的话，不是page中的this哦，下面的写法会报错,这也就是开始用that的原因;
           * 报错提示:thirdScriptError ==> this.setData is not a function.
           * 明白引用调用的意义哦~
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