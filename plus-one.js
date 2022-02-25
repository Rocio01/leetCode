// You are given a large integer represented as an integer array digits, where each 
// digits[i] is the ith digit of the integer. The digits are ordered from most significant to least 
// significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// /**
//  * @param {number[]} digits
//  * @return {number[]}
//  **/
var plusOne = function(digits) {
  let number = BigInt(digits.join("")) + BigInt(1);
  let arr = Array.from(String(number), Number);
  return arr;  
};

plusOne([1,2,3])

// [1,2,4]