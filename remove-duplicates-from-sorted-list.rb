# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
  currNode = head

  while currNode && currNode.next
    if currNode.value == currNode.next.value
      currNode.next = currNode.next.next
    else
      currNode =  currNode.next
    end
  end
    return head
end