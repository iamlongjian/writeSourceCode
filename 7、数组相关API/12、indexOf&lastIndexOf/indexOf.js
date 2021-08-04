// 找到第一个符合条件的成员下标，可以接受第二个参数，为开始搜索的位置

Array.prototype.MyIndexOf = function(value,startIndex=0){
  let result = -1
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if(index >= startIndex && value === element){
      result = index 
      break
    }
  }
  return result
}

const arr = [1,2,0]
console.log(arr.indexOf(3))
console.log(arr.MyIndexOf(3))