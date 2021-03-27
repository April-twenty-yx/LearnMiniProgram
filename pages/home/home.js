// pages/home/home.js
const app = getApp();
console.log(app.globalData.name);
console.log(app.globalData.family);

Page({
  data: {
    name: app.globalData.name,
    family: app.globalData.family,
    list: []
  },
  handleUserInfo (e) {
    console.log(e);
  },
  // 页面被加载出来
  onLoad () {
    console.log("onLoad");
    wx.request({
      url: 'http://152.136.185.210:8000/api/w6/recommend',
      success: (res) => {
        console.log(res);
        this.setData({
          list: res.data.data.list
        })
      }
    })
  },
  // 界面显示出来
  onShow () {
    console.log("onShow");
  },
  // 界面初次渲染
  onReady () {
    console.log("onReady");
  },
  // 界面被隐藏
  onHide () {
    console.log("onHide");
  },
  // 界面被卸载（销毁）
  onUnload () {
    console.log("onUnload");
  },

  // 监听其他函数
  onPullDownRefresh () {
    console.log("下拉刷新触发");
  },
  onPageScroll (obj) {
    console.log(obj);
  },
  onReachBottom () {
    console.log("到底了");
  }
})