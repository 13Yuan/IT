# 原型链
访问对象属性，往上找父级prototype
p._proto_ -> Person.Prototype(construct) -> ._proto_ -> Object.prototype(constructor) -> ._proto_ -> null

原型链就是链表，this 其实就是链表当前指向的那个原型，bind call apply就是改变链表 next 指向。

# 继承实现
1. 原型链
Person.Property = Animal.Property Person.Property.constructor = 'Person'
2. 构造器
function Person(){  Animal.call(this) }
3. 多重继承、属性复制
for in

# 数据类型
undefined, null, string
1. null定义了但为空, undefined未定义,非关键字，用void(0)
2. symbol: 非字符串key集合
3. 类型转换，装箱拆箱 +"111", Math函数

# new过程
1. prototype属性为原型，创建新对象。child = object.create(Parent.Prototype)
2. 将this传递给构造器执行。 let result = Parent.apply(child, parent);
3. 构造器没有返回对象，返回新对象。

# this指向
this: 运行时基于执行环境绑定，
绑定： 1. new： 新创建对象。 2. call：指定对象。 3. strict模式，undefined否则全局对象

# bind实现
通过apply

# 闭包
闭包：环境+表达式。函数+this就是闭包
之前理解： 访问应被收回内容超空间，但函数存在引用不可回收，形成闭包

# 事件循环
浏览器线程：1。主线程（JS执行和渲染）2. 工作线程（处理io和事件读取）
任务队列：同步=> 主线程执行。异步-> 通过任务队列FIFO协调

事件循环：主线程任务执行完，执行任务队列任务。不断循环
一个循环为一个tick，选择最先进入队列的任务（先进先出）

顺序
    1. tick：非异步代码 -> 微任务 -> 宏任务 （循环）

宏任务： script, setTiemout, settimeInterval, IO, UI交互， SetImmediate
微任务： Promise, process.nextTick
async\await: 遇到await会跳出当前函数，将await后面代码放入微任务队列

# 类型判断
一般用
1. typeof. 但对数组、日期等，只返回顶端object类型
2. toString Object.prototype.toString.call('')
3. constructor
4. instanceOf，A是否为B的实例关系

# V8 GC
新生代：From-to -> 快速GC启动(scavenge)。清空from，to和from对调
        --> 2次快速GC后，进入老生代
老生代: mark-swap
    标记：存活对象
    清除: 未标记对象
    碎片压缩

# 节流和反抖
如scroll,resize，限制函数频率
反抖：一定时间内延时触发事件，只触发最后一次
节流：每隔一段事件执行一次函数（时间戳和定时器）

# promise.all 异常处理
每个promise关联一个错误的处理函数.
```js
Promise.all(
    [a, b].map((p) => {
        return p.catch(error => error)
    })
)
    .then(res => {
        console.log(res, 'res')
    })
    .catch(error => {
        console.log(error, 'error')
    })
```

# class实现
构造函数 + 原型链
```js
var hello = () =>{
    const Hello = x => this.x = x;
    Hello.prototype.greet = () => {};
    return Hello;
}
```

# 手写promise
1. new Promise
三个状态，pending\fulfilled\reject
```js
function Prmose(excutor) {
    let self = this;
    self.status = "pending"
    self.value = null;
    self.reason = null;
    const resolve = value => {
        if(status ==='pending' ) self.value = value; self.status = 'fulfilled'
    }
    const reject = reason => {
        if(status ==='pending' ) self.reason = reason; self.status = 'rejected'
    }
    try {excutor(resolve, reject)} catch{reject(err)}
}
```
2. then函数
接收onfulfilled和onrejected函数，根据状态执行对应函数
```js
Promise.prototype.then = ((onFulfilled, onRejected) => {
let self = this
  if (self.status === 'fulfilled') {
    return new Promise(resolve, reject) {onFulfilled(self.value)}
  }
  if (self.status === 'rejected') {
    return new Promise(resolve, reject) {onRejected(self.reason)}
}
```
3. 异步情况
发布订阅模式。1. then函数 pending状态push,fulfilled和onreject.2. resolve和reject函数遍历执行对应任务
```js
self.onRejectedCallbacks.forEach(item => item(self.reason))

if (self.status === 'pending') {
    return new Promise((resolve, reject) => {
      self.onFulfilledCallbacks.push(onFulfilled)
      self.onRejectedCallbacks.push(onRejected)
    })
  }

```

4. 链式调用
```js
 return new Promise((resolve, reject) => {
      try {
        let x = onFulfilled(self.value)
        if (x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch (err) {
        reject(err)
      }
    })

```
