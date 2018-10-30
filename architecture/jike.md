# 架构设计目的
解决软件系统复杂度带来的问题

# 高性能


# Reactor & Proactor

## Reactor (dispatch模式)
Reactor, 线程，进程

I/O 多路复用 + 线程池： Reactor(监听、分配事件), 线程池（处理事件）

Network API (select, accept, read, send)

Client -> Reactor(select, dispath) -> Acceptor(accept)
                                   -> subReactor(select, dispath) -> Handler(read, send) -> Processor(业务处理)
ps, Reactor(listen) SubReactor(handle)


|               | 优点          | 缺点  |  使用  |
| ------------- |:-------------:| ----- | -----: |
| 单R单进程\线程 | 无进程通讯    | 无利用多CPU，handler只处理连接业务 | Redis |
| 单R多线程      | 多核处理能力  | 线程互斥共享问题、高并发Reactor性能问题 | Java |
| 多R多进程多线程 |  |  | Nginx, Memcache, Netty |

## Proactor
Proactor 异步IO事件

window IOCP

# 高性能负载均衡：分类以及架构
