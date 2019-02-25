# CDN
1. CDN缓存
2. 突破浏览器并发限制
3. Cookieless 节省带块
4. 安全，防止窃取cookie （域名必须是第三方域名）
 
# 减少页面加载时间
1. 优化图片
2. 压缩合并css
3. 减少http请求

# js性能
jsPerf

# 3C标准
规范浏览器开发，规范开发，尽量一致

# FOUC(无样式内容闪烁)
IE先加载DOM, 再倒入外部css文件，加入javascript标签

# doctype
strict
标准模式，兼容模式 
    通过document对象的compatMode判断

# 多语言
数据库驱动

# html5
<nav> <header> <section> <footer>

# cookies, sessionStorage, localStorage
在浏览器端存储数据
sessionStorage跟当前单个浏览器有关

# reset CSS
使默认浏览器样式统一

# 盒子模型
margin, border, padding, content
box-sizing: 高宽不包含border和padding

# css框架
flexbox, grid

<js
# js事件代理
避免事件作用到子元素，解决事件冒泡

# this
指向函数运行时的对象
call, apply指谁就谁，其他谁调用就是谁

# null 和undefined
1. !obj 两者都判断
2. typeof判断

# 闭包
读取函数内部变量，让变量值始终在内存中

# 匿名函数
fun(){}()

# JSONP
跨域调用，容易被篡改，只用于受信任双方。
Ajax不跨域

# 变量声明提升
定义变量会先声明变量到函数顶部，赋值在原来位置

# 同源策略
规定相同的域

# strict
1. 消除不合理
2. 消除不安全
3. 提高编译速度
