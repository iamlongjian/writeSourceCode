// 自定义reduce
/**
 * 特性分析
 * 1. 该函数接受两个参数，第一个为回调函数，第二个为初始值
 * 2. 回调函数接受两个参数，第一个为上一次累加的结果，第二个为下一次循环的item值
 */

Array.prototype.myReduce = function (cb, initVal) {
    // 声明返回值为初始化变量
    let result = initVal
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        // 对返回值修改，每次执行回调，都改变返回值
        result = cb(result, element)
    }
    return result
}


function findLongest(entries) {
    return entries.myReduce(function (longest, entry) {
        return entry.length > longest.length ? entry : longest;
    }, '');
}
console.log(findLongest(['aaa', 'bb', 'c']));  //找出数组中字符串最长的成员
// const arr = [1, 2, 3, 4, 5, 6]
// console.log(arr.myReduce((res, val) => res + val, []));