# 消息中间件

## ActiveMQ
PubSub,点对点

## Kafka（可扩容，无需停止服务）
producer (ms保存到磁盘)
broker(kafka实例, 存放消息队列)
partition(一个消息队列)
topic(多个消息队列)

### 生产消费者模型
1. 消费模型
    分区消费模型
        2个kafka服务器，4个分区，4个消费实例
            4个线程，消费offset偏移量，记录偏移量
    组消费模型
        2个kafka服务器，4个分区，2个组，每组获取全部数据
2. 生产模型
    同步生产
        发送单条消息，直至最大数据或成功，发送下条
        （低消息丢失率）
    异步生产
        发送消息到缓存队列，达到最大值或存放时间，打包发送
        （队列满后，后入消息丢失)。日志处理

### PubSub
消息发布到Topic中，多个消费者订阅
1. Producer 向kafka broker发送消息
2. Consumer 向kafka broker取消息
3. Topic 队列集合
4. Consumer Group 广播，单播（所有c到一个group)，每个gc只会把消息发给gc中的一个c
5. Broker   kafka服务器，可以容纳多个topic
6. Partition 单个有序队列
7. offset  .kafka

特性
1. 磁盘数据结构持久哈
2. 高吞吐：每秒数十万消息
3. 同步和异步复制ha
4. 消费状态保存在客户端（一致性）增加客户端负担
5. 利用zookeeper实现集群扩展

总结
1. producer利用zookeeper发现borker列表、topic下每个partition leader建立socker连接发送消息
2. broker利用zookeeper注册broker信息，检测partition leader的存活
3. consumer利用zookeeper注册consumer信息，发现broker和partition leader建立连接接受信息
