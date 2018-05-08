/**
 * 构建错误提示
 * */

/**
 * @param rulesList 规则列表
 * @param msgCfg 自定义错误提示
 * @return Object
 * */
export default function (rulesList, msgCfg) {
  return Object.assign({
    required: '此项必填',
    max: `最大长度不能超过${rulesList.max}位！`,
    min: `最小长度不得小于${rulesList.min}位！`,
    phone: '手机号不合法',
    email: '邮箱不合法',
    reg: '输入不合法'
  }, msgCfg)
}
