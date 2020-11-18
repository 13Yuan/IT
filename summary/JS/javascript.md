# 运行时
## 数据结构
### 类型
undefined, null, string
1. null定义了但为空, undefined未定义,非关键字，用void(0)
2. symbol: 非字符串key集合
3. 类型转换，装箱拆箱 +"111", Math函数
### 实例
1. 面向对象
    js把状态和行为抽象为属性，可以运行时进行修改. 对象类似基于索引结构的属性集合，通过keyvalue查找
    数据属性（属性）： value, writable, enumerable, configurable,
    访问器属性： getter, setter, enumerable, configurable
    getOwnPropertyDescriptor, defineProperty
2. 对象分类
    1. 宿主对象：浏览器document
    2. 内置对象：
        1. 固有对象，js创建自带对象
        2. 原生对象，基本类型，array, error, arraybuffer
        3. 普通对象
            1. 函数对象，具有call私有字段对象
            2. 构造器对象： 具有constract私有字段对象
                顺序：1. object.prototype原型创建对象。 2. 执行call， 3. call返回当前对象
    创建对象
        1. new, var a = {}, Object.create(), Object.assign, Object("abc")
3. 宏观和微观任务
    顺序
    1. 非异步代码 -> 微观代码 -> 宏观代码 -> 下个宏任务
4. 闭包和上下文
    闭包：环境+表达式。函数+this就是闭包
        之前理解： 访问应被收回内容超空间，但函数存在引用不可回收，形成闭包
5. 函数类型
    1. function a()
    2. const a = () =>{}
    3. class A {}
    4. function* a()
    5. class A {constructor()}
    this: 运行时基于执行环境绑定，
    绑定： 1. new： 新创建对象。 2. call：指定对象。 3. strict模式，undefined否则全局对象
6. try catch
    JS语句执行原理：Completion Record类型：穿透、消费
## 执行过程（算法）
### 事件循环
### 微服务执行
### 函数执行
### 语句级的执行

# 文法
## 词法
## 语法

# 语义
