console.log("array_methods");
const array = [1, 2, 3, 4, 5];
console.log(array);

const mapArray = array.map((element, index, array) => {
  console.log(element);
  return element + 1;
});
console.log(mapArray);
console.log(mapArray === array);
//метод возвращет рез-том деят-ти новый массив

const filterArray = array.filter((element, index, array) => {
  return element > 1;
});
console.log(filterArray);
// вернет только отфильтр эл-ты

const arrayFind = array.find((element, index, array) => {
  return element > 1;
});
console.log(arrayFind);
//вернет первое совпадение

const forEachArray = array.forEach((element, index, array) => {
  return element;
});
console.log(forEachArray);
//не вернет условие - undefined

const arrayReduce = array.reduce((acc, element) => {
  console.log(acc, element);
  acc = acc + element;
  return acc;
  //   console.log(acc, element);
}, 0);
console.log(arrayReduce);
//жидает параметр аккумулятораб возвращает сумму

const arrayReduce2 = array.reduce((totalArray2, element) => {
  totalArray2.push(element);
  return totalArray2;
}, []);
console.log(arrayReduce2);

const filterArray1 = array.filter((element) => element > 1);
console.log(filterArray1);
// вернет только отфильтр эл-ты

const arrayFind1 = array.find((element) => element > 1);
console.log(arrayFind1);

const arrayReduce1 = array.reduce((totalArray, element) => {
  console.log(totalArray, element);
  totalArray.push(element);
  return totalArray;
}, []);
console.log(arrayReduce1);

const arrayReduce3 = array.reduce((acc, element) => (acc += element), 0);
console.log(arrayReduce3);

const students = [
  { name: "Max", gender: "male", age: 16 },
  { name: "Zlata", gender: "female", age: 32 },
  { name: "Misha", gender: "male", age: 27 },
];
const studentsName = students.map((student) => student.name);
console.log(studentsName);

const studentsGender = students.map((student) => student.gender);
console.log(studentsGender);

const studentsAge = students.map((student) => student.age);
console.log(studentsAge);

const students = [
  { name: "Max", gender: "male", age: 16 },
  { name: "Zlata", gender: "female", age: 32 },
  { name: "Misha", gender: "male", age: 27 },
];

const age = students.filter((item) => item.age > 16).map((item) => item.name);
console.log(age);

const girls = students.filter((item) => item.gender === "female");
console.log(girls);

const boys = students.filter((item) => (item.gender = "male"));
console.log(boys);

const averageAge =
  students.reduce((total, student) => {
    total += student.age;
    return total;
  }, 0) / students.length;

console.log(averageAge);

const averageAge2 = students.reduce((total, student, idx, arr) => {
  total += student.age / arr.length;
  return total;
}, 0);

console.log(averageAge2);

const fruit = ["watermelon", "peach", "strawberry", "grape"];

class IceCream {
  constructor(fruit, price = 20) {
    this.name = `${fruit}-ice`;
    this.price = price;
  }
}

const iceCreams = [];

fruit.forEach((item) => {
  iceCreams.push(new IceCream(item));
});

console.table(iceCreams);

const fruitObj = [
  { productName: "watermelon", price: 15 },
  { productName: "peach", price: 30 },
  { productName: "strawberry", price: 20 },
  { productName: "grape", price: 25 },
];

const iceCreams2 = [];

fruitObj.forEach((item) => {
  const { productName: name, price } = item;
  iceCreams2.push(new IceCream(name, price));
});

console.table(iceCreams2);
