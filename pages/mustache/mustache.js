// pages/mustache/mustache.js
Page({
  data: {
    firstName: "王花花",
    lastName: "李栓蛋",
    age: 19,
    time: new Date().toLocaleString(),
    isActive: false
  },
  onLoad () {
    setInterval(() => {
      this.setData({
        time: new Date().toLocaleString()
      })
    }, 1000)
  },
  handleChange () {
    this.setData({
      isActive: !this.data.isActive
    })
  }
})