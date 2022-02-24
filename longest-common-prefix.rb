def longest_common_prefix(strs)
  arr_length = strs.length
  result = ""
  arr = strs.sort_by(&:length)
  if arr_length == 0
    return result
  end
  if arr_length == 1
    result = strs[0]
  end

  min_length  = arr[0].length
  i = 0
  while (i < min_length && arr[0][i] === arr[1][i] ) do
    i += 1
    result = arr[0][0...i]
    print(arr)
  end
  print(result)
  return result
  
end
longest_common_prefix(["flower","flow","flight"])