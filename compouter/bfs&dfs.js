function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
/**
 * 通过一个层次遍历的数组生成一棵二叉树
 * @param {any[]} array
 * @return {TreeNode}
 */
function getTreeFromLayerOrderArray(array) {
    let n = array.length;
    if (!n) return null;
    let index = 0;
    let root = new TreeNode(array[index++]);
    let queue = [root];
    while(index < n) {
        let top = queue.shift();
        let v = array[index++];
        top.left = v == null ? null : new TreeNode(v);
        if (index < n) {
            let v = array[index++];
            top.right = v == null ? null : new TreeNode(v);
        }
        if (top.left) queue.push(top.left);
        if (top.right) queue.push(top.right);
    }
    return root;
}

const toGraph = (root) =>{
    // 初始化graph和isLeaf
    const graph = []; 
    const isLeaf = [];
    //dfs
    const dfs = node => {
        if(!node) return null;
        if(!node.right && !node.left) isLeaf[node.val] = true;
        if(node.left) {
            graph[node.val] = [...(graph[node.val] || []), node.left.val];
            graph[node.left.val] = [...(graph[node.left.val] || []), node.val];
            dfs(node.left);
        }
        if(node.right) {
            graph[node.val] = [...(graph[node.val] || []), node.right.val];
            graph[node.right.val] = [...(graph[node.right.val] || []), node.val];
            dfs(node.right);
        }
    }
    dfs(root);
    return [graph, isLeaf];
};

const findClosestLeaf = (root, k) => {
    const [graph, isLeaf] = toGraph(root);
    if (isLeaf[k]) return k;
    return bfs([graph, isLeaf], k);
}

const bfs = ([graph, isLeaf], k) => {
    // 访问过的，不再访问
    const visited = [];
    visited[k] = true;
    // 从变化的相关联的队列里面找
    const queue = [k];
    let i = 0;
    // 找出结果
    let result = 0;
    while (i < queue.length && !result) {
        graph[queue[i]].forEach(g => {
            if (visited[g]) return; //如果已经走过，忽略；
            visited[g] = true;
            if (isLeaf[g]) {
                result = g;
                return;
            }
            queue.push(g);
        });
        i++;
    }
    return result;
}

const result = findClosestLeaf(getTreeFromLayerOrderArray( [1,2,3,4,null,null,null,5,null,6]), 2);
console.log(result);