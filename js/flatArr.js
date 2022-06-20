/**
 * 非递归实现数组扁平化
 */
function flatten1(arr) {
  // 逐层展开
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

/**
 * 利用JSON和正则处理
 */
function flatten2(arr) {
  let str = JSON.stringify(arr)
  str = str.replace(/(\[|\])/g, '')
  str = '[' + str + ']'
  return JSON.parse(str)
}

const arr1 = [1, [2, [3, [4, 5]]]]
const res1 = flatten1(arr1)
console.log(res1)

const arr2 = [1, [2, [3, [6, 9]]]]
const res2 = flatten2(arr2)
console.log(res2)