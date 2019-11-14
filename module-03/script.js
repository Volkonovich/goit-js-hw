"use strict";

// ---------DZ3------------\\

// ____________1_________________
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true
// };

// user.mood = "happy";
// user.hobby = "javascript";
// user.premium = false;

// let keys = Object.keys(user);
// console.log(arr);
// for (let key of keys) {
//   console.log("Value:", user[key]);
// }

// ____________2__________________

// const countProps = obj => {
//   return Object.keys(obj).length;
// };

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// ____________3__________________

// const arr = {
//   ann: 29,
//   david: 140,
//   helen: 10,
//   lorence: 99
// };
// let maxProductivity = 0;
// let name = "";

// const findBestEmployee = x => {
//   for (let key in x) {
//     if (maxProductivity < x[key]) {
//       maxProductivity = x[key];
//       name = key;
//     }
//   }
// };

// findBestEmployee(arr);

// console.log(maxProductivity);
// console.log("longest", name);

// ___________4_________________

// const arr =  {
//   mango: 100,
//   poly: 150,
//   alfred: 80,
// };
// let total = 0;
// const countTotalSalary = x => {
//   for (const key in x) {
//     total += x[key];
//   }
//   console.log(total);
// };
// countTotalSalary(arr);

// ___________5_________________

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// let keys = [];
// const getAllPropValues = (x, y) => {
//   for (let key of x) {
//     keys.push(key[y]);
//   }
//   return keys;
// };

// console.log(getAllPropValues(products, "name")); // [4, 3, 7, 2]

// _________6___________________

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 }
// ];

// let total = 0;
// const calculateTotalPrice = (x, y) => {
//   for (let product of x) {
//     if (product.name === y) {
//       total = product.price * product.quantity;
//     }
//   }
//   return total;
// };

// console.log(calculateTotalPrice(products, "Сканер"));

