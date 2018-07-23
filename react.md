1. setState
合并组建状态，触发Reconciliation,对比树差异，按需更新渲染

2. Element & Component
Element: JSX
Component: 函数类，返回Element

3. Class & FUnctional Component
包含内部状态和生命周期，用class

4. Refs
refs 访问dom元素

5. keys
追踪列表元素变动的标识

6. controlled & uncontrolled component
受react state或者dom refs控制

7. ajax坊在componentDidMount
    1. fiber触发多次willmount
    2. ajax -> setstaet-> 报错

8. shouldComponentUpdate
判断是否组件更新

9. react编译生产环境版本
webpack.DefinePlugin 将环境变量设置成prod.
react会忽略proptype验证和warning,减少代码大小，移除注释信息

10. react children & prop.children
children不一定是数组。list > 1 才设置为数组

11. React事件
解决兼容性问题，原生事件封装到合成事件，保持一致性。发送到顶层处理，解决dom事件监听

12. createElement & cloneElement

13. setState第二个函数
监听渲染是否完成，完成时触发

14. Diff算法
Virtual DOM -> Diff算法 -> 局部更新
    1. 只对相同组件，相同结构进行diff
    1. 不跨层级操作， 同节点比较
    2. 发现不存在，父子节点删除
    3. 移动节点，删除，新增
    4. 无变化，通过shouldComponentUpdate钩子判断是否diff
元素间diff
    1. key
    2. 增，移，删分类

15. 总结
    1. diff策略： O(n^3) -> O(n)
    2. 分层求异，对tree diff优化
    3. 分组件求异
    4. 设置key， 对element diff优化
    5. 保持稳定DOM结构，避免移动频繁
