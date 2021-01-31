// 两数之和
/**
 * 给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */
 /**
  * 思路： 遍历元素，map存储对应下标，target-元素，满足拿出下标和当前下标
  * 简介：
  */

const tSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curNum = nums[i];
        const targetNum = target - curNum;
        const targetNumIndex = map.get(targetNum);
        if(targetNumIndex) {
            return [targetNumIndex, i];
        } else {
            map.set(curNum, i);
        }
    }
}

// 最大子序和
// 动态分布， 记住求过的解来节省时间
/*
    nums[i]，如果大于前面和，取nums[i]；
    否则preSum + nums[i];
    max： 当前子集的和
*/
var maxSubArray = function(nums) {
    let preSum = 0;
    let max = 0;
    for(let i =0; i< nums.length; i++) {
        preSum = Math.max(preSum + nums[i], nums[i]);
        max = Math.max(max, preSum);
    }
    return max;
};

console.log(maxSubArray( [-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// 删除重复项
// nums = [0,0,1,1,1,2,2,3,3,4]
// 返回 [0, 1, 2, 3, 4]
var removeDuplicates = function(nums) {
    let index = 0;
    const map = new Map();
    while(index < nums.length) {
        if(!map.has(nums[index])) {
            map.set(nums[index], true);
            index++;
        } else {
            nums.splice(index, 1);
        }
    }
    return nums;
};

console.log(removeDuplicates([3, 1, 2, 3]));

// 合并两个有序数组
// 双向指针
var merge = function(nums1, m, nums2, n) {
    let mIdx = m -1;
    let nIdx = n -1;
    let len = m+ n -1;
    while(mIdx >= 0 && nIdx >=0) {
        nums1[len--] = nums1[mIdx] < nums2[nIdx] ? nums2[nIdx--] : nums1[mIdx--];
    }
    nums1.splice(0, nIdx + 1, ...nums2.slice(0, nIdx + 1))
};

console.log(merge([3,5,0,0], 2, [1, 2, 6], 3))


// 股票
// 找最右边最大
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let index = prices.length -1;
    let lastHighPrice = 0;
    let diff = 0;
    while(index >= 0) {
        if(lastHighPrice < prices[index] && index > 0) {
            lastHighPrice = prices[index];
        }
        diff = Math.max(lastHighPrice - prices[index], diff);
        index--;
    }
    return diff;
};
var maxProfit = function(prices, max = 0) {
    return prices.reduce((p, v) => [v < p[0] ? v : p[0], Math.max(p[1], v - p[0])], [Infinity, 0])[1]
};
var maxProfit1 = prices => prices.reduce((prevResult, cur) => [Math.min(prevResult[0], cur), Math.max(prevResult[1], cur - prevResult[0])])[1]

// 杨辉三角
// reduce
var generate = function(numRows) {
    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1], [1, 1]]
    const arr = [[1], [1, 1]];
    for(let i = 2; i < numRows; i ++) {
        const newArr = [1];
        arr[arr.length-1].reduce((prev, cur) => {
            newArr.push(prev + cur);
            return cur;
        });
        newArr.push(1);
        arr.push(newArr);
    }
    return arr;
};

console.log(generate(5));

var twoSum = function(numbers, target) {
    const map = new Map();
    let result = [];
    numbers.forEach((num, idx) => {
        if(!map.has(num)) {
            map.set(target - num, idx + 1);
        } else {
            result = [map.get(num), idx + 1];
            return;
        }
    })
    return result;
};

// 大于一半，多数元素
