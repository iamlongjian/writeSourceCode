// 数组切片
const arr = [1, 2, 3]

Array.prototype.mySlice = function (startIndex = 0, endIndex) {

    const result = []
    // 数组为空则返回空数组
    if (this.length === 0) {
        return result
    }
    if (startIndex >= arr.length) {
        // 如果开始位置大于数组长度
        return result
    }
    // 如果没有传递最后一个参数，则默认slice到最后
    endIndex = endIndex || this.length
    if (startIndex > endIndex) {
        // 如果开始位置大于结束位置，则把结束的index设置为数组长度，确保可以截取到
        endIndex = this.length
    }
    for (let index = startIndex; index < endIndex; index++) {
        const element = this[index];
        result.push(element)
    }
    return result
}
console.log(arr.mySlice(1, 2));
