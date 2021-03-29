// components/cpn-event/cpn-event.js
Component({
  methods: {
    handleTap () {
      this.triggerEvent("increment", { name: '王花花', age: 19 }, {})
    }
  }
})
