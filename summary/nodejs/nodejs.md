# Nodejs

## Basic
JS脚本语言需要解析器，浏览器（操作dom)和nodejs(操作磁盘和搭建httpserver)<br />
优点：
1. 事件机制和io特性 -> 高性能web服务器
2. 模块：
    1. require  加载使用别的模块对象
    2. export   导出当前模块对象
    3. module   访问当前模块的信息，用于替换当前模块的导出对象
3. AMD, CMD, CommonJS
---针对浏览器<br />
AMD: RequireJS, 预加载，执行加载对应依赖，执行顺序困扰<br />
CMD: SeaJS, 懒加载，遇到require才执行<br />
---针对服务端<br />
CommonJS: NodeJS

## 核心模块
EventEmitter, Stream, FS, Net, 全局对象

## Deploy
1. NODE_PATH
指定额外搜索路径:(linux),;(windows)

## Stream
基于eventEmitter数据管理
好处：非阻塞处理，提高效率，节省内存
用途：文件，网络，数据转换，音视频
错误处理： error事件监听
常用：
    readable, writable, duplex

## File
1. 内置fs
操作类型：POSIX, Stream, 同步， 异步
fs.readFileSync, fs.writeFileSync 大文件：createReadStream, createWriteStream, pipe
fs.Watch实时监听文件，不适用网络文件， fs.WatchFile
2. 对应api
Buffer(数据块), Stream(数据流), fs(文件系统), path(路径)
3. Encoding
BOM移除等

## network
1. http
http.createserver<br />
linux下监听1024需要root权限，监听80或443需要sudo权限
2. apis
    1. http 
    2. https，额外处理ssl(key,cert)
    3. url.parse, resolve
    4. querystring.stringify
    5. zlib.gzip gunzip, content-encoding: gzip
    6. net.createserver connect, socket

## Process
1. 另起子进程调用终端命令
2. api
    1. process(全局),nodejs自身进程信息
    2. child_process（创建控制子进程)
        用于阻塞访问和高CPU计算
        exec, execFile, spawn(流式与OS交互), fork(node app间交互)
    3. cluster，解决利用多核cpu问题
3. 应用
process.exit(1)<br />
process.stdout.write(), stdin, stderr
4. js.file改成command执行文件
    加入 #! /usr/bin/env，加权限

## async
1. callback
2. domain js运行环境
process.on('uncaughtException'),
domain.create(), d.on('error'), d.run(() => {})

# IV

## node全局对象
process, exports, console, Buffer
1. process.stdout stderr, on, env, exit
2. console.log, info, error, warning, table 

3. 定时
settimeout, settimeinterval, setImmediate, process.NextTick

4. event loop
    1. 先进先出
    2. event, setImmediate当前队列立即执行
    3. settimeout/interval下个队列
    4. process.NextTick 下次遍历

    timers (settimeout/interval) -> 
    pending callbacks (下个循环迭代的io回调) -> 
    idle, prepare（系统libuv调用 -> 
    poll（轮询） -> 
    check（setImmediater回调 -> 
    close callbacks（关闭回调函数on("close")

    异步非阻塞io
    nodejs -> (JS) -> libuv -> (读取事件) -> 事件队列
                            -> (发起io，调用回调方法) -> 系统线程池
                            -> 轮询
    返回结果       <-        <- 调用回调
    
5. Buffer
    处理二进制数据，如图片，map3, 数据库文件，支持编码

6. EventEmitter
    观察者模式，on ,emit, error
    NewListener用于事件机制管理，当on添加，则触发

## 高级
1. 自动重启
    runit, forever, nohup npm start &
2. 多核
    一个cpu一个node实例
3. 设置内存上限
    --max-old-space-size
4. 崩溃点
    node --prof看函数调用
    memwatch, heapdump对比内存快照
5. 防止崩溃
    1. try, catch
    2. eventEmitter error
    3. domain 统一处理错误
    4. eslint
    5. mocha进行UT
6. 调试
    node --debug app.js或者node-inspector

## 常用库

## webpack与hapijs
1. hapijs抽象了NodeJS API，比如表单，error handle。 express需要对应中间件body parser
2. hapiJS 插件加配置形式，更多的配置，比如路由、身份验证、日志等。更适合大型应用


### 面试题
1. module 就是对象
2. require机制
    计算路径、判断缓存、加载模块、输出exports
3. __dirname => module.load传递来的
4. exports.xxx = 和module.exports = {}区别。 后者更灵活，可以赋值函数和数组
5. 异步io
    ticker 循环检查事件（观察者模式）
    流程：