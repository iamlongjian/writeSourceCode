// // 申明构造函数
// function MyPromise(cb) {
//     return 1
// }
// // 给原型添加方法
// MyPromise.prototype.then = function (onResolved, onRejected) {

// }

class MyPromise {
    // 状态合集
    _PENDING = 'pending'
    _FULFILLED = 'fulfilled'
    _REJECTED = 'rejected'
    // 添加promise内置属性
    promiseState = this._PENDING
    promiseResult = null
    // 回调合集，用于异步改变状态
    _callbacks = []
    constructor(executor) {

        // 创建resolve函数
        const resolve = (data) => {
            // * promise的状态只能改一次
            if (this.promiseState !== this._PENDING) return
            // 1. Promise的状态由 pending 转为 resolved 【promiseState】
            this.promiseState = this._FULFILLED
            // 2. 传递结果【promiseResult】
            this.promiseResult = data
            // 3. 异步操作时，需要执行_callback里面的回调
            this._callbacks.length > 0 && this._callbacks.forEach(t => {
                t.onResolved(data)
            })
        }
        // 创建reject函数
        const reject = (data) => {
            // * promise的状态只能改一次
            if (this.promiseState !== this._PENDING) return
            // 1. Promise的状态由 pending 转为 rejected 【promiseState】
            this.promiseState = this._REJECTED
            // 2. 传递结果【promiseResult】
            this.promiseResult = data
            // 3. 异步操作时，需要执行_callback里面的回调
            this._callbacks.length > 0 && this._callbacks.forEach(t => {
                t.onRejected(data)
            })
        }
        // 同步调用传入的函数
        try {
            // promise会吃掉错误，所以使用try catch
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }

    // 实例的then方法,返回一个 promise 对象
    then(onResolved, onRejected) {
        const that = this
        // 根据当前的状态执行对应的回调函数【异步执行】
        return new MyPromise((resolve, reject) => {
            // 封装函数
            function callBack(type) {
                try {
                    // 获取回调函数的执行结果
                    let res = type && type(that.promiseResult)
                    // 判断结果是否为promise
                    if (res instanceof MyPromise) {
                        // 是promise类型的对象
                        res.then(res => {
                            resolve(res)
                        }, err => {
                            reject(err)
                        })
                    } else {
                        resolve(res)
                    }
                } catch (error) {
                    reject(error)
                }
            }
            if (this.promiseState === this._FULFILLED) {
                callBack(onResolved)
            }
            if (this.promiseState === this._REJECTED) {
                callBack(onRejected)
            }
            // 判断pending状态，因为一般使用promise是异步调用的
            if (this.promiseState === this._PENDING) {
                // 保存回调函数
                this._callbacks.push({
                    onResolved: function () {
                        callBack(onResolved)
                    },
                    onRejected: function () {
                        callBack(onRejected)
                    }
                })
            }
        })
    }
}