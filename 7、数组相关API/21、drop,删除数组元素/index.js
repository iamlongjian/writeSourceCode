/**
 * drop
 * params: arr(数组) , num(要删除的个数)
 * 实例: drop([1,3,5,7],2)  ===> [5,7]
 */
function drop(arr, num) {
    return arr.slice(num)
}
console.log(drop([1, 3, 5, 7], 1))  // [ 3, 5, 7 ]



/**
 * dropRight
 * params: arr(数组) , num(要删除的个数)
 * 实例: dropRight([1,3,5,7],2)  ===> [1,3]
 */
function dropRight(arr, num) {
    return arr.slice(-num)
}
console.log(dropRight([1, 3, 5, 7], 1))  // [1]