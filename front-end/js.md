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

    外部调用内部函数变量，通常用函数返回

9. this

    运行时基于执行环境绑定， 全局函数(this=window)，否则this=调用对象

10. 跨域
11. JS继承