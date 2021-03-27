// App -> page -> component
App({
  // 生命周期函数

  // 小程序初始化完成时执行的生命周期函数
  // 生命周期：5分钟
  onLaunch: function () {
    console.log("bb");
    // 异步函数
    wx.getUserProfile({
      success: function (res) {
        console.log("a");
        console.log(res);
      },
      fail () {
        console.log("failed...");
      }
    })

    setTimeout(() => {
      const err = new Error();
      throw err;
    }, 3000)
  },
  // 小程序界面显示出来后执行的生命周期函数
  onShow () {
    console.log("show");
  },
  onHide () {
    console.log("界面被隐藏时执行");
  },
  onError (msg) {
    console.log("小程序发生错误时执行的生命周期函数");
  }
})