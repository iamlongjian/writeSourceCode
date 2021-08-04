// 以下两个方法改变原数组

// pull 删除原数组中与value相同的元素，返回所有删除元素的数组，_pull([1,2,3],2,3,4) => [2,3]

// pullAll 功能如上，只是参数变为数组 _pullAll([1,2,3],[2,3,4]) => [2,3]

const pull = function (arr, ...args) {
    const res = [] //存放结果
    for (let i = 0; i < arr.length; i++) {
        if (args.includes(arr[i])) {
            res.push(arr[i])  // 将当前将要删除的元素 推入结果数组
            arr.splice(i, 1) // 删除当前元素
            i-- // 下标要往前进一位
        }

    }
    return res
}

// const arr = [1, 2, 3]
// console.log(pull(arr, 2, 3, 4));
// console.log(arr);

const pullAll = function (arr, args) {
    return pull(arr, ...args)
}
const arr = [1, 2, 3]
console.log(pullAll(arr, [2, 3, 4]));
console.log(arr);