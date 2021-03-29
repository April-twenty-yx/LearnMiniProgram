// pages/home/home.js
import request from '../../services/network'
Page({
  data: {

  },
  onLoad () {
    this.getDataUseOrigin();
    request({
      url: 'http://httpbin.org/get'
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  },
  getDataUseOrigin () {
    // 1.简单的get请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
    // 2.带参数的get请求
    // wx.request({
    //   url: 'http://httpbin.org/get',
    //   data: {
    //     name: '王花花',
    //     age: 18
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
    // 3.post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: '王花花',
    //     age: 18
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   }
    // })
  }
})