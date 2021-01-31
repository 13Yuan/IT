1. 微服务
业务领域模型的小型自治服务集合

2. 优点
    1. 独立开发
    2. 独立部署
    3. 故障隔离：单一服务不可用，系统仍可运行
    4. 混合技术栈
    5. 粒度缩放：不用聚合所有模块

3. 特点
    1. 解耦
    2. 组件化
    3. 业务能力（单一功能）
    4. 自治（团队独立工作，提高效率）
    5. 持续集成交互
    6. 敏捷

4. 主要架构组件
    1. Client -> CDN -> 静态资源
    2. Client -> Identity Provider -> API Gateway -> 多个微服务 （循环服务发现、故障识别）-> 远程服务

5. 挑战
    1. 自动化：每个组件都要遵循build, deploy monitor流程
    2. 配置
    3. 调试

6. DDD
领域驱动repository。 测试简单， 减少复杂度， 业务和服务聚合， 关注上下文（有界上下文，规定边界以及相互关系）

7. 测试
UT, 压力和可用性测试， 验收测试
端对端测试：1. UT. 2. 集成测试。 3. E2E. 4. UI

8. 分布式事务？

9. 双因素身份验证
登录过程还要启动二级校验。凭证类型： PIN（密码），ATM(phone), 指纹

10. Container
服务、代码库。 ECS Cluster

11. stub和mock
stub: 创建固定返回结果的存根。不测试也不关心里面执行
mock：模拟行为和属性。

12. CI/CD
自动构建和测试、合并

13. 架构师角色
    1. 系统布局
    2. 组件分区（粘合不耦合）
    3. 提供工具和技术建议
    4. 技术治理，遵循微服务原则？

14. RX
调用多个服务收集结果



## jkb
# 服务分层
MVC -> RPC -> SOA -> 微服务
    1. 聚合器模式
        loadbalance -> Aggregator -> microservice -> cache -> db
    2. 代理模式
        loadbalance -> proxy -> ....
        （不聚合数据，只是委托和数据转换）
    3. 链式
        lb -> serviceA (cache, db) -> B -> C
    4. 异步
        消息队列
1. API Gateway
2. 服务层
    1. 聚合服务
    2. 微服务（基础服务）
    3. 服务支撑（日志、监控、注册发现、配置、预警、容错）
    4. 基础设施(SaaS, IaaS, PaaS)

# 服务发现机制
1. 传统
DNS -> (Discover) -> Consumer -> LB -> Service Provider
2. Service Registry -> Host:Consumer(LB) KONG -> Service Provider ->

# API GAteway
反向路由、认证安全、限流熔断、日志监控
Zuul： Runner + filter dictories(多个过滤器： 前置路由过滤（权限）、路由过滤（服务）、后置过滤（日志）+ Request Context

# 路由发现
服务注册中心: Eureka
API GateWay: zuul
    基础服务-> (注册） -> 注册中心（服务治理）
    聚合服务 -> (服务发现) -> 基础服务
    ApiGateway -> (服务发现) -> 聚合服务

# 配置中心
config server -> svc1(push or pull)
Apollo配置中心架构
Client -> 修改发布配置(配置中心) -> 推送和定时拉取配置（Apollo客户端）-> 获取配置、同步本地文件缓存

# RPC & REST
RPC： 强耦合、二进制、TCP、高性能、protobuf IDL、自动生成多语言、gRPC、客户端方便（但二进制不可读）、对外转换REST
REST: 松耦合、xml(JSON)、http、低于rpc、swagger、http客户端、spring mvc、 浏览器可访问、直接对外开放

# 治理细节
1. 服务注册发现
2. 负载均衡、路由
3. 日志
4. metrics：调用链监控
5. 调用链埋点
6. 限流熔断
7. 安全、访问控制
8. REST/RPC
9. 序列化、二进制、XML、JSON
10. 代码生成
11. 统一异常处理
12. 文档
13. 配置集成

# 监控分层及架构
1. 基础设施监控（网络、丢包）
2. 系统监控（内存、cpu)
3. 应用层（qps,响应时间、cache命中率）
4. 业务监控（核心指标监控）
5. 用户体验监控（性能、返回码）

1. 日志监控
2. metrics（延迟）
3. 健康检查
4. 调用链
5. 告警

微服务agent -> kafka -> log(ELK、splunk)
                    -> metrics(InfluxDB)
                    -> Nagios(健康检查)

# 调用链监控
原理： Span1 -> (Trace id + parent span id) -> SVC1
CAT\Zipkin\Pinpoint
可视化、报表、埋点、ServerMap、heartbeat、Metric、Dashboard

# 服务熔断隔离限流降级
command -> 同步、异步、响应式 -> 电容判断（短路、限流（队列判断满否）、异常降级）+ 电路健康器（控制电路）

# Docker & CI/CD
Git -> Jenkins -> Docker registry(测试环境、UAT、Prod) -> Release

# 容器发布体系
k8s
