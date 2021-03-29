// pages/detail/detail.js
Page({
  onLoad (options) {
    // 获取传过来的数据
    console.log(options);
  },
  // 如何将数据传给home界面？
  onUnload () {
    // 调用getCurrentPages这个方法后，出现的界面会以栈的方式存在pages中
    const pages = getCurrentPages();
    console.log(pages);
    pages[pages.length - 2].setData({
      title: '呵呵呵'
    })
  },
  handleBack () {
    wx.navigateBack({
      delta: 1
    })
  }
})