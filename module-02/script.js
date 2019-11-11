"use strict";

// -------1--------

// const arr = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];

// function logItems(x) {
//   for (let i = 0; i < x.length; i++) {
//     // x= kojen raz pidstavliae znachennia dlia massuvy
//     console.log(`${i + 1} - ${x[i]}`); // перемінна і +1 вказує  на додавання нумераціі
//   }
// }
// logItems(arr);

// -------2--------
// let pricePerWord = 10;

// let message = prompt("vvedite text");

// function priceFinish(z) {
//   z = z.split(" ").length;
//   console.log(z * pricePerWord);
// }

// priceFinish(message);

// -------3--------
// let message = prompt("vvedite slova");

// function findLongestWord(x) {
//   x = x.split(" ");
//   x.sort(function(a, b) {
//     return b.length - a.length;
//   });
//   console.log(x[0]);
// }
// findLongestWord(message);

// -------4--------

// let message = prompt("vvedite stroky");

// function forCalculator(a) {
//   if (a.length >= 40) {
//     console.log(`${a.slice(0, 40)}...`);
//   } else {
//     console.log(a);
//   }
// }

// forCalculator(message);

// -------5--------

// let str = prompt("vvedite stroky")
//   // .replace("[", "")
//   .toLowerCase();

// function checkForSpam(x) {
//   if (x.indexOf("sale") >= 0 || x.indexOf("spam") >= 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// checkForSpam(str);

// -------6--------

let input = 0;
const arr = [];
let total = 0;

do {
  input = prompt();
  if (!isNaN(input)) {
    arr.push(Number(input));
  }
} while (input !== null);

for (let elem of arr) {
  console.log(elem);
  total += elem;
}

console.log(total);
