// splice()方法用于删除原数组的一部分成员，并可以在删除的位置添加新的数组成员，返回值是被删除的元素。
// 注意，该方法会改变原数组。

// Array.prototype.mySplice = function(start,count,...newItems){
//   // 返回值是被删除的元素
//   let result = []
//   // 思路：先把数组拆开，处理完后，再进行合并
//   const first = this.slice(0,start)
//   const second = this.slice(start)
//   // 根据传入的数字，开始删除元素
//   for (let index = 0; index < count; index++) {
//     second.pop()
//   }
//   // 合并处理后的数组
//   this = first.concat(second.concat(newItems))
//   return result
// }

const arr = [1,2,3]
arr.splice(0,1,4,5,6)
// arr.mySplice(0,1,4,5,6)

console.log(arr)