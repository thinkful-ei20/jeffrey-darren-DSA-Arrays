'use strict';

let output;

function urlify(str) {
  return str.split('').map(s => s === ' ' ? '%20' : s).join('');
}

output = urlify('tauhida parveen');
console.log(output);
output = urlify('www.thinkful.com /tauh ida parv een');
console.log(output);
// O(n)


/*
Max sum in the array

*/

function maxSumArr(arr) {
  let max = 0;
  while (arr.length > 0) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
    if (result > max) max = result;
    
    arr.pop();
  }

  return max;
}

output = maxSumArr([4, 6, -3, 5, -2, 1]);
console.log(output);
// O(n)

