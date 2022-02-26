# @param {Integer[]} digits
# @return {Integer[]}

def plus_one(digits)
    nums = digits.join()
    arr_strings = (Integer(nums) + 1).to_s.split(//)
    result = []
    arr_strings.each do |i|
     result.push(Integer(i)) 
        
    end
    print(result)
    return result
end

plus_one([9])