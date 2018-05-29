
/** 
 * 1.快速生成search/search.js,search.wxss,search.wxml,search.json？
 *   答： 新建目录search,然后该目录下新建Page search
*/
/** 
 * 2.tabbar展示不出来:
 * 若pages里的第一项,没有出现在tabBar中的List数组中,则无法展示;
 * 若list数组中的path没有在pages中配置，则报错；
*/

/** 
 * 3.app的逻辑层:
    * app.js中允许自定义全局的方法和全局变量[即app.js,app.wxss全局范围内可用]
    * app.json中不能有任何的注释信息,否则页面会出错哟~
    * App()和Pages()注册程序和页面,同时程序不允许注册多个,getApp()和getPages()获取app实例和获取当前pages页;
    * 该方法接收一个对象: 对象里面有各种生命周期方法
*/


App({
  onLaunch: function () { //监听初始化;
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
          /**
          * 获取到经纬度之后,如何转为具体的地址?
          */
          wx.getLocation({
            success: res => {
              // console.log(res);
            }
          })
        }
      }
    })
  },
  onShow: function () {  //监听显示, 也就是进入前台;
    
  },
  onHide: function () {  //onHide: 监听隐藏,也就是按home离开微信;

  },
  globalData: {
    userInfo: null
  }
})