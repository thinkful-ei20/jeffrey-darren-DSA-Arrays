'use strict';

const Array = require('./Array');

function main() {
  Array.SIZE_RATIO = 5;

  let arr = new Array();

  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.push(3);
  console.log(arr);

  arr.pop();
  console.log(arr);

  arr.pop();
  console.log(arr);

  arr.pop();
  console.log(arr);

  arr.pop();
  console.log(arr);

  arr.pop();
  console.log(arr);
}

main();
