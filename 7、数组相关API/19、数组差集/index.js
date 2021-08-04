// 找到arr1中不存在与arr2的元素

const diff = function (arr1, arr2) {
    return arr1.filter(item => !arr2.includes(item))
}

const arr = [1, 2, 3]
const arr2 = [2]

console.log(diff(arr, arr2));