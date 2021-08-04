// 该函数用于重现创建实例对象的步骤

function newInstanceOf(Fn, ...args) {
    // 1. 创建一个新对象
    const obj = {}
    // 2. 修改函数内部this 指向新对象并且执行
    const result = Fn.call(obj, ...args)
    // 修改对象的原型对象
    obj.__proto__ = Fn.prototype
    // 3. 返回新对象
    return result instanceof Object ? result : obj
}