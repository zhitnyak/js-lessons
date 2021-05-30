// function checkStorage(available, ordered) {
//   // Пиши код ниже этой строки

//   if (ordered === 0) {
//     return "В заказе еще нет товаров";
//   } else if (ordered > available) {
//     return "Слишком большой заказ, на складе недостаточно товаров!";
//   }
//   return "Заказ оформлен, с вами свяжется менеджер";
//   // Пиши код выше этой строки
// }
// console.log(checkStorage(100, 50));

// // Стартовый код
// const fruits = ["яблоко", "слива", "груша", "апельсин"];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];
// console.table(fruits);

// Стартовый код
// const fruits = ["яблоко", "персик", "груша", "банан"];
// // Пиши код ниже этой строки
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits.length - 1;
// console.log(fruits[lastElementIndex]);
// console.log(fruits.length - 1);

// //----10------
// function splitMessage(message, delimeter) {
//   let words;
//   // Пиши код ниже этой строки

//   words = message.split(delimeter);

//   // Пиши код выше этой строки
//   return words;
// }
// console.log(splitMessage("Манго спешит на поезд", " "));

//------11-----

// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   message = "JavaScript у меня в крови";
//   pricePerWord = 20;
//   const totalPrice = message.length * pricePerWord;

//   return totalPrice;
//   // Пиши код выше этой строки
// }

// //----------16-------
// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки
//   // const total = secondArray.slice(0, 0, firstArray);
//   // Пиши код выше этой строки
//   const total = firstArray.concat(secondArray);
// }
// // console.log(total);
// console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3));

//---21---------
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   const longestWord = "";
//   let word = string.split(" ");

//   for (let i = 0; i < word.length; i += 1)
//     longestWord = word[i].length > longestWord.length ? word[i] : longestWord;

//   return longestWord;
// }

// console.log(findLongestWord("Google do a roll"));

// //----------22---------
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(14, 17));

// //----------23------
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const newMas = [];
//   for (i = 0; i <= numbers.length; i += 1)
//     if (numbers[i] > value) {
//       newMas.push(numbers[i]);
//     }
//   return newMas;
//   // Пиши код выше этой строки
// }

// // --------26---
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   for (const el of order) {
//     total += el;
//     console.log(total);
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// //------27---
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];
//   for (const el of numbers) {
//     const number = el;
//     console.log(number);
//     if (number > value) {
//       filteredNumbers.push(number);
//       console.log(filteredNumbers);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// //---29----
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   const masNew = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) masNew.push(i);
//   }
//   return masNew;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5));

// //----30------
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//------31---------
// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   // let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       // number = i;
//       // break;
//     }
//   }

//   return;
//   // Пиши код выше этой строки
// }
// console.log(findNumber(2, 6, 5));

//---------32--------
function includes(array, value) {
  // Пиши код ниже этой строки
  for (const el of array) {
    if (el === value) {
      return true;
    }
  }
  return false;
  // Пиши код выше этой строки
}
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    return GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    return SILVER_DISCOUNT;
  }
  // Change code above this line
  return discount;
}

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case "China":
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  // Change code above this line
  return message;
}
