function myCall(context){
  // 1. 如果没有传递context 则 this 指向 window
  // 2. 改变了this 指向，让传入的对象可以执行该函数并且能接受参数
  if(typeof this !== 'function'){
    throw new TypeError('Error')
  }
  context = context || window
  context.fn = this
  const args = [...arguments].slice(1) // 把context对象给去除，取到后面所有的参数
  const result = context.fn(...args) // 执行函数，并且把参数传入
  delete context.fn // 删除fn，避免影响到源对象
  return result
}

Function.prototype.myCall = myCall