import Vue from 'vue'
import * as rules from './rules'



export default {
  value: '',
  install() {
    Vue.directive('validate', {
      bind (el, binding) {
        const _this = this
        console.log('bind')
      },
      inserted (el, binding) {
        console.log('inserted')
        const rulesArr = Object.keys(binding.value)  // 存放当前元素所绑定的所有规则
        el.addEventListener('keyup', function (e) {
          for(var name of rulesArr) {
            rules[name](e.target.value, binding.value[name])
          }
        })
      },
      update (el, binding) {
      }
    })
  }
}
