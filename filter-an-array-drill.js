'use strict';

function filterArr(arrofNums){
  let answer = [];
  for(let i=0; i < arrofNums.length; i++){
    if(arrofNums[i] >= 5){
      answer.push(arrofNums[i]);
    }
  }
  return answer;
}

console.log(filterArr([1,3,5,7,9]));
