// 控制事件的执行频率
function throttle(fn, delay) {
    // 在规定时间内重复触发函数，则只执行第一次
    // 1. 定义开始时间
    let start = 0

    // 2. 返回值为函数
    return function (e) {
        // 3. 获取当前时间
        let now = Date.now()
        // 4. 如果当前时间 减去 开始时间，大于设置的间隔时间，就执行函数
        if (now - start >= delay) {
            fn.call(this, e)
            start = now
        }
    }
}