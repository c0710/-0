import Vue from 'vue'
import * as rules from './rules'
import generateErrMsg from './messages'

export default {
  value: '',
  install() {
    Vue.directive('validate', {
      inserted (el, binding) {
        let rulesCfg = binding.value
        console.log(el)
        let msgCfg = eval('(' + el.getAttribute('msg') + ')')
        let messageList = generateErrMsg(rulesCfg, msgCfg)
        // 监听input的keyup事件，每次键入都进行规则匹配
        let errMsg = {}
        if (rulesCfg.hasOwnProperty('required')) {
          errMsg['required'] = messageList.required
        }
        el.setAttribute('errMsg', JSON.stringify(errMsg))
        el.addEventListener('keyup', function (e) {
        for(let name in rulesCfg) {
          let result = rules[name](e.target.value, binding.value[name])
          if (result && errMsg.hasOwnProperty(name)) {
            delete errMsg[name]
          } else if(!result && !errMsg.hasOwnProperty(name)) {
            errMsg[name] = messageList[name]
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
