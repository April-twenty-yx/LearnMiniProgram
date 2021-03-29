// pages/home/home.js
Page({
  data: {
    counter: 0,
    show: true
  },
  handleInc (e) {
    console.log(e);
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleShow (e) {
    console.log(e);
    console.log(e.detail.currentIndex + '----' + e.detail.item);
  },
  handleCpnAdd () {
    const my_sel = this.selectComponent('#son');
    // console.log(my_sel);
    // 不推荐直接在父组件对子组件的值做修改
    /* my_sel.setData({
      counter: my_sel.data.counter + 1
    }) */
    my_sel.cpnAdd()
  },
  handleHidden () {
    this.setData({
      show: !this.data.show
    })
  }
})