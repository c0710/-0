
// common rules
const instructions = {
  noEmpty: {
    errCode: 101,
    msg: '选项不得为空'
  },
  isPhone: {
    errCode: 102,
    msg: '请输入正确的手机号'
  },
  isEmail: {
    errCode: 103,
    msg: '请输入合法的邮箱'
  },
  limitRange: {
    errCode: 104,
    msg: '长度不合法'
  },
  equality: {
    errCode: 105,
    msg: '不相等'
  },
  isInteger: {
    errCode: 106,
    msg: '必须为整数'
  },
  isFloat: {
    errCode: 107,
    msg: '必须为浮点数'
  },
  numberRange: {
    errCode: 108,
    msg: '数字范围'
  }
}

// Number pattern
const NUMBER_PATTERN = {
  // 非负整数（正整数 + 0）
  POSITIVE_INTEGER_0: new RegExp('^\\d+$'),
  // 正整数
  POSITIVE_INTEGER: new RegExp('^[0-9]*[1-9][0-9]*$'),
  // 非正整数（负整数 + 0）
  NEGATIVE_INTEGER_0: new RegExp('^((-\\d+)|(0+))$'),
  // 负整数
  NEGATIVE_INTEGER: new RegExp('^-[0-9]*[1-9][0-9]*$'),
  // 整数
  INTEGER: new RegExp('^-?\\d+$')
}

const validate = (function () {
  const types = {
    // 非空校验  errCode: 101
    noEmpty (val, params) {
      return !!val
    },
    // 手机号格式校验  errCode: 102
    isPhone (val) {
      const pattern = /^1(3|4|5|7|8)\d{9}$/g
      return pattern.test(val)
    },
    // 邮箱格式校验  errCode: 103
    isEmail (val) {
      const pattern = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z0-9]+[-.])+[A-Za-z]{2,5}$/g
      return pattern.test(val)
    },
    // 值的长度范围校验  errCode: 104
    limitRange (val, params) {
      let range = params['range']
      if (!range) {
        throw new Error('请传入限制长度范围')
      }
      if (typeof (val) !== 'string') {
        throw new Error('验证的值应为string类型')
      }
      let maxCount = 0
      let minCount = 0
      if (typeof range === 'number' || (Array.isArray(range) && range.length === 1 && typeof range[0] === 'number' && range[0] > 0)) {
        maxCount = range
        return val.length <= maxCount
      }
      if (Array.isArray(range)) {
        const flag = range.every(v => {
          return typeof v === 'number' && v >= 0
        })
        if (flag) {
          range = range.slice(0, 2).sort((a, b) => a - b)
          minCount = range[0]
          maxCount = range[1]
          return val.length >= minCount && val.length <= maxCount
        } else {
          throw new Error('范围数组内必须为大于等于0的整数')
        }
      }
      throw new Error('参数格式不正确')
    },
    // 相等校验 errCode 105
    equality (val, params) {
      const compareVal = params['compare']
      if (typeof val === 'string' || typeof val === 'number') {
        return val === compareVal
      }
      console.log(val)
      throw new Error('参数格式不正确')
    },
    // 整数校验
    isInteger (val) {
      return NUMBER_PATTERN['INTEGER'].test(val)
    },
    // 正整数
    isPositiveInteger (val) {
      return NUMBER_PATTERN['isPOSITIVE_INTEGER'].test(val)
    },
    // 负整数
    isNegativeInteger (val) {
      return NUMBER_PATTERN['NEGATIVE_INTEGER'].test(val)
    },
    /**
     * 数字范围校验
     * errCode 109
     *
     * @param {range: [null, 0]} 小于零
     * @param {range: [10, null]} 大于10
     * @param {range: [10, null]} 大于10
     */
    numberRange (val, params) {
      let range = params['range']
      for (let i of range.entries()) {
        console.log(i)
      }
    }
  }
  return function (val, type, params) {
    if (!types[type]) {
      throw new Error('该检测类型不存在')
    }
    if (!types[type](val, params)) {
      return Object.assign({}, instructions[type], params)
    }
    return false
  }
}())

class Detect {
  constructor () {
    this.result = []
  }
  add (val, types, params = {}) {
    if (!Array.isArray(types)) {
      throw new Error('检测类型只能为数组')
    }
    for (let type of types) {
      const errObj = validate(val, type, params)
      if (errObj) {
        this.result.push(errObj)
        break
      }
    }
  }
  getResult () {
    const result = this.result
    if (!result.length) {
      return false
    }
    return result.map(item => {
      switch (item.errCode) {
    case 101:
      return `${item.name}不能为空`
    case 104:
      return `${item.name}的长度应在${typeof item.range === 'number' ? '0~' + item.range : item.range.join('~')}之间`
    case 105:
      return `两次${item.name}输入不一致`
    default:
      return item.msg
    }
  })
  }
}

export {Detect}
