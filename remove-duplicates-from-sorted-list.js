// Given the head of a sorted linked list,
// delete all duplicates such that each element appears only once. Return the linked list sorted as well.
var deleteDuplicates = function(head) {
  let currNode = head;
  
  while(currNode !== null && currNode.next !== null){
    if(currNode.val === currNode.next.val){
      currNode.next = currNode.next.next
    }
    else {
      currNode = currNode.next
    }
  }
  
  return head;
  };
