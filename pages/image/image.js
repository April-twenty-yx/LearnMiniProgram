// pages/image/image.js
Page({
  data: {
    imageUrl: ''
  },
  handleLoad () {
    console.log("图片加载完成");
  },
  handleUpload () {
    wx.chooseImage({
      success: (res) => {
        console.log(res);
        this.setData({
          imageUrl: res.tempFiles[0].path
        })
      }
    })
  },
  handleGet (e) {
    console.log(e);
  }
})