import Vue from 'vue'
import * as rules from './rules'
import generateErrMsg from './messages'

export default {
  value: '',
  install() {
    Vue.directive('validate', {
      bind (el, binding) {

      },
      inserted (el, binding) {
        let rulesCfg = binding.value
        let messageList = generateErrMsg(rulesCfg)
        // 监听input的keyup事件，每次键入都进行规则匹配
        let errMsg = {}
        if (rulesCfg.hasOwnProperty('required')) {
          errMsg['required'] = messageList.required
        }
        el.setAttribute('errMsg', JSON.stringify(errMsg))
        el.addEventListener('keyup', function (e) {
        for(let name in rulesCfg) {
          let result = rules[name](e.target.value, binding.value[name])
          if (!result) {
            if (!errMsg.hasOwnProperty(name)) {
              errMsg[name] = messageList[name]
            }
          } else {
            if (errMsg.hasOwnProperty(name)) {
              delete errMsg[name]
            }
          }
          el.setAttribute('errMsg', JSON.stringify(errMsg))
        }
        }, false)
      },
      update (el, binding) {
      }
    })
  }
}
