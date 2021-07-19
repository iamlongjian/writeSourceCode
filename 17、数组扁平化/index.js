// 使用递归进行数组扁平化
// 1. 使用递归
function flat(arr) {
    if (!Array.isArray(arr)) return
    let result = []
    arr.forEach(item => {
        if (Array.isArray(item)) {
            // 如果有item是数组,则继续递归
            result = result.concat(flat(item))
        } else {
            result = result.concat(item)
        }
    })
    return result
}

const arr = [1, [2, 3, [4, 5, [6, 7]]]]
// console.log(flat(arr));

// 2. 使用flat函数，接受(层数)作为参数
// console.log(arr.flat(3));