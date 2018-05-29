/**
 * 
 * 本人的appID:	wx87175f7067feb659
*/
/** 
 * 微信开发者工具常用快捷键:
 * ctrl+shift+s: 保存所有文件;
 * ctrl+shit+n: 快速新建项目;
 * alt+上下键: 快速移上移下一行;
 * 
 * shift+alt+上下键： 往上或者往下复制一行;
 * shit+alt+f:格式化代码;
 * 
 * 快速打开文件: ctrl+p,进行搜索;
 * 快速打开最近打开文件: ctrl+e;
 * 項目內搜索：需要注意焦點必須在編輯器外面，然後ctrl+shift+f即可;
 * ctlr+b： 快速编译
 * ctrl+shift+p: 预览代码
 * ctrl+, 打开设置窗口
*/

/** 
 * 如何快速生成带有相同名字的不同后缀的文件夹格式,比如about文件夹下有about.wxml,about.wxss,about.js,about.json;
 * 方法: 新建目录about,然后在该目录下新建pages，然后输入同名目录的名字，即可同时生成上述所需的文件;
*/


/** 
 * tabbar展示不出来:
 * 若pages里的第一项,没有出现在tabBar中的List数组中,则无法展示;
 * 同时,若list数组中的path未在pages数组中配置,也会报错:**需在pages数组中；
*/

/** 
 * app的逻辑层:
 * App()和Pages()注册程序和页面,getApp()和getPages()获取app实例和获取当前pages页;
 * 该方法接收一个对象: 对象里面有各种生命周期方法
*/
App({
  onLaunch: function () {
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
        * 获取用户的地理信息,会提示 该方法不是个函数,在app Onlauch函数中[scope跟对应的接口,不一定是同一个名字哈]->被写成userLocation.
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
  globalData: {
    userInfo: null
  }
})