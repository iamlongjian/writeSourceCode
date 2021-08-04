// 过滤出数组中符合条件的成员
Array.prototype.myFilter = function (cb, thisObj) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        // 如果回调的执行结果为真，则压如到返回值中
        cb(element, index, this) && result.push(element)
    }
    return result
}

const arr = [1, 2, { a: 1 }, 4, 5]
console.log(arr.myFilter(t => t.a === 1));