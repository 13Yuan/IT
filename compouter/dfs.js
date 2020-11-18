const isBalanced = (root) => {
    // 1. 设置结果集
    let result = true;
  
    // 3. 递归
    const recursion = (root) => {
      // 3.1 如果没有下一个节点了，返回 0
      if (!root) {
        return 0;
      }
      // 3.2 当前层 + 1
      const left = recursion(root.left) + 1;
      const right = recursion(root.right) + 1;
      // 3.3 比较两棵树的深度
      if (Math.abs(left - right) > 1) {
        result = false;
      }
      // 3.4 返回这棵树最深的深度
      return Math.max(left, right);
    };
    // 2. 递归这棵树
    recursion(root);
  
    // 4. 返回结果
    return result;
  };
  
  const root = {
    val: 3,
    left: { val: 9, left: null, right: {val: 10} },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  };
  
  console.log(isBalanced(root));