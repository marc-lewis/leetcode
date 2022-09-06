/**
 * @type {{val: number, next: ListNode}} ListNode
 */

/**
 * Create a ListNode
 * @param {number} val
 * @param {ListNode} next
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * Get the number from a ListNode
 * @param {ListNode} node
 * @returns
 */
function getNum(node) {
  let placeValue = 1;
  let num = 0;
  let currentNode = node;
  while(currentNode) {
      num += (currentNode.val * placeValue);
      placeValue *= 10;
      currentNode = currentNode.next;
  }
  return num;
}

/**
 * Yikes
 * @param {number} num
 * @returns {ListNode}
 */
function nodify (num) {
  let nodes = []; // mad closure
  let i = 0;
  while(num) {
      const nodeValue = num % 10;
      num = Math.floor(num / 10);
      nodes[i] = new ListNode(nodeValue);
      if(nodes[i - 1]) {
          nodes[i - 1].next = nodes[i]
      }
      i++;
  }
  return nodes[0];
}


/**
 * Get the reversed ListNode number from the addition of two ListNodes
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers (l1, l2) {
  const sum = getNum(l1) + getNum(l2);
  return nodify(sum);
};
