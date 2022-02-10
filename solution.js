// Challenge from Codility
function solution(S, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  let A = S.split("\n");
  let res = []
  let finalResult;
  let finalA = A.map(m=>{return m.split(",")});
  let parameterIndex = finalA[0].indexOf(C)
  for(let i = 1; i < finalA.length; i++){
    res.push(Number(finalA[i][parameterIndex]))
  }

  finalResult = Math.max(...res);
  return finalResult
}
solution('id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7', "age")
// res = 68