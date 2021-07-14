// 只要有一个成员的返回值是true，则整个some方法返回值就是true，否则返回false

Array.prototype.mySome = function(cb){
  // 初始值为false
  let result = false
  // 注意：对于空数组，则直接返回false
  if(this.length === 0){
    return false
  }
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    // 执行结果为true，则表示符合条件，修改result的状态，且中断for循环执行
    if(cb(element,index,this)){
      result = true
      break
    }
  }
  return result
}

const arr = [1,2,3]
console.log(arr.some(t =>t === 2))
console.log(arr.mySome(t =>t === 2))