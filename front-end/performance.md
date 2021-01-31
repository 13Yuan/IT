# 网络
1. DNS预解析
通过预解析，优化DNS解析消耗的时间

2. 缓存
浏览器缓存
    1. 强缓存（缓存期间不再请求）
    200
    Cache-Control, Expires
    2. 协商缓存
    304
    Last-Modified
        发送服务端，查看是否更新
    ETag
        发送服务端，查看是否有变动
策略
    不缓存资源：cache-control:no-store
    频繁变动资源：cache-control: no-cache + ETag
    代码文件：cache-control:max-age=31536000 + ETag

3. HTTP2.0
二进制、多路复用、服务器推送，报头压缩
http2.0解决：
    1. 连接复用
    2. 包头压缩
    3. 更安全
优点：
    1. 服务器只有一个连接
    2. 加速TLS交付
    3. 简化web应用
    4. 更安全
不足：
    1. 单连接开销大
    2. 需要SSL
    3. 抛弃原有针对http1.1的优化
    4. 下载大文件不利，不需要TLS
    5. 浏览器兼容问题

4. 预加载
    <link rel="preload" href="">
    降低首屏时间，兼容性不太好

5. 预渲染
    prerender
    预先后台渲染，确保用户100%后打开

# 优化渲染
对于代码层优化
1. 懒执行
    逻辑推迟到使用时计算(通过定时器调用唤醒)
    用于首屏

2. 懒加载
    延后加载不关键资源，如图片src

# 文件优化
1. 图片优化
    减少像素点等
    优化：
        1. 不用图片，用css
        2. CDN加载对应大小图片
        3. 小图用base64模式
        4. 多图合成大图
        5. 图片格式：WebP, SVG, JPEG
2. 其他文件优化
    1. css放入head
    2. 服务端开启文件压缩功能
    3. script放到body底部，defer, async（无任何以来的js)
    4. js阻塞：webworker

3. CDN
    静态资源用CDN加载，多个CDN域名，相同主站

# 其他
1. webpack优化
    1. production模式
    2. ES6 tree shaking移除未使用代码
    3. 小图base64写入文件
    4. 路由拆分代码，按需加载
    5. 打包出文件hash，实现浏览器缓存文件
2. 监控
    代码错误：
        1. window.onerror
        2. Promise 使用catch, Async\Await使用 try catch

# PS
    一次性渲染几十万条数据，不卡顿
    通过requestAnimationFrame, 插入不造成回流


1. 减少http请求（或http2)
    压缩文件，多图合并
2. 减少重排
    （减少布局改变，如窗口大小，字体大小，内容改变，style属性改变）
    css, animation, flex grid
3. 减少DOM操作
4. css前，body中，js后
5. CDN加速
    webpack external抽离共用的大文件，引用外部压缩后es5文件
6. 精简js和css
    webpack shrink(移除注释，额外空格，标识符替换)
7. 压缩图片
8. 注意cookie大小
    减少不必要的cookie
9. cache
    ETag, expires

# react

利用 Performance 进行通用性能分析，利用 React Profiler 进行 React 定制性能分析

1. DevTool Profiler / React.Profiler API(需要埋点损耗性能)
2. Tracing API
3. DevTool Performance
    Puppeteer模拟page.click, 利用page.tracing记录性能变化，上传到devtool performace
    1. FPS: 每秒帧数
    2. CPU: CPU消耗
    3. NET: 网络消耗
    4. HEAP: 内存水位。借助持续监控上报，分析

    Timing:
    1. FP: First Paint第一次绘制
    2. FCP：First Content Paint 第一次内容绘制
    3. LCP：Largest Content Paint 最大内容绘制
    4. DCL: DOM内容加载完毕
