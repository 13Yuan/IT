# JS

1. 类型判断
    undefined == null -> true
    TypeScript & Flow

2. 作用域
    https://book.douban.com/subject/26351021/

3. 引用传递

4. 内存释放
    V8 GC
    值类型：在闭包，等闭包没有引用才回收，一般新生代切换时候回收
    引用类型：没有引用后，GC回收

    # V8 GC
    新生代、老生代
    新生代： From -> To（满）-> 快速GC启动(scavenge)
        --> 2次快速GC
    老生代
        阈值 -> 主GC启动

    标记：存活对象
    清除: 未标记对象
    碎片压缩

        

    内存泄漏
    https://zhuanlan.zhihu.com/p/25736931

5. ES6特性
    http://es6.ruanyifeng.com/
    let 与 var
    箭头函数与fucntion
    set map
    私有化问题与symbol