// components/w-tab-control/w-tab-control.js
Component({
  properties: {
    list: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },
  methods: {
    handleTap (e) {
      console.log(e);
      this.setData({
        currentIndex: e.currentTarget.dataset.index
      })
      this.triggerEvent("show", { currentIndex: this.data.currentIndex, item: e.currentTarget.dataset.item }, {});
    }
  }
})
