
// 非空校验
export const required = val => {
  console.log('非空校验')
  return val !== ''
}

// 最大值
export const max = (val, maxLen) => {
  console.log('最大值校验')
  return val.length <= maxLen
}

// 最小值
export const min = (val, minLen) => {
  console.log('最小值校验')
  return val.length >= minLen
}

// 手机号码
export const isPhone = val => {
  console.log('手机号校验')
  return /^[1][3,4,5,7,8,9][0-9]{9}$/.test(val)
}
