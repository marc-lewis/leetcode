/**
 * @type {{val: number, next: ListNode}} ListNode
 */

/**
 * Create a ListNode
 * @param {number} val
 * @param {ListNode} next
 */
 class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * Get the reversed ListNode number from the addition of two ListNodes
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers (l1, l2) {
  let carry = 0;
  let current = new ListNode(0);
  let result = current;

  while(l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    const sum = val1 + val2 + carry;
    const nodeValue = sum % 10;
    carry = sum > 9 ? 1 : 0;

    current.next = new ListNode(nodeValue);
    current = current.next;

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return result.next;
};
