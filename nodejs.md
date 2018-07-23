# Nodejs

## Basic
JS脚本语言需要解析器，浏览器（操作dom)和nodejs(操作磁盘和搭建httpserver)
优点：
1. 事件机制和io特性 -> 高性能web服务器
2. 模块：
    1. require  加载使用别的模块对象
    2. export   导出当前模块对象
    3. module   访问当前模块的信息，用于替换当前模块的导出对象
3. AMD, CMD, CommonJS
---针对浏览器
AMD: RequireJS, 预加载，执行加载对应依赖，执行顺序困扰
CMD: SeaJS, 懒加载，遇到require才执行
---针对服务端
CommonJS: NodeJS

## Deploy
1. NODE_PATH
指定额外搜索路径:(linux),;(windows)

## File
1. 内置fs
fs.readFileSync, fs.writeFileSync 大文件：createReadStream, createWriteStream, pipe
2. 对应api
Buffer(数据块), Stream(数据流), fs(文件系统), path(路径)
3. Encoding
BOM移除等

## network
1. http
http.createserver
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
    2. child_process（创建控制子进程）.spawn
    3. cluster，解决利用多核cpu问题
3. 应用
process.exit(1)
process.stdout.write(), stdin, stderr

## async
1. callback
2. domain js运行环境
process.on('uncaughtException'),
domain.create(), d.on('error'), d.run(() => {})

# IV

## node全局对象
process, exports, console, Buffer
1. process.stdout stderr, on, env, exit

2. 定时
settimeout, settimeinterval, setImmediate, process.NextTick

3. event loop
    1. 先进先出
    2. event, setImmediate当前队列立即执行
    3. settimeout/interval下个队列
    4. process.NextTick 下次遍历
    



