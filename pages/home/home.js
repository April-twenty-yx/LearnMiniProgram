// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '哈哈哈'
  },
  handleTap () {
    wx.navigateTo({
      url: '/pages/detail/detail?name="李栓蛋"'
    })
  }
})