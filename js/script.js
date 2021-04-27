// // // Базовый код
// // const pricePerItem = 3500;
// // const orderedQuantity = 4;
// // // Пиши код ниже этой строки
// // const totalPrice = pricePerItem * orderedQuantity;
// // console.log(totalPrice)

// // const pricePerDroid = 800;
// // const orderedQuantity = 6;
// // const deliveryFee = 50;
// // const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// // const message = `Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// // console.log(message)

// // function sayHi() {
// //     console.log('Привет, это моя первая функция!');
// //   }
// //   sayHi();

// // function calculateTotalPrice (orderedQuantity, pricePerItem) {
// //     // Пиши код ниже этой строки
// //     const totalPrice = orderedQuantity * pricePerItem;

// //     // Пиши код выше этой строки
// //     return totalPrice;
// //   }

// // function isAdult(age) {
// //   // Пиши код ниже этой строки
// //   const passed = isAdult >= 18;

// //   // Пиши код выше этой строки
// //   return passed;
// // }
// // console.log(passed)

// // for (let m=4; m>-16; m-=1) {
// //   console.log(m);
// // }
// // console.log('ЛЯ');

// // function isNumberInRange(start, end, number) {
// //   const isInRange = (number>=start && number<=end); // дополни эту строку

// //   return isInRange;
// // }
// // console.log(isNumberInRange(70, 100, 10));

// // function getDiscount(totalSpent) {
// //   const BASE_DISCOUNT = 0;
// //   const BRONZE_DISCOUNT = 0.02;
// //   const SILVER_DISCOUNT = 0.05;
// //   const GOLD_DISCOUNT = 0.1;
// //   let discount;
// //   // Пиши код ниже этой строки
// // if (totalSpent >= 50000) {
// //  discount = GOLD_DISCOUNT;}
// //   else if (totalSpent >= 20000 && totalSpent < 50000) {
// //     discount = SILVER_DISCOUNT;}
// //   else if (totalSpent >= 5000 && totalSpent < 20000) {
// //     discount = BRONZE_DISCOUNT;}
// //   else if (totalSpent < 5000){
// //     discount = BASE_DISCOUNT;}

// //   // Пиши код выше этой строки
// //   return discount;
// // }
// // console.log(getDiscount(46900));

// // function checkStorage(available, ordered) {
// //   let message;
// //   // Пиши код ниже этой строки

// //   message = (ordered > available) ? 'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';

// //   // Пиши код выше этой строки
// //   return message;
// // }
// // console.log(checkStorage(100, 200))

// //______26____
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Пиши код ниже этой строки
//   message =
//     ADMIN_PASSWORD === password
//       ? "Доступ разрешен"
//       : "Доступ запрещен, неверный пароль!";
//   // if (password === ADMIN_PASSWORD){
//   // message = 'Доступ разрешен.'
//   //} else {
//   //  message = 'Доступ запрещен, неверный пароль!'}
//   console.log(message);
//   // Пиши код выше этой строки
//   return message;
// }

// _________28____________;
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case null:
//       message = "Отменено пользователем!";
//       break;
//     case ADMIN_PASSWORD:
//       message = "Добро пожаловать!";
//       break;
//     default:
//       message = "Доступ запрещен, неверный пароль!";
//   }
//   return message;
// }

// ___________29__________;
// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case "Австралия":
//       message = `Доставка в ${country} будет стоить 170 кредитов`;
//       break;
//     case "Китай":
//       message = `Доставка в ${country} будет стоить 100 кредитов`;
//       break;
//     case "Чили":
//       message = `Доставка в ${country} будет стоить 250 кредитов`;
//       break;
//     case "Ямайка":
//       message = `Доставка в ${country} будет стоить 120 кредитов`;
//       break;
//     default:
//       message = "Извините, в вашу страну доставки нет";
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// // ______32__________

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }
// console.log(getSubstring("Привет мир", 8));

// ______33__________
function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + "...";
  }
  // Пиши код выше этой строки
  return result;
}
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//------------ 2 variant ------------
function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  message.length <= maxLength
    ? (result = message)
    : (result = message.slice(0, maxLength) + "...");
  // Пиши код выше этой строки
  return result;
}
console.log(formatMessage("Vestibulum facilisis purus nec", 20));

//___________34_________
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}
console.log(normalizeInput("Привет мир"));

//________36_____

function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  const normalizedInput = message.toLowerCase();
  result = normalizedInput.includes("spam") || normalizedInput.includes("sale");
  // Пиши код выше этой строки
  return result;
}
console.log(checkForSpam("Trust me, this is not a spam message"));
