// pages/home/home.js
Page({
  data: {
    list: ["衣服", "裤子", "鞋子"]
  },
  handleTouchStart () {
    console.log('start');
  },
  handleTouchMove () {
    console.log('move');
  },
  handleTouchEnd () {
    console.log('leave');
  },
  handleTap () {
    console.log('click');
  },
  handleLongPress () {
    console.log('loading..');
  },
  handleEnd (e) {
    console.log(e);
  },
  handleStart (e) {
    console.log(e);
  },
  handleFather (e) {
    console.log(e);
  },
  handleSon (e) {
    // target 产生事件的 view
    // currentTarget 触发事件的 view
    // 当我点击son，产生了son事件，同时也触发了father事件
    console.log(e);
  },
  handleClick (e) {
    // console.log(e);
    console.log(e.currentTarget.dataset.index + '-' + e.currentTarget.dataset.item);
  },
  handleCaputure1 () {
    console.log('capture1');
  },
  handleTap1 () {
    console.log('tap1');
  },
  handleCaputure2 () {
    console.log('capture2');
  },
  handleTap2 () {
    console.log('tap2');
  },
  handleCaputure3 () {
    console.log('capture3');
  },
  handleTap3 () {
    console.log('tap3');
  }
})