// pages/home/home.js
Page({
  handleShowToast () {
    wx.showToast({
      title: '哈哈哈',
      duration: 3000,
      mask: true
    })
  },
  handleShowModel () {
    wx.showModal({
      title: '标题',
      content: '内容',
      showCancel: false
    })
  },
  handleShowLoading () {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.hideLoading({
        success: (res) => {},
      })
    }, 1000)
  },
  handleShowAction () {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      success: (index) => {
        console.log(index);
      }
    })
  },
  // 分享
  onShareAppMessage (options) {
    return {
      title: '分享界面',
      imageUrl: 'https://stylus.bootcss.com/img/stylus-logo.png',
      path: '/pages/about/about'
    }
  }
})