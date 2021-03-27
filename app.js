// App -> page -> component
// 注册小程序示例
App({
  onLaunch (options) {
    // 判断小程序进入场景时也可以在 onLaunch 函数中进行判断
    // 通过 options 参数获得
    console.log(options.scene);
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
      }
    })
  },
  onShow (options) {
    // 判断小程序的进入场景
    console.log(options.scene);
  },
  onHide () {

  },
  onError (msg) {

  },
  // app里面不仅可以放置生命周期函数，也可以放置全局共享数据
  // 如何在其他js文件中获取这个全局数据呢？看home.js
  globalData: {
    name: "王花花",
    family: "背背山"
  }
})