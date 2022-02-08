// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.


 var isPalindrome = function(x) {
  let result = false;
  let string = x.toString();
  let reverse = string.split("").reverse().join();
  let revNum = Number(reverse.replace(/,/g, ''));

  (revNum === x ) ? result = true : result
  console.log(result)
  return result;

};

isPalindrome(121)