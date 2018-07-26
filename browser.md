# V8 GC
1. 新生代（存活时间短）
From, To.  占满-> GC启动-> 存活对象移动到空闲

2. 老生代（存活时间长）
新生代经历过算法后移到老生代
标记：存活对象
清除: 未标记对象
碎片压缩

# 事件机制
1. 三阶段
document, 事件，注册
    1. doc -> event 遇到注册触发
    2. 传播event时触发注册
    3. event -> doc 遇到注册触发

2. 注册事件
addEventListener

3. 事件代理
不需要给子节点注销事件

# 跨域
1. JSONP： 利用<script>没有跨域限制漏洞，提供回调函数

2. CORS 通信
服务端设置Access-Control-Allow-Origin

3. document.domain

4. postMessage

# Event loop
JS 队列， 异步代码移到不同Task，执行完队列执行异步Task
1. microtask & macrotask (ES6: jobs & task)
microtask: process.nextTick, promise, Objectobserve
macrotask: script, setTimeout, UI rendering

2. 顺序
    1. script
    2. 队列栈空 -> microtask
    3. macrotask
DOM操作放入微任务

# NodeJS的Event Loop

# 存储
1. Cookie           携带在header，影响性能
    value加密，http-only（防止XSS)，secure(只在HTTPS请求)，same-site（不能跨域，防止CSRF)
2. LocalStorage     手动清除
3. sessionStorage   页面关闭清除
4. Service Worker（代理）
    用来缓存文件，提高首屏速度

# 渲染机制
    1. 处理HTML构建DOM
        问题：遇到script标签暂停DOM
        解决：不应首屏加载JS
    2. 处理CSS构建CSSDOM
        问题：耗性能，阻塞渲染，暂停DOM
        解决：减少过度层叠
    3. 合并DOM和CSSDOM
    4. 布局
    5. 调用GPU绘制

1. Load & DOMContentLoad
    1. Load: DOM, JS, CSS加载完
    2. DOMContentLoad: HTML完全加载解析

2. 图层
    频繁渲染，生成新图层，过多不好
    1. translate3d
    2. will-change
    3. video, iframe
    4. opacity
    5. position:fixed

3. 重绘和回流
    1. 重绘(repaint):   改外观
    2. 回流(reflow):    改布局、外观
    
    影响性能操作
    1. 改变window大小
    2. 改变字体
    3. 增删样式
    4. 盒模型
    5. 定位、浮动

    与Event Loop
    1. 执行完microtask,判断dom更新
    2. 判断resize&scroll
    3. 判断media query
    4. 更新动画发送事件
    5. 判断全屏操作事件
    6. 执行一些回调事件
    7. 更新界面

    如何减少
    1. 使用translate
    2. visibility
    3. 不要table布局
    4. 动画：requestAnimationFrame
    5. CSS: 避免DOM过深
    6. 使用图层
    