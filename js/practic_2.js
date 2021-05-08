// let arr = ["Ivan", "Lyalya", "Ishtvan", "Olya"];
// const newArr = [];
// console.log(arr.length);
// newArr.push(...arr, "Pit");
// console.log(newArr.length);
// for (const el of newArr) {
//   // newArr.push(el);
//   const findName = "Ishtvan";
//   const changeName = "Georg";
//   if (newArr.includes(findName)) {
//     let index = newArr.indexOf(findName);
//     console.log(index);
//     newArr.splice(index, 1, changeName);
//   } else {
//     console.log("nema nixto");
//   }
// }
// console.log(newArr);

// const addArray = function (baseArray, newEl, findName, changeName) {
//   console.log(baseArray, newEl, findName, changeName);

//   const newArray = [...baseArray, newEl];
//   console.log(findName, changeName);
//   console.log(newArray);
//   let a = newArray.indexOf(findName);
//   console.log(a);
//   if (a >= 0) {
//     console.log(a);
//     newArray.splice(a, 1, changeName);
//   } else {
//     console.log("nema nixto");
//   }
//   return newArray;
// };
// const result = addArray(arr, "Pit", "Ishtvan", "Georg");
// console.log(result);

// Створити обєкт піци з полями і методами
// В обєкті має бути такі поля і методи:
// поле для збереження розміру піци
// поле для збереження списку добавок
// поле для збереження списку соусів
// метод для додавання добавки (Можна додати добавку якщо вона відсутня інакше показувати помилку)
// метод для додавання соусу (Можна додати соус якщо він відсутній інакше показувати, також помилка показувється якщо пробуємо видалити добавку, а там ще жодної немає)
// метод для видалення добавки (Можна видалити добавку якщо вона присутня в піці інакше показувати помилку, також помилка показувється якщо пробуємо видалити соус, а там ще жодного немає)
// метод для видалення соусу (Можна видалити соус якщо він присутній в піці інакше показувати помилку)
// метод для розрахунку загальної ціни піци (розмір + добавки + соуси) (ціна округлена до двох знаків після коми)
// метод для розрахунку загальної кількості калорій піци (розмір + добавки + соуси)
// метод який показує загальну інформацію про замовлення (ціну, калорії, список добавок і соусів) (Якщо піца валідна інакше показувати помилку)
// метод вибору розміру піци (Розмір піци можна змінити в будь-який момент)
// метод що показує час приготуванни в хвилинах в залежності від складності піци
// Метод валідації піци який поверне true якщо піца відповідає вимогам , а саме (вибраний розмір піци, є мінімум одна добавка, і мінімум один соус) інакше false (І виводить строку чого не вистачає (коржа, добавки, чи соусу)) (використовувати this)
// const SIZES = {
//   BIG: { price: 25, cal: 100, time: 15 },
//   SMALL: { price: 15, cal: 50, time: 7 },
//   MEDIUM: { price: 15, cal: 50, time: 7 },
// };
// const STUFFING = {
//   CHEESE: { price: 6.5, cal: 45, time: 2 },
//   BEACON: { price: 10, cal: 70, time: 6 },
//   TOMATO: { price: 12.1, cal: 4, time: 5 },
//   CHICKEN: { price: 9.3, cal: 30, time: 5.1 },
// };
// const SAUCES = {
//   MUSTARD: { price: 3, cal: 5, time: 1 },
//   KETCHUP: { price: 4.2, cal: 20, time: 1.5 },
//   BOLOGNESE: { price: 7.5, cal: 50, time: 3 },
// };
// // Створити всі методи і перевірити чи вони працюють

// const pizza = {
//   sizes: SIZES,
//   stuffing: STUFFING,
//   sauces: SAUCES,
//   _pizza: {
//     stuffing: [],
//     sauces: [],
//   },
//   get pizza() {
//     return this._pizza;
//   },

//   getStuffing(stuffing) {
//     const keys = Object.keys(this.stuffing);
//     for (let key of keys) {
//       if (key.toLowerCase() === stuffing.toLowerCase()) {
//         const { stuffing: myStuffing } = this._pizza;

//         return stuffing.includes(stuffing)
//           ? `${myStuffing} уже есть`
//           : myStuffing.push(stuffing);
//       }
//     }
//     return this._pizza;
//   },
//   getSauces(sauces) {
//     const keys = Object.keys(this.sauces);
//     for (let key of keys) {
//       const { sauces: mySauce } = this._pizza;

//       if (key.toLowerCase() === sauces.toLowerCase())
//         return mySauce.includes(sauces)
//           ? `${sauces} уже есть`
//           : mySauce.push(sauces);
//     }
//     return this._pizza;
//   },
//   removeStuffing(stuffing) {
//     stuffing = stuffing.toLowerCase();

//     const { stuffing: myStuffing } = this._pizza;

//     for (let i = 0; i < myStuffing.length; i++) {
//       let stuff = myStuffing[i].toLowerCase();
//       console.log(stuff);
//       if (stuff === stuffing) {
//         myStuffing.splice(i, 1);
//       }
//     }
//     return this._pizza;
//   },
//   removeSauces(sauces) {
//     sauces = sauces.toLowerCase();
//     console.log(this._pizza.sauces);

//     const { sauces: mySauces } = this._pizza;

//     for (let i = 0; i < this._pizza.sauces.length; i += 1) {
//       console.log(mySauces[i]);
//       let sauce = mySauces[i].toLowerCase();
//       if (sauce === sauces) {
//         mySauces.splice(i, 1);
//       }
//     }
//     // console.log(this._pizza);
//     return this._pizza;
//   },
// };
// pizza.getSauces("MUSTARD");
// pizza.removeSauces("MUSTARD");
// console.log(pizza.pizza);
