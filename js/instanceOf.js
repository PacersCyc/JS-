function instanceOf(left, right) {
  if (left === null || (typeof left !== 'object' && typeof left !== 'function')) {
    throw new Error('instance must be an object')
  }
  let p = Object.getPrototypeOf(left)
  while(true) {
    if (p === null) {
      return false
    }
    if (p === right.prototype) {
      return true
    }
    p = Object.getPrototypeOf(p)
  }
}

const arr = [1,2,3]
const res1 = instanceOf(arr, Array)
const res2 = instanceOf(arr, Object)
const res3 = instanceOf({}, Array)
console.log(res1, res2, res3)