// components/mul-slots/mul-slots.js
Component({
  options: {
    multipleSlots: true
  },
  pageLifetimes: {
    show () {
      console.log('页面显示出来了');
    },
    hide () {
      console.log('页面被隐藏起来了');
    },
    resize () {
      console.log('页面尺寸发生了改变');
    }
  },
  lifetimes: {
    created () {
      console.log('组件被创建出来了');
    },
    attached () {
      console.log('组件被添加到页面中');
    },
    ready () {
      console.log('组件被渲染出来了');
    },
    moved () {
      console.log('组件结点发生了变化');
    },
    detached () {
      console.log('组件被移除');
    }
  }
})
