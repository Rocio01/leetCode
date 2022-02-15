// Given a string s consisting of some words separated by some number 
// of spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// /**
//  * @param {string} s
//  * @return {number}

//  */
 var lengthOfLastWord = function(s) {
    let arr = s.trim().replace(/\s\s+/g, ' ').split(" ");   
    let result = arr[arr.length - 1].length;
    console.log(result);
    console.log(arr);
    return result
    
};

lengthOfLastWord("   fly me   to   the moon  ")
// answer 4
lengthOfLastWord("b   a    ")
// answer 1