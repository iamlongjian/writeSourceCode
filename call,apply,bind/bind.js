Function.prototype.myBind = function(context){
  /**
   * 1. 改变this的指向，如果没有传入context则指向window
   * 2. 返回一个函数
   */

  if(typeof this !== 'function'){
    throw new TypeError('非函数')
  }
  // context = context || window
  const _this = this
  const args = [...arguments].slice(1)
  // 返回一个函数
  return function F(){
    // 因为返回一个函数，可以new调用，所以需要判断
    if(this instanceof F){
      return new _this(...args,...arguments)
    }
    return _this.apply(context,args.concat(...arguments))
  }
}