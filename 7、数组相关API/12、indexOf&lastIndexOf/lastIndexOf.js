// lastIndexOf：方法返回给定元素在数组中最后一次出现的位置，如果没有出现则返回 -1

Array.prototype.myLastIndexOf = function(value){
  // 设置返回值的默认值为-1
  let resIndex = -1
  // 循环时，从后往前循环数组
  for (let index = this.length; index >=0; index--) {
    const element = this[index];
    // 当元素匹配时，返回第一次出现的index，终止for循环
    if(element === value){
      resIndex = index
      break
    }
  }
  return resIndex
}

const arr =[1,2,3,1,2]
console.log(arr.lastIndexOf(1))
console.log(arr.myLastIndexOf(1))