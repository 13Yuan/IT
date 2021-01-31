/**
 * 单向链表
 * append(el), insert(pos, el), indexOf(el), remove(el), removeAt(pos), getHead(), isAmpty(), toString(), size()
 */

 const LinkedList = () => {
     const getNode = el => ({
         el,
         next: null
     });
     const head = null;
     const length = 0;
     const append = el => {
        const node = getNode(el);
        let cur;
        if(head == null) {
            head = node;
        } else {
            cur = head;
            while(cur.nex) {
                cur = cur.next;
            }
            cur.next = node;
        }
        length ++;
     }
 }