// Модуль 2. Занятие 1. Массивы и функции

// Задача 1

// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение «Блюз» на «Классика».
// 4. Удалите первый элемент и выведите его в консоль.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// Массив по ходу выполнения операций:

// a. Джаз, Блюз
// b. Джаз, Блюз, Рок-н-ролл
// c. Джаз, Классика, Рок-н-ролл
// d. Классика, Рок-н-ролл
// e.Рэп, Регги, Классика, Рок - н - ролл;

// const styles = ["Джаз", "Блюз"];

// styles.push("Рок-н-ролл");

// console.log(styles);

// styles.splice(1, 1, "Классика");

// console.log(styles);

// const deletedElem = styles.shift();

// console.log(deletedElem);

// console.log(styles);

// styles.unshift("Рэп", "Регги");

// console.log(styles);

// --------------------

// Задача 2

// Напишите функцию min(a,b), которая возвращает
// меньшее из чисел a и b.

// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "Аргументы должны быть цифрами!";
//   }

//   return a > b ? b : a;
// }

// console.log(min(10, 7));

// --------------------

// Задача 3

// Напишите функцию logItems(array), которая получает
// массив и использует цикл for,
// который для каждого элемента массива будет выводить
// в консоль сообщение в формате
// <номер элемента> - <значение элемента>.
// Нумерация элементов должна начинаться с 1.

// Например для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом
// 0 будет выведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.

// const arr = ["Mango", "Poly", "Ajax"];

// function logItems(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`${i + 1} - ${arr[i]}`);
//   }
// }

// logItems(arr);

// --------------------

// Задача 4

// Вернуть отсортированную копию по алфавиту
// (не меняя исходный массив)
// не использовать Array.prototype.sort()

// const ex4 = [2, 1, 65];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let tmp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = tmp;
//       }
//     }
//   }

//   return arr;
// }

// console.log(bubbleSort(ex4));

// --------------------

// Задача 5

// Напиши функцию findSmallestNumber(numbers)которая
// ищет самое маленькое число в массиве.

// ДЗ - Посмотреть как можно валидировать массив

// const ex5 = [104, 67, 54, 89, 2, 19];

// function findSmallestNumber(numbers) {
//   let min = numbers[0];

//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }

//   return min;
// }

// console.log(findSmallestNumber(ex5));

// const ex6 = [104, 67, 54, 89, 3, 19];

// ex6.sort(function findSmallestNumber(a, b) {
//   return a - b;
// });
// console.log(ex6);
// // --------------------

// // Задача 6

// // Напиши функцию calculateAverage()
// // которая принимает произвольное кол-во
// // аргументов и возвращает их среднее значение.
// // Все аругменты будут только числами.

// function calculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;

//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     } else {
//       sum += arg;
//       totalCount++;
//       // totalCount += 1;
//     }
//   }

//   return sum / totalCount;
// }

// console.log(calculateAverage(2, 5, 10, "asdhvghasd", [3, 3, 2]));

// --------------------

// Модуль 2. Занятие 2. Массивы и функции

// Задача 7

// Напиши функцнию findLongestWord(string)
// которая принимает произвольную строку
// состоящую только из слов разделённых
// пробелом (параметр string)
// и возвращает самое длинное слово в этой строке.

// ДЗ - добавить проверку, когда все слова ровны

// function findLongestWord(randomWords) {
//   if (typeof randomWords !== "string") {
//     return;
//   }

//   const splittedWords = randomWords.split(" ");
//   let longestWord = splittedWords[0];

//   for (const word of splittedWords) {
//     if (longestWord.length < word.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("Я хочу стать програмистом"));

// ----------------------

// Задача 8

// Напишите функцию greet(name), которая
// при вызове будет получать имя (например, «Василий»)
// и логировать строку «Привет, <имя>».
// В случае отсутствующего аргумента выводить «Привет, гость»

// function greet(name) {
//   if (typeof name !== "string") {
//     return "Привет, гость";
//   }

//   return name ? `Привет ${name}` : "Привет, гость";
// }

// console.log(greet(""));

// ----------------------

// Задача 9

// Напишите функцию findTheColor()
// которая принимает название цвета
// и определяет его наличие в масиве.
// Аргумент должен быть строкой.

// ДЗ от Жени - вывести индекс цвета в шаблонной строке

// const colors = ["red", "yellow", "blue", "green"];

// function findTheColor(colorName) {
//   if (typeof colorName !== "string") {
//     return;
//   }

//   return colors.includes(colorName);
// }

// console.log(findTheColor("yellow"));

// ----------------------

// Задача 10

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

// const checkNumbers = (a, b) => {
//   return a > b ? `число ${a} больше ${b}` : `число ${b} больше ${a}`;
// };

// ----------------------

// Задача 11

// Выполните рефакторинг заменив объявление
// функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

// const mult = (x, y, z) => x * y * z;

// ----------------------

// Задача 12

// Напишите функции для работы с коллекцией обучающих
// курсов courses:

// 1. addCourse(name) - добавляет курс в конец коллекции
// 2. removeCourse(name) - удаляет курс из коллекции
// 3. updateCourse(oldName, newName)- изменяет имя на новое

// const courses = ["HTML", "CSS", "JavaScript", "React"];

// const addCourse = name => courses.push(name);

// addCourse("C++");

// const removeCourse = name => {
//   const index = courses.indexOf(name);

//   if (index !== -1) {
//     courses.splice(index, 1);
//   }

//   return courses;
// };

// removeCourse("CSS");

// const updateCourse = (oldName, newName) => {
//   const index = courses.indexOf(oldName);

//   if (index !== -1) {
//     courses.splice(index, 1, newName);
//   }

//   return courses;
// };

// updateCourse("HTML", "Python");

// console.log(courses);

//--------3-10-

// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   console.log(key);
//   keys.push(key);

//   console.log(apartment[key]);

//   values.push(apartment[key]);
// }

//------3-14--------
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);
//   for (const key of keys) {
//     console.log(keys);
//     propCount += 1;
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//--------3-16-------
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const values = Object.values(salaries);
//   for (const value of values) {
//     totalSalary += value;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

//-----------3-17------
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (const el of colors) {
//   hexColors.push(el.hex);
//   rgbColors.push(el.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//-----------3-19---------
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const newMas = [];
//   for (const el of products) {
//     if (el[propName]) {
//       newMas.push(el[propName]);
//     }
//   }
//   return newMas;

//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues("quantity"));

//------3-20-----
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const el of products) {
//     if (
//       el.name === productName &&
//       el.name.toLocaleLowerCase() === productName.toLocaleLowerCase()
//     ) {
//       return el.quantity * el.price;
//     }
//   }
//   return "Такого продукта нет в наличии!";
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Радар"));
// console.log(calculateTotalPrice("радар"));
// console.log(calculateTotalPrice("адар"));

//-----------3-23---
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// console.log(highTomorrow);
// console.log(highIcon);

//----3-26--
// Пиши код ниже этой строки
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   })
// );

//-----3-30------
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";
//   // Пиши код ниже этой строки
//   const newFn = {
//     category: category,
//     priority: priority,
//     ...data,
//     completed: completed,
//   };

//   return newFn;
//   // Пиши код выше этой строки
// }
// console.log(makeTask({}));
// console.log(
//   makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" })
// );

//-----3-31----
// // Пиши код ниже этой строки
// function add(...args) {
//   let total = 0;
//   for (const el of args) {
//     total += el;
//   }
//   return total;
//   // Пиши код выше этой строки
// }
// console.log(add(12, 4, 11, 48));

//--------3-33------
// Пиши код ниже этой строки
function findMatches(array1, ...array2) {
  const matches = []; // Не изменяй эту строку
  for (const el of array2) {
    if (array1.includes(el)) {
      matches.push(el);
    }
  }
  // Пиши код выше этой строки
  return matches;
}
console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
