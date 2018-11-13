1. webpack工作原理

    核心：entry, chunk, loader, plugin
    流程：config、plugin、entry、loader、chunk
    plugins: HMR, ProvidePlugin, CommonsChunkPlugin, ExtractTextWebpackPlugin, UglifyJsPlugin

2. docker工作原理

    VM: group, 系统一部分
    docker: 粒度更小，共用一个操作系统， 通过docker通信

3. react虚拟dom，工作原理

    virtual DOM: 轻量级js对象，通过批处理和Diff算法，操作更改部分的dom

4. 双向绑定工作原理

    脏检查：Angular，每次检查都要watching，小更新太多不适用
    依赖检查：Vue，每次更新都要检查依赖的部分，不适用于大的更新

5. SSL加密过程

    

6. 原型链proto, prototype, construct
    p._proto_ -> Person.Prototype(construct) -> ._proto_ -> Object.prototype(constructor) -> ._proto_ -> null
7. 作用域
