/**
 * 栈实现
 * 先进后出，反着拿数据
 * push, pop, 
 * peek：返回栈顶部元素
 * isEmpty
 * Clear
 * size
 * print
 */

//  const stack = () =>{
//      const items = [];
//      const push = el => items.push(el);
//      const pop = () => items.pop();
//      const peek = () => items[items.length - 1];
//      const isEmpty = () => items.length === 0;
//      const clear = () => items = [];
//      const size = () => items.length;
//      const print = () => console.log(items.toString());
//      return {
//          push,
//          pop,
//          peek,
//          isEmpty,
//          clear,
//          size,
//          print
//      }
//  }
/**
 * 将10进制数字转为2进制数字
 * @param  {Number} decNumber 要转换的10进制数字
 * @return {Number}           转换后的2进制数字
 */
const divideBy2 = (decNumber)  => {
    let result = "";
    const remStack = [];
    while(decNumber > 0) {
        remStack.push(Math.floor(decNumber % 2));
        decNumber = Math.floor(decNumber/2);
    }
    while(remStack.length > 0) {
        result += remStack.pop().toString();
    }
    return result;
}

// console.log(divideBy2(100))


/**
 * 队列
 * 先进先出
 * 
 */
const queue = () => {
    const items = [];
    const enqueue = el => items.push(items);
    const dequeue = () => (items.shift())
    const front = () => (items[0]);
}

/**
 * 击鼓传花的小游戏
 * @param  {Array}  nameList 参与人员列表
 * @param  {Number} num      在循环中要被弹出的位置
 * @return {String}          返回赢家(也就是最后活下来的那个)
 */
function hotPotato(nameList, num) {
    const items = [];
    for (let i = 0; i < nameList.length; i++) {
        items.push(nameList[i]);
    }
    let eliminated = "";
    while (items.length > 1) {
        for (let i = 0; i < num; i++) {
            // 踢出后重新入列
            items.push(items.shift());          
        }
        eliminated = items.shift()
        console.log(eliminated + " Get out!")
    }
    return items.shift();
}
console.log(hotPotato(['小明', '小红', '小王', '小绿'],100))