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
            setTimeout(() => {
                this._callbacks.length > 0 && this._callbacks.forEach(t => {
                    t.onResolved(data)
                })
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
            setTimeout(() => {
                this._callbacks.length > 0 && this._callbacks.forEach(t => {
                    t.onRejected(data)
                })
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
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        if (typeof onResolved !== 'function') {
            onResolved = value => value
        }
        // 根据当前的状态执行对应的回调函数【异步执行】
        return new MyPromise((resolve, reject) => {
            // 封装函数
            function callBack(type) {
                try {
                    // 获取回调函数的执行结果
                    let res = type(that.promiseResult)
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
                setTimeout(callBack(onResolved))
            }
            if (this.promiseState === this._REJECTED) {
                setTimeout(callBack(onRejected))
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

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }

    // Promise.resolve
    /**
     * 如果入参为普通类型，则返回成功的Promise，如果是promise对象，则根据该对象的结果返回promise
     */
    static resolve(value) {
        return new MyPromise((resolve, reject) => {
            if (value instanceof MyPromise) {
                // 是promise
                value.then(res => resolve(res))
                    .catch(err => reject(err))
            } else {
                // 非promise
                resolve(value)
            }
        })
    }

    // Promise.reject
    /**
     * 如果入参为普通类型，则返回成功的Promise，如果是promise对象，则根据该对象的结果返回promise
     */
    static reject(reason) {
        return new MyPromise((resolve, reject) => {
            reject(reason)
        })
    }

    // Promise.all
    /**
     * 用于将多个promise实例，包装成一个promise实例
     * 1. 如果iterator对象的成员不是promise，则会调用Promise.resolve()转换为promise
     * 2. 只有所有成员的状态都为fulfilled,返回的promise实例才会为fulfilled
     * 3. 只要有一个成员是 rejected,则返回的就是rejected状态的promise
     */
    static all(promises) {
        return new MyPromise((resolve, reject) => {
            // 判断是否为iterator对象
            // 如果有非iterator对象成员，则开始Promise.resolve()
            // 开始遍历执行，如果有rejected，则调用 rejectd，反之调用resolved
            // 此时假设传入的是数组，数组中所有成员都是promise对象
            let count = 0 // 记录成功次数
            let resolvedArr = [] //返回成功结果
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(res => {
                    // 成功了
                    count++
                    // 将结果存入数组中，并且保证顺序(使用索引存储)
                    resolvedArr[i] = res
                    if (count === promises.length) {
                        // 修改状态并且返回所有结果的数组
                        resolve(resolvedArr)
                    }
                }).catch(err => {
                    // 失败了
                    reject(err)
                })
            }
        })
    }

    // Promise.race
    /**
     * 用于将多个promise实例，包装成一个promise实例
     * 1. 如果iterator对象的成员不是promise，则会调用Promise.resolve()转换为promise
     * 2. 将那个率先改变状态的promise成员的值，作为返回的promise的值
     */
    static race(promises) {
        return new MyPromise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                // 哪个快就执行哪个，并且将结果返回
                promises[i].then(res => resolve(res))
                    .catch(err => reject(err))
            }
        })
    }
}