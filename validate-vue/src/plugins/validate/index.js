import Vue from 'vue'



export default {
  value: '',
  install() {

    Vue.prototype.checkUserName = (value) => {
      if(value == ""){
        return true; // 如果没有填写,默认为true
      }

      if(/\w{6,20}/.test(value)){
        return true;
      }else{
        return false;
      }
    }

    Vue.directive('validate', {
      // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
      bind (el, binding) {
        const _this = this
      },
      // 当被绑定的元素插入到 DOM 中时……
      inserted (el) {
        console.log('inserted')
      },
      update (el, binding) {
        console.log('update', el)
      }
    })
  }
}
