'use strict';

//   let arrStr = message.split(/\b/);

//   for (let i = 0; i < arrStr.length; i++) {
//     let word = arrStr[i].toLowerCase();

//     if (word === 'spam' || word === 'sale') {
//       return true;
//     }
//   }
//   return false;

const checkForSpam = function (message) {
  message = message.toLowerCase();
  // console.log(message);

  return message.includes('sale') || message.includes('spam');
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
