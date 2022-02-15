def length_of_last_word(s)
  arr = s.strip.split(" ")
  return result = arr[-1].length
    
end

length_of_last_word("   fly me   to   the moon  ")
# // answer 4
length_of_last_word("b   a    ")
# // answer 1