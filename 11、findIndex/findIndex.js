// 找到第一个符合条件的成员下标，可以接受第二个参数，内部的this

Array.prototype.MyFindIndex = function(cb){
  let result = -1
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result = cb(element,index,this) ? index : -1
    if(result !== -1){
      break
    }
  }
  return result
}

const arr = [1,2,0]
console.log(arr.findIndex(t => t > 2))
console.log(arr.MyFindIndex(t => t > 2))