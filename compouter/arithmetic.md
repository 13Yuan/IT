# 时间复杂度
O(n)

# 位运算
十进制与二进制转换
1. 左移 <<
二进制全部往左移动
    10 << 1
    -> 10的二进制   1010
    -> 左移         10100
    -> 20
公式：a * (2 ^ b) -> 10 * (2 ^ 1)

2. 右移 >>
二进制全部往右移动
    10 >> 1
    -> 1010
    -> 101
    -> 5
公式：a / (2 ^ b)
用于二分算法取中间值

3. 按位操作
    1. 与
        每一位都为1，结果才为1
        8 & 7 -> 0
        1000 & 0111 -> 0000 -> 0
    2. 或
        其中一位为1，结果就为1
        8 | 7 -> 15
        1000 | 0111 -> 1111 -> 15
    3. 异或
        每一位都不同，结果为1
        8 ^ 7
        1000 ^ 0111 -> 1111 -> 15
        8 ^ 8
        1000 ^ 1000 -> 0000 -> 0
        不进位加法
两数和
    a + b = (a ^ b) | ((a & b) << 1)

# 排序
```js
function checkArray(array) {
    if (!array || array.length <= 2) return
}
function swap(array, left, right) {
    let rightValue = array[right]
    array[right] = array[left]
    array[left] = rightValue
}
```
1. 冒泡排序
    相邻比较大小，最后一个元素最大，比较length -1
    时间复杂度： O(n * n)
    ```js
    function bubble(array) {
    checkArray(array);
    for (let i = array.length - 1; i > 0; i--) {
        // 从 0 到 `length - 1` 遍历
        for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) swap(array, j, j + 1)
        }
    }
    return array;
    }
    ```
2. 插入排序
    1， 2 比，交换位置， 3比1，2...
    时间复杂度O(n * n)
    ```js
    function insertion(array) {
    checkArray(array);
    for (let i = 1; i < array.length; i++) {
        for (let j = i - 1; j >= 0 && array[j] > array[j + 1]; j--)
        swap(array, j, j + 1);
    }
    return array;
    }
    ```
3. 选择排序
    最小值给索引，然后替换位置
    时间复杂度O(n * n)
    ```js
    function selection(array) {
    checkArray(array);
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
        minIndex = array[j] < array[minIndex] ? j : minIndex;
        }
        swap(array, i, minIndex);
    }
    return array;
    }
    ```
4. 归并排序
    取中间索引，两两分开直到最多包含2个元素，排序，后合并排序
    时间复杂度O(n * logN)

5. 快排
    基准值，左到右对比基础值，小放左，大放右，基准值与第一个比基准大的兑换，然后以改位置分为两部分，继续递归
    时间复杂度O(logN)

# 链表

# 树

# 动态规划

# 字符串相关