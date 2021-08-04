// 将两个数组合并为一个数组
Array.prototype.myConcat = function (...args) {
    const result = [...this]
    args.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    });
    return result
}

const arr1 = [1, 2, 3]
const arr2 = [2, 3, 5]
console.log(arr1.myConcat(arr2, 3, 4));