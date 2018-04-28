import Vue from 'vue'

const pattern = {
  noEmpty (val, payload) {
    return val !== ''
  }
}

export const VueValidate = {
  install() {
    Vue.directive('validate', {
      // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind (el, binding) {
        console.log('bind')
        console.log(binding)
      },
      // 当被绑定的元素插入到 DOM 中时……
      inserted (el) {
        console.log('inserted')
      }
    })
  }
}
