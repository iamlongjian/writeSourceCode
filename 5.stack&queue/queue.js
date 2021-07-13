// 使用数组实现队列结构
/**
 * 队列特点
 * 1. 先进先出，后进后出
 * 2. 使用 入队列push,出队列shift
 */
function queueCtrl(){
  const arr = []
  arr.push('队列成员1')
  arr.push('队列成员2')
  arr.push('队列成员3')

  while(arr.length){
    const item = arr[0]
    console.log(item+' 出列！')
    arr.shift()
  }
  console.log(arr)
}
queueCtrl()