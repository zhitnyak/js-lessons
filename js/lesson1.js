// console.log(Number(false))

// console.log('5'-3);
// console.log('5'+3);
// console.log('5' > 2);
// console.log('5'>true);
// console.log('5'<true);
// console.log('5'+true);
// console.log('5'==5);

// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));
// console.log(Boolean('false'));

// if(1){
// console.log(565)
// }

// if(''){
//     console.log('ЙОЙ')
//     }

// if(NaN){
//     console.log('ЙОЙ')
//     }

// const windowYou = true;
// const statusYou=true;
// const friendMe=true;
// const allVarint=friendMe || windowYou || !statusYou;
// console.log('allVarint', allVarint)

// const windowYou = false;
// const statusYou=true;
// const friendMe=false;
// const allVarint=friendMe || windowYou || !statusYou;
// console.log('allVarint', allVarint)

// const dedLine=3

// if (dedLine===0) {
//     console.log('today');
// } else if (dedLine===1){
//     console.log('tomorrow');
// } else if (dedLine===2){
//     console.log('after tomorrow');
// } else {
//     console.log('not soon');
// }

// switch(dedLine){
//     case 0:
//         console.log('today');
//         break;
//     case 1:
//         console.log('tomorrow');
//         break;
//     case 2:
//         console.log('after tomorrow');
//         break;
//     case 3:
//         console.log('not soon')
//         break;
// }

// const timeInMinutes = 123;
// const hours = Math.floor(timeInMinutes / 60);
// const minutes = timeInMinutes % 60;

// let shortTime;
// if (minutes > 0){
//     shortTime = `${hours} ч ${minutes} мин`
// }
// else {
//     shortTime = `${hours} ч`
// }
// console.log(shortTime);
// if (hours < 17) {
//     console.log('black')
// }
// else if (hours >=17 && hours <24) {
//     console.log('orange');
// }
// else {
//     console.log('red');
// }

// console.log(`5 дней или ${5 * 24} часов осталось до выходных`);

// function dayOff(days) {
//     if (days >=0) {
//     console.log(`${days} дней или ${days * 24} часов осталось до выходных`);
//     }
//     else {
//         console.log('undefined')
//     }
// }
// dayOff(5)
// dayOff(2)
// dayOff(-2)

// function dayOff(days) {
//     if (days >=0) {
//         return `${days} дней или ${days * 24} часов осталось до выходных`
//     }
//     else {
//         return'undefined'
//     }
// }
// const variant=dayOff(10);
// console.log(variant)
// console.log(dayOff(7))

// console.log('2'>'111')
// console.log('е'>'а')

// let value = 0;
// let toString = String (value);
// console.log (toString, typeof (toString));

// toString = value + '';
// console.log (toString);

// value = 'qewwt';
// let toNumber = Number(value);
// console.log(toNumber);
// toNumber = +value;
// console.log(toNumber);

// value = '456' ;
// toNumber = parseInt(value);
// console.log(toNumber);

// value = '' ;
// console.log(Number(value));
let value = 1;
value = " ";
console.log(value.length);
console.log(value.trim()); //зачищает пробелы
console.log(Number(value.trim()));

value = true;
console.log(Number(value));

value = false;
console.log(Number(value));

value = null;
console.log(Number(value)); //что-то есть

value = undefined;
console.log(Number(value)); // нема ниче

value = undefined;
console.log(Boolean(value));

value = null;
console.log(Boolean(value));

value = "";
console.log(Boolean(value));

value = " ";
console.log(Boolean(value));

value = 0;
console.log(Boolean(value));

// value = 1;
// console.log(Boolean(value));

value = NaN;
console.log(Boolean(value));

value = Infinity;
console.log(Boolean(value));

value = Infinity;
console.log(typeof value);

// value = !!value;
let number = 1;
console.log(number);

// number = !number;
// console.log (number);

number = !!number;
console.log(number);

value = false;
console.log(value);
console.log(Boolean(value));

// _____________Logical operators____________________

// &&

console.log(1 && true && "javascript"); //javascript
//         true  true       true

console.log(0 && true && "javascript");
//         false

console.log(true && 0 && "javascript");
//         true   false

console.log(1 || true || "javascript"); //1
//        true

console.log(0 || false || null); //null
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

let day = "Saturday";
if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("workDay");
} else {
  console.log("dayOff");
}

switch (day) {
  case "Monday":
    console.log(`${day} - workDay`);
    break;
  case "Tuesday":
    console.log(`${day} - workDay`);
    break;
  case "Wednesday":
    console.log(`${day} - workDay`);
    break;
  case "Thursday":
    console.log(`${day} - workDay`);
    break;
  case "Friday":
    console.log(`${day} - workDay`);
    break;
  default:
    console.log(`${day} - dayOff`);
}

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(`${day} - workDay`);
    break;
  default:
    console.log(`${day} - dayOff`);
}
