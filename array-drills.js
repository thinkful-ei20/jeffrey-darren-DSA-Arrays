'use strict';

let output;

function urlify(str) {
  return str.split('').map(s => s === ' ' ? '%20' : s).join('');
}

output = urlify('tauhida parveen');
console.log(output);
output = urlify('www.thinkful.com /tauh ida parv een');
console.log(output);
