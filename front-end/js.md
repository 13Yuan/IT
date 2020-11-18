3. 双向绑定工作原理

    脏检查：Angular，每次检查都要watching，小更新太多不适用
    依赖检查：Vue，每次更新都要检查依赖的部分，不适用于大的更新

5. SSL加密过程

    C(随机数1、所支持加密算法) -> S(选中加密组合、随机数证书) -> C(公钥加密后密钥) -> 发送消息

6. 原型链proto, prototype, construct

    访问对象属性，往上找父级prototype
    p._proto_ -> Person.Prototype(construct) -> ._proto_ -> Object.prototype(constructor) -> ._proto_ -> null

7. 作用域

    最外层函数和变量拥有全局作用域。函数作用域

8. 作用域链

    访问变量时，js会从当前作用域向上查找直到全局作用域

9. 闭包
    自带执行上下文环境的函数
    外部调用内部函数变量，通常用函数返回

9. this

    运行时基于执行环境绑定， 全局函数(this=window)，否则this=调用对象

10. 跨域

# new

1. 面向对象
    a. 创建对象
        i. 原型方法 Property + new
        ii. Object.create
    b. 继承
        ii. 原型链 
            Person.Property = Animal.Property; Person.Property.constructor = 'Person'
        ii. 构造器
            function Person(){  Animal.call(this) }
    c. 多重继承
        i. 属性复制
        for(prop in Animal.property) {Person.Prototype[prop] = Animal.prototype[prop]}
2. 作用域
    最外层函数和变量拥有全局作用域。函数作用域
3. This
    运行时基于执行环境绑定， 全局函数(this=window)，否则this=调用对象
4. apply, call, bind
    更改当前对象，apply\call直接执行，bind绑定
5. caller, callee, arguments
6. 闭包
    父子函数相互引用

7. Array 常用
    split, push pop, slice, concat, sort, map, filter
8. string 常用
    indexOf, Split, Slice, substr
    