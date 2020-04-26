'use strict';

const calculateEngravingPrice = function (message, pricePerWord) {
  message = message.split(' ');

  // if (message === 'Proin sociis natoque et magnis parturient montes mus') {
  //   pricePerWord = pricePerWord * 8;
  // } else {
  //   pricePerWord = pricePerWord * 6;
  // }

  return message.length * pricePerWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
