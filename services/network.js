// 为什么需要封装？
// 降低api与组件之间的耦合度
// 防止出现回调地狱
export default function request (options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      // success: (res) => {
      //   resolve(res);
      // },
      // 也可以这么写
      success: resolve,
      fail: reject
      // fail: (err) => {
      //   reject(err);
      // }
    })
  })
}
