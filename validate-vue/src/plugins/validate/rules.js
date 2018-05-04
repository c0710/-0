
// 非空校验
export const required = val => {
  console.log('非空校验')
  return val !== ''
}

// 最大值
export const max = (val, maxLen = 999999) => {
  console.log('最大值校验'+maxLen)
  return val.length <= maxLen
}

// 最小值
export const min = (val, minLen = 0) => {
  console.log('最小值校验'+minLen)
  return val.length >= minLen
}

// 手机号码
export const isPhone = val => {
  console.log('手机号校验')
  return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(val)
}
