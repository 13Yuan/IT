# Web API Security

## 威胁
1. 注入
    sql注入
        1. 封装api参数
        2. 特殊字符转义
        3. 白名单数据
    LDAP注入
    OS命令注入
2. 无效认证和session管理方式
    使用广泛使用的认证控件和session管理模块
3. XSS
    <script>注入
    1. 输入数据进行转义
    2. 白名单控制输入
    3. 富文本使用anti-xss library

## 安全机制
1. 认证和授权

# http
1. 基于tcp/ip应用层协议
    Request
        Get / HTTP/1.0
        ....Client Info...
    Response
        HTTP/1.0 200 OK
        Content-Type: MIME type
        Content-Length
        Expirtes
        Last-Modified
        Server: Apache 0.84

        <html>
2. http 1.1
    1. 持久化连接，最大6个连接
    2. pipeline，同一个tcp发送多个请求
    3. content-length区分包的来源
    4. 分块传输Transfer-Encoding: Chunked 16机制数值表示长度
    缺点：
        按次序进行信，需等待上个结果
    解决：
        减少tcp请求数，多开持久连接
3. http2
    彻底的二进制协议：头信息帧和数据帧
    1. 无序
    2. 多工
    3. 数据流，ID, 可取消无需关闭tcp，优先级
    4. 头信息压缩 gzip
    5. 支持服务端推送静态资源

# http header
1. Content-Type MIME type
2. Transfer-Encoding: chunked & Content-Length 二选一
3. gzip
    accpet-encoding: gzip
    content-encoding: gzip
4. 代理缓存 Vary
    vary: x-requested-with(ajax),
5. 缓存
    expires:
    cache-control: 
        max-age(多秒内直接请求缓存)
        no-cache(强制每次向服务器发送请求)，304（缓存为新），200
        no-store(永远不缓存该文件)
6. 长连接
    connection: keep-alive
7. 重定向
    location

# web basic
1. 网络基础TCP/IP
    应用层，传输层，网络层，链路层
2. 相关协议
    IP(网络层，传输数据), TCP, DNS
3. ARP 解析MAC-IP地址
4. TCP
    三次握手
    1. C 建立连接 + sync包。
    2. S 接收sync包，发送sync+ack包
    3. C 接收包，发送确认包
    四次挥手
    1. C 发送释放报文
    2. S 发送接收报文
    3. C 停止发数据，等待S发送释放报文， S 发送释放报文
    4. C 发出确认， S 收到确认并关闭
5. DNS解析IP
Client:
    HTTP: 请求报文
    TCP: 分割报文段
    IP: 搜索地址，发送
Server:
    HTTP: 处理请求内容
    TCP: 重组报文段 
    IP: 搜索地址，发送

# microservice security
1. 单体应用安全设计
    req -> auth -> res