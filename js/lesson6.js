//=========6-1========
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки
//   orderedItems.forEach(function (number, i) {
//     totalPrice += orderedItems[i];
//   });

//   // Пиши код выше этой строки
//   return totalPrice;
// }
// console.log(calculateTotalPrice([164, 48, 291]));

//=========6-2=====
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки
//   numbers.forEach(function (number, i) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//=====6-3=======
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки
//   firstArray.forEach(function (el, i) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   });
//   return commonElements;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

//=========6-5=======
// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Пиши код выше этой строки
// console.log(calculateTotalPrice(3, 400));

//====6-6===========
// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// // Пиши код выше этой строки
// console.log(calculateTotalPrice([12, 85, 37, 4]));

//=========6-7====
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return filteredNumbers;
// };
// console.log(filterArray([1, 2, 3, 4, 5], 3));

//==========6-9====
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newArr = [];
//   numbers.forEach((i) => {
//     if (i % 2 === 0) {
//       i = i + value;
//     }
//     newArr.push(i);
//   });
//   return newArr;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

//======6-10=========
// const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);

//======6-12=====
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика"],
//   },
// ];
// // Пиши код ниже этой строки
// const genres = books.flatMap((book) => book.genres);
// console.log(genres);

//========6-13========
// Пиши код ниже этой строки
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];
// const getUserNames = (users) => users.map((el) => el.name);

// console.log(getUserNames(users));
// // Пиши код выше этой строки

//=======6-14====
// Пиши код ниже этой строки
// const getUserEmails = (users) => users.map((el) => el.email);
// console.log(getUserEmails(users));

// =======6-15====
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((namber) => namber % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

//======6-16=========
// const books = [
//   {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["приключения", "историческое"],
//   },
//   {
//     title: "На берегу спокойных вод",
//     author: "Роберт Шекли",
//     genres: ["фантастика", "мистика"],
//   },
//   {
//     title: "Красна как кровь",
//     author: "Ли Танит",
//     genres: ["ужасы", "мистика", "приключения"],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, array) => array.indexOf(genre) === index
// );
// console.log(allGenres);
// console.log(uniqueGenres);

//========6-17======
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Бернард Корнуэлл";
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//===6-17=======
// // const allGenres = books.flatMap((book) => book.genres);
// // const uniqueGenres = allGenres.filter(
// //   (genre, index, array) => array.indexOf(genre) === index

// const getUsersWithEyeColor = users.filter(
//   (users, color, array) => array.indexOf(eyeColor) === color
// );
// console.log(getUsersWithEyeColor);

//========6-18====
// const getUsersWithEyeColor = (users, color) =>
// users.filter(({ eyeColor }) => eyeColor === color);
// console.log(getUsersWithEyeColor(usersbrown));

//=======6-19=====
// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age > minAge && age < maxAge);
// };

//=====6-20======
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(({ friends }) => friends.includes(friendName));
// };

//========6-21=====
// const getFriend = (users) => {
//   const allUsers = users.flatMap((user) => user.friends);
//   console.log(allUsers);
//   return allUsers.filter((user, index, arr) => arr.indexOf(user) === index);
// };
// console.log(getFriend(users));

//=======6-37=======
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];

// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort((a, b) =>
//   a.author.localeCompare(b.author)
// );
// console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((a, b) =>
//   b.author.localeCompare(a.author)
// );
// console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((a, b) => a.rating - b.rating);
// console.log(sortedByDescentingRating);

//======6-38===
// const sortByAscendingBalance = (users) =>
//   [...users].sort((a, b) => b.balanse - a.balance);
// console.log(sortByAscendingBalance(users));

//=====6-39=====
// const sortByAscendingBalance = (users) =>
//   [...users]
//     .sort((a, b) => b.friends.length - a.friends.length);
// console.log(sortByAscendingBalance(users));

//=6-40========
// const sortByName = (users) =>
//   [...users].sort((a, b) => a.name.localeCompare(b.name));
// console.log(sortByName(users));

//======6-41========
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((a, b) => a.author.localeCompare(b.author))
//   .map((book) => book.author);
// console.log(names);

//=====6-42=====
// const getNamesSortedByFriendCount = (users) =>
//   [...users]
//     .sort((a, b) => a.friends.length - b.friends.length)
//     .map((el) => el.name);
// console.log(getNamesSortedByFriendCount(users));

//===6-43======
// const getSortedFriends = (users) =>
//   [...users]
//     .flatMap((user) => user.friends)
//     .filter((user, index, arr) => arr.indexOf(user) === index)
//     .sort((a, b) => a.localeCompare(b));
// console.log(getSortedFriends(users));

//======6-44=======
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);
// console.log(getTotalBalanceByGender(users, "male"));
// console.log(getTotalBalanceByGender(users, "female"));

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function (el) {
//   return el % 2;
// });
// console.log(result);

// var x = 7;
// // console.log(++x);
// console.log(x++);
// console.log(x);

// x = 0.1 + 0.2 - 0.2 !== 0.1;
// console.log(x);

// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);
