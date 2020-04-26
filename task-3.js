'use strict';

// const findLongestWord = function (string) {
//   let maxCh = 0;
//   for (let i = 0; i < string.split(' ').length; i += 1) {
//     if (maxCh < string.split(' ')[i].length) {
//       maxCh = string.split(' ')[i].length;
//     }
//   }
//   return maxCh;
// };

const findLongestWord = function (string) {
  string = string.split(' ');
  let longtWord = '';
  for (let i = 0; i < string.length; i += 1) {
    if (longtWord.length < string[i].length) {
      longtWord = string[i];
    }
  }
  return longtWord;
};

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

// let arry = [
//   'The',
//   'quick',
//   'brown',
//   'fox',
//   'jumped',
//   'over',
//   'the',
//   'lazy',
//   'dog',
// ];

// for (let i = 0; i < arry.length; i += 1) {
//   let max = console.log(`${arry[i]} - ${arry[i].length}`);
// }

// let maxCh = 0;
// for (let i = 0; i < arry.length; i += 1) {
//   if (maxCh < arry[i].length) {
//     maxCh = arry[i].length;
//   }
// }
// console.log(maxCh);
