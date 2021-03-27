Page({
  data: {
    name: "小明",
    age: 11,
    students: [
      {
        id: 1,
        name: "王花花",
        age: 17
      },
      {
        id: 2,
        name: "李栓蛋",
        age: 14
      }
    ],
    counter: 0
  },
  handleAdd() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleSub() {
    this.setData({
      counter: this.data.counter - 1
    })
  }
})