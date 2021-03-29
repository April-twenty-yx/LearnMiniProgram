// components/my-prop/my-prop.js
Component({
  properties: {
    title: {
      type: String,
      value: '默认文本',
      observer (newVal, oldVal) {
        console.log(newVal + '--' + oldVal);
      }
    }
  }
})
