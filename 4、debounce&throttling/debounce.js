// 防抖实现
/**
 * 如果在一定时间内重复触发，则只会执行最后一次。
 */
function debounce(fn, delay) {
    let tid = null
    return function (e) {
        console.log(tid);
        if (tid) {
            // 表示有定时器正在运行
            clearTimeout(tid) //清除定时器，则不会运行内部的函数
        }
        tid = setTimeout(() => {
            fn.call(this, e)
            tid = null
        }, delay);
    }
}