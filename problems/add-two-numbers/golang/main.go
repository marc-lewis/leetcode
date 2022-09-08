package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	l1 := &ListNode{
		Val: 2,
		Next: &ListNode{
			Val: 4,
			Next: &ListNode{
				Val: 3,
			},
		},
	}

	l2 := &ListNode{
		Val: 5,
		Next: &ListNode{
			Val: 6,
			Next: &ListNode{
				Val: 4,
			},
		},
	}

	addTwoNumbers(l1, l2, &ListNode{})
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode, r *ListNode) *ListNode {
	return recurse(l1, l2, r)
}

func recurse(l1 *ListNode, l2 *ListNode, r *ListNode) *ListNode {
	c := l1.Val + l2.Val + r.Val

	n := &ListNode{}

	n.Val = (c / 10) % 10
	r.Val = (c / 1) % 10

	if l1.Next != nil && l2.Next != nil {
		r.Next = recurse(l1.Next, l2.Next, n)
	} else if l1.Next == nil && l2.Next != nil {
		r.Next = recurse(&ListNode{}, l2.Next, n)
	} else if l1.Next != nil && l2.Next == nil {
		r.Next = recurse(l1.Next, &ListNode{}, n)
	} else if n.Val != 0 {
		r.Next = n
	}

	return r
}
