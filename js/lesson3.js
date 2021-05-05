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
// // Пиши код ниже этой строки
// function findMatches(array1, ...array2) {
//   const matches = []; // Не изменяй эту строку
//   for (const el of array2) {
//     if (array1.includes(el)) {
//       matches.push(el);
//     }
//   }
//   // Пиши код выше этой строки
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));

//--------3-34------
// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ["Последнее королевство", "Страж снов"],
//   getBooks() {
//     return "Возвращаем все книги";
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Обновляем книгу ${oldName} на ${newName}`;
//   },

//   // Пиши код выше этой строки
// };
// console.log(bookShelf.updateBook("Пески Дюны", "Дюна"));

//--------3-35--
// const bookShelf = {
//   books: ["Последнее королевство", "Мгла", "Страж снов"],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки
//     const bookIndex = this.books.indexOf(oldName);
//     console.log(oldName);
//     console.log(bookIndex);

//     this.books.splice(bookIndex, 1, newName);
//     console.log(bookShelf.books);
//     // Пиши код выше этой строки
//   },
// };
// console.log(bookShelf.updateBook("Мгла", "Хроники подземелий"));

//--------3-36----
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: [],
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.potions);

// //-3-37-------
// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   getPotions() {
//     return this.potions;
//   },
//   // Пиши код выше этой строки
// };
// console.log(atTheOldToad.getPotions());

//-----3-39--
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   removePotion(potionName) {
//     // Пиши код ниже этой строки
//     const findFn = this.potions.indexOf(potionName);
//     console.log(findFn);
//     return this.potions.splice(findFn, 1);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.removePotion("Зелье скорости"));

//----3-40-
// const atTheOldToad = {
//   potions: ["Зелье скорости", "Дыхание дракона", "Каменная кожа"],
//   updatePotionName(oldName, newName) {
//     // Пиши код ниже этой строки
//     const findIndex = this.potions.indexOf(oldName);
//     console.log(findIndex);
//     return this.potions.splice(findIndex, 1, newName);

//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));
// console.log(atTheOldToad);

//-----3-41-
// const atTheOldToad = {
//   potions: [
//     { name: "Зелье скорости", price: 460 },
//     { name: "Дыхание дракона", price: 780 },
//     { name: "Каменная кожа", price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         console.log(`Зелье ${newPotion.name} уже есть в инвентаре!`);
//         return;
//       }
//     }

//     return this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       let potion = this.potions[i];
//       if (potion.name === potionName) {
//         return this.potions.splice(i, 1);
//       }
//     }
//     return `Зелья ${potionName.name} нет в инвентаре!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (const value of this.potions) {
//       if (value.name === oldName) {
//         value.name = newName;
//       }
//     }
//     return `Зелья ${oldName} нет в инвентаре!`;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Зелье силы", price: 270 }));
// console.log(atTheOldToad.removePotion("Каменная кожа"));
// console.log(atTheOldToad.updatePotionName("Дыхание дракона", "Полиморф"));
// console.log(atTheOldToad.potions);

// Пиши код выше этой строки

//____________________________________________________________________________________
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };
// console.log(hotel);
// delete hotel.name;
// console.log(hotel); // {stars: 5, capacity: 100}

// delete hotel["stars"];
// console.log(hotel); // {capacity: 100}

//====================
// const key = "person";
// const getKey = function () {
//   return "age";
// };

// // Computed properties
// const object = {
//   [key]: "Mango",
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

//====================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// hotel.greet = function () {
//   console.log("Welcome!");
// };

// hotel.greet(); // Welcome!

//====================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity() {
//     this.capacity = 200;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(200);
// console.log(hotel.capacity); // 200
// console.log(hotel.name);

//==========================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log("Key: ", key);
// }

// /*
//  * Key: name
//  * Key: stars
//  * Key: capacity
//  */
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// for (const key in hotel) {
//   console.log("Value: ", hotel[key]);
// }

// /*
//  * Value: "Resort Hotel"
//  * Value: 5
//  * Value: 100
//  */

//=======================
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// console.log(Object.keys(hotel));
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// console.log(Object.values(hotel));
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
// console.table(Object.entries(hotel));

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// /*
//  * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
//  * Первый элемент это ключ свойства, второй это значение.
//  */
// const entries = Object.entries(hotel);
// console.log(entries);

// /*
//  * На каждой итерации по entries выберем первый элемент подмассива (ключ)
//  * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${entry[0]}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */

//++++++++++++
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tennis",
//   premium: true,
// };

// function changeUser(obj) {
//   obj.mood = "happy";
//   obj.hobby = "skydiving";
//   obj.premium = false;
//   const fn = Object.keys(obj);
//   for (const key of fn) {
//     console.log(`${key}:${obj[key]}`);
//   }

//   return obj;
// }

// console.log(changeUser(user));

// //++++++++++++++
// // 2) У нас есть объект, в котором хранятся
// // зарплаты нашей команды.
// // Напишите код для суммирования всех зарплат
// // и сохраните результат в переменной sum.
// // Должно получиться 390.
// // Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// console.log(typeof null);

// // falsy values - undefined, null, "", 0, NaN

// function sumSalaries(objSalaries) {
//   if (!sumSalaries) {
//     return 0;
//   }
//   console.log(objSalaries);
//   let sum = 0;
//   for (const el of Object.values(objSalaries)) {
//     sum += el;
//   }
//   return sum;
// }
// console.log(sumSalaries(salaries));

//+++++++++++++++++++++
// 3) Напишите ф-цию calcTotalPrice(stones, stoneName),
// которая принимает массив
// обьектов и строку с названием камня.
// Ф-ция считает и возвращает общую стоимость
// камней с таким именем, ценой и количеством из
// обьекта

const stones = [
  { name: "Изумруд", price: 1300, quantity: 4 },
  { name: "Бриллиант", price: 2700, quantity: 3 },
  { name: "Сапфир", price: 400, quantity: 7 },
  { name: "Щебень", price: 200, quantity: 2 },
  { name: "Щебень", price: 200, quantity: 2 },
  { name: "Щебень", price: 200, quantity: 2 },
];

function calcTotalPrice(stones, stoneName) {
  let sum = 0;
  for (const el of stones) {
    if (stones["name"] === stoneName) sum += el["price"] * el["quantity"];
  }
  // return sum;
  console.log(sum);
}
// console.log(calcTotalPrices(stones, "Щебень"));
//разница rest, this, когда применять

// 5) Напишите функцию, которая принимает
// объект и возвращает
// новый объект без указанного параметра

// Ожидаемый результат - ({ a: 1, b: 2 }, 'b') => { a: 1 }

const updateObj = (obj, ...removeKeys) => {
  let newObj = { ...obj };
  console.log(obj);
  console.log(removeKeys);
  for (const key of removeKeys) {
    console.log(key);
    console.log(newObj[key]);
    delete newObj[key];
  }

  return newObj;
};

console.log(updateObj({ a: 1, b: 2, c: 3 }, "b", "a", "g"));
