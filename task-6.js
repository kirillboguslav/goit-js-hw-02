'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Введите число`);

  numbers.push(Number(input));
} while (input !== null);
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}
alert(`Общая сумма чисел равна ${total}`);

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// //   let arrStr = message.split(/\b/);

// //   for (let i = 0; i < arrStr.length; i++) {
// //     let word = arrStr[i].toLowerCase();

// //     if (word === 'spam' || word === 'sale') {
// //       return true;
// //     }
// //   }
// //   return false;

// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   // console.log(message);

//   return message.includes('sale') || message.includes('spam');
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
