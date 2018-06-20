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


/*
Merge ARrays
find smaller lengthed array 
*/

function mergeArrays(arr1, arr2) {
  let combined = [...arr1, ...arr2];
  return combined.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
//[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
//O(n)



/*
Remove Characters
*/

function removeChars(str, filter) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if(!filter.includes(str[i])) result += str[i];
  }
  return result;
}

output = removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
console.log(output);
// O(n)

/*
Remove Characters
*/

function products(arr){
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let result = 1;
    for (let j = 0; j < arr.length; j++) {
      if(j !== i){
        result *= arr[j];
      }       
    }
    results.push(result); 
  }
  return results;
}
console.log(products([1,3,9,4]));

