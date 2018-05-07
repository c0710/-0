
// 非空校验
export const required = val => val !== ''

// 最大值
export const max = (val, maxLen = 999999) => val.length <= maxLen

// 最小值
export const min = (val, minLen = 0) => val.length >= minLen

// 手机号码
export const phone = val => /^[1][3,4,5,7,8,9][0-9]{9}$/.test(val)

// 邮箱
export const email = val => /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(val)

// RegExp
export const reg = (val, pattern) => pattern.test(val)
