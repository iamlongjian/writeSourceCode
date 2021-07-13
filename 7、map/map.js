// 手写数组的map方法
/**
 * 分析
 * 1. 返回值为一个数组
 * 2. 接受的第一个参数是一个回调函数，该回调函数有三个参数 1，成员 2，索引 3，原数组
 */

Array.prototype.mymap = function (cb) {
    let result = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        result.push(cb(element, index, this))
    }
    return result
}
const arr = [1, 2]
const res = arr.mymap((item, index, arr) => {
    console.log(arr);
    return item * index
})
console.log(res);