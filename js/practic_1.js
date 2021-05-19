let value = 0;
// let toString = String(value);
// console.log(toString, typeof toString);

// toString = value + "";
// console.log(toString);

// value = "qewwt";
// let toNumber = Number(value);
// console.log(toNumber);
// toNumber = +value;
// console.log(toNumber);

// value = "456";
// toNumber = parseInt(value);
// console.log(toNumber);

// value = "";
// console.log(Number(value));
// let value = 1;
// value = " ";
// console.log(value.length);
// console.log(value.trim()); //зачищает пробелы
// console.log(Number(value.trim()));

// value = true;
// console.log(Number(value));

// value = false;
// console.log(Number(value));

// value = null;
// console.log(Number(value)); //что-то есть

// value = undefined;
// console.log(Number(value)); // нема ниче

// value = undefined;
// console.log(Boolean(value));

// value = null;
// console.log(Boolean(value));

// value = "";
// console.log(Boolean(value));

// value = " ";
// console.log(Boolean(value));

// value = 0;
// console.log(Boolean(value));

// value = 1;
// console.log(Boolean(value));

const object1 = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object1));
// expected output: Array ["a", "b", "c"]

// value = NaN;
// console.log(Boolean(value));

// value = Infinity;
// console.log(Boolean(value));

// value = Infinity;
// console.log(typeof value);

// // value = !!value;
// let number = 1;
// console.log(number);

// // number = !number;
// // console.log (number);

// number = !!number;
// console.log(number);

// value = false;
// console.log(value);
// console.log(Boolean(value));

// _____________Logical operators____________________

// &&

// console.log(1 && true && "javascript"); //javascript
// //         true  true       true

// console.log(0 && true && "javascript");
// //         false

// console.log(true && 0 && "javascript");
// //         true   false

// console.log(1 || true || "javascript"); //1
// //        true

// console.log(0 || false || null); //null
//         false   false  false

//_______if__

// let age = 15;
// if (age>=12 && age<=14) {
// console.log('Ok');
// }
// else {
//     console.log ('No')
// }

// let age = 15;
// if (age>=12 || age<=14) {
// console.log('Ok');
// }
// else {
//     console.log ('No')
// }

// let day = "Saturday";
// if (
//   day === "Monday" ||
//   day === "Tuesday" ||
//   day === "Wednesday" ||
//   day === "Thursday" ||
//   day === "Friday"
// ) {
//   console.log("workDay");
// } else {
//   console.log("dayOff");
// }

// switch (day) {
//   case "Monday":
//     console.log(`${day} - workDay`);
//     break;
//   case "Tuesday":
//     console.log(`${day} - workDay`);
//     break;
//   case "Wednesday":
//     console.log(`${day} - workDay`);
//     break;
//   case "Thursday":
//     console.log(`${day} - workDay`);
//     break;
//   case "Friday":
//     console.log(`${day} - workDay`);
//     break;
//   default:
//     console.log(`${day} - dayOff`);
// }

// switch (day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log(`${day} - workDay`);
//     break;
//   default:
//     console.log(`${day} - dayOff`);
// }

//______Проверить. я вляется ли год весокосным________

// let year = 2021;
// let result = year % 4;
// console.log(result);

// if (year % 4 === 0) {
//   console.log(`${year} - весокосный`);
// } else {
//   console.log(`${year} - не весокосный`);
// }

// //____puttern guard clause______
// function checkYear()
// if (year % 4 === 0)  return console.log(`${year} - весокосный`);
//     return console.log(`${year} - не весокосный`);

// let compNumber;
// let userNumber;

// function getPlay() {
//   compNumber = Math.round(Math.random() * (10 - 1) + 1);
//   console.log(compNumber);
//   if (userNumber === compNumber) {
//     console.log("Вы угадали!");
//   } else {
//     console.log("Вы не угадали!");
//   }
// }
// getPlay();

//______написать программу, которая будет +-*/2 значения, ктрый пользоватеь ввдит через промпт___

// function getTotal() {
//   let num1 = Number(prompt("введите число 1"));
//   let num2 = Number(prompt("введите число 2"));
//   let symbol = prompt("введите оператор");
//   if (symbol === "+") {
//     console.log(num1 + num2);
//   } else if (symbol === "-") {
//     console.log(num1 - num2);
//   } else if (symbol === "*") {
//     console.log(num1 * num2);
//   } else if (symbol === "/") {
//     console.log(num1 / num2);
//   } else {
//     console.log("вы ввели неверный символ");
//   }
// }
// getTotal();

//____температуру из С в F___

// function temperatureToF(celsius) {
//   let result = (celsius * 9) / 5 + 32;
//   return result;
// }

// let result = temperatureToF(5);
// console.log(result);

// function temperatureToC(Far) {
//   let result = Math.round(((Far - 32) * 5) / 9);
//   return result;
// }

// let result = temperatureToC(40);
// console.log(result);

// function temperatureToC(Far) {
//   let result = ((Far - 32) * 5) / 9;
//   return result;
// }

// let result = temperatureToC(41);
// console.log(result);

// function temperatureToC(Far) {
//   let result = Math.round((((Far - 32) * 5) / 9) * 100) / 100;
//   return result;
// }

// let result = temperatureToC(40);
// console.log(result);
