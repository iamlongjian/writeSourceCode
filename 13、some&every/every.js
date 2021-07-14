// 当所有成员的执行结果返回都为true，every的结果才返回true。

Array.prototype.myEvery = function(cb){
  // 初始值为true
  let result = true
  // 注意：对于空数组，则直接返回true
  if(this.length === 0){
    return true
  }
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    // 执行结果为false，则表示不符合条件，修改result的状态，且中断for循环执行
    if(!cb(element,index,this)){
      result = false
      break
    }
  }
  return result
}

const arr = [1,2,3]
console.log(arr.every(t =>t < 5))
console.log(arr.myEvery(t =>t < 5))