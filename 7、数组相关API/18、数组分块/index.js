// 语法:chunk
// 功能：将数组拆分成多个size长度的区块，每个区块组成数组，整体组成一个二维数组
// 用法: 第一个参数为原数组，第二个为size，如果size大于数组长度则返回原数组
/**
 * 效果如下
 * 如：[1,3,4,5,2,6] 调用 chunk(arr,3) => [[1,3,4],[5,2,6]]
 * 如：[1,3,4,5,2,6] 调用 chunk(arr,2) => [[1,3],[4,5],[2,6]]
 */

Array.prototype.chunk = function (size = 1) {
    if (size >= this.length) return this
    let result = []
    let tmp = [] // 暂存集合
    // 遍历
    this.forEach(item => {
        // 判断tmp元素的长度是否为0
        if (tmp.length === 0) {
            // 将tmp放入result
            result.push(tmp)
        }

        // 此时tem已经在result中了
        tmp.push(item)

        // 当tmp满的时候，让其变成空数组，下一次循环又会被放入result中
        if (tmp.length === size) {
            tmp = []
        }
    });

    return result
}

const arr = [1, 3, 4, 5, 2, 6]
console.log(arr.chunk(4));
