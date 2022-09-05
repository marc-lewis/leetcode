/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function getNum(node) {
  const placeValue = 1;
  const num = 0;
  let currentNode = node;
  while(currentNode.next) {
      num += (this.val * placeValue);
      placeValue *= 10;
      currentNode = node.next;
  }
  return num;
}

/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
function addTwoNumbers (l1, l2) {
  const sum = getNum(l1) + getNum(l2);
};

export { addTwoNumbers };
