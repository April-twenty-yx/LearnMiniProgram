// App -> page -> component
const TOKEN = 'token'
App({
  globalData: {
    token: ''
  },
  onLaunch () {
    let token = wx.getStorageSync(TOKEN);
    if (token && token.length != 0) {
      // 验证token是否过期
      this.check_token(token);
    } else {
      // 进行登录操作
      this.login();
    }
  },
  login() {
    wx.login({
      success: (res) => {
        // 登录调用login接口向wx发送数据，wx服务器返回一个code字段
        // 发送code字段给本地服务器，获取token字段
        console.log(res.code);
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res);
            // 获取token字段，将它存到本地的缓存和全局的数据中
            wx.setStorageSync('token', res.data.token);
            this.globalData.token = res.data.token;
          }
        })
      }
    })
  },
  check_token (token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      header: {
        token
      },
      method: 'post',
      success: (res) => {
        if (!res.data.errCode) {
          console.log('token有效');
          this.globalData.token = token;
        } else {
          this.login();
        }
      }
    })
  }
})