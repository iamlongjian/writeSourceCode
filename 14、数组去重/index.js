// 编写一个去重函数，实现数组的去重
const arr = [{ a: 1 }, 2, { a: 1 }, 1, 4, 53, 3, 5, 4]
// 实现一：利用Set
// function unique(arr) {
//     return [...new Set(arr)]
// }

// 实现二：利用Map
// function unique(arr) {
//     let map = new Map()
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         map.set(element, index)
//     }
//     return [...map.keys()]
// }

// 实现三：forEach + indexOf（双重循环，性能差）
// function unique(arr) {
//     const res = []
//     arr.forEach(item => {
//         if (res.indexOf(item) === -1) {
//             res.push(item)
//         }
//     });
//     return res
// }

console.log(unique(arr));