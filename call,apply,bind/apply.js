Function.prototype.myApply = function(context){
  /**
   * 1. 改变this指向，如果没有传入context则为window
   * 2. 将参数传入到函数中
   */
  if(typeof this !== 'function'){
    throw new TypeError('不是函数')
  }
  context = context || window
  context.fn = this
  const args = arguments[1]
  const result = args ? context.fn(...args) : context.fn() // 处理参数
  delete context.fn
  return result
}