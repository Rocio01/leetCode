// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
 var longestCommonPrefix = function(strs) {
    let sLength = strs.length;
    let arr = strs.sort()
    let result = "";
    if (sLength === 0){
      result = "";
    }
    if (sLength === 1){
      result = strs[0]
    }
   
   let minLength = Math.min(arr[0].length, arr[sLength - 1].length)

   let i = 0;
   while(i < minLength && arr[0][i] === arr[sLength -1 ][i]){
     i ++
     result = arr[0].substring(0, i)
   
   }
   console.log(result)
   return result;
};



longestCommonPrefix(["flower","flow","flight"])