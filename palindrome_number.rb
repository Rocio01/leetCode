# // Given an integer x, return true if x is palindrome integer.

# // An integer is a palindrome when it reads the same backward as forward.

# // For example, 121 is a palindrome while 123 is not.
 

# // Example 1:

# // Input: x = 121
# // Output: true
# // Explanation: 121 reads as 121 from left to right and from right to left.

# def is_palindrome(x)
#     result = false
#     string = (x.to_s).split("").reverse().join()
#     reverse_number = string.to_i
#     reverse_number == x ? result = true : result
#     return result
# end

def is_palindrome(x)
 result = false
  x.to_s === x.to_s.reverse() ? result = true : result
  return result

end

is_palindrome(122)