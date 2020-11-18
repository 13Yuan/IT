// const levelOrderToBottom = (root) => {
//     if( root === null) return null;
//     const queue = [];
//     const res = [];
//     queue.push(root);
//     while(queue.length) {
//         const subRes = [];
//         const len = queue.length;
//         for (let i = 0; i < len; i++) {
//             const cur = queue.shift();
//             subRes.push(cur.val);
//             if(cur.left) {
//                 queue.push(cur.left);
//             }
//             if(cur.right) {
//                 queue.push(cur.right);
//             }
//         }
//         res.unshift(subRes);
//     }
//     return res;
// }

const bfs = (obj) =>{
    let list = [obj];
    let listLeft = [];
    let listRight = [];
    while(list.length != 0){
        for(let i = 0, len = list.length; i< len; ++i){
            listLeft = [...listLeft, list[i].left];
            listRight = [...listRight, list[i].right];
        }
        listLeft = [];
        listRight= [];
    }
}

const root = {
    val: 3,
    left: { val: 9, left: null, right: {val: 10} },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null },
    },
  };
  
  console.log(bfs(root));