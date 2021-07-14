// find返回第一个符合条件的成员
Array.prototype.myFind = function(cb){
  let result = null
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    result = cb(element,index,this) && element
    if(result){
      break
    }
  }
  return result
}

const arr = [1,2,3]
console.log(arr.myFind(t=>t<5))