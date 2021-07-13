// 使用数组实现栈结构
/**
 * 特点
 * 1. 后进先出
 * 2. 因此只需要用到 入栈push(数组后添加元素),出栈pop(数组后删除元素)
 */

// 实现一个入栈出栈
function stackCtrl(){
  const arr = []
  arr.push('最底下') //入栈
  arr.push('中间') //入栈
  arr.push('最上面')//入栈

  while(arr.length){
    const item = arr[arr.length-1]
    console.log(item+' 出栈咯')
    arr.pop() //出栈
  }
}
stackCtrl()