// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = "Jason";
// child.age = 27;
// consoole.log(parent.hasOwnProperty("surname"));
// console.log(parent.hasOwnProperty("heritage"));

// //---------5-3------
// function Car(brand, model, price) {
//   this.model = model;
//   this.brand = brand;
//   this.price = price;
// }

//---------5-5---------
// function Car({ brand, model, price }) {
//   this.model = model;
//   this.brand = brand;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   let message = `У автомобиля ${this.brand} ${this.model} цена ${this.price} заменена на ${newPrice}`;
//   this.price = newPrice;
//   return message;
// };

// const newCar = new Car({ brand: "Audi", model: "Q3", price: 6000 });
// console.log(newCar.getPrice());
// console.log(newCar.changePrice(5000));
// console.log(newCar.getPrice());

//---------5-6------
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
//   console.log(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   this.items.splice(this.items.indexOf(item), 1);
//   console.log(item);
// };
// // Storage.prototype.removeItem(item);
// // return item;
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");

//-------5-7-----
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// };
// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

//--------5-9------
// class Car {
//   brand;
//   model;
//   price;
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }));

//----------5-12------
// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//----5-15----
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice > Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

//-------5-16---
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     return (Car.#MAX_PRICE = price);
//   }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// //------5-19-----
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails = [];

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     if (this.blacklistedEmails.includes(email)) {
//       return true;
//     }
//     return false;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted("mango@mail.com")); //  false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

//=============================================================================================================================================
/* 1. Напиши класс User для создания пользователя со 
следующим свойствами:
a. username - имя, строка
b. age - возраст, число
c. numberOfPosts - кол-во постов, число
d. Класс ожидает 1 параметр - объект настроек с 
одноимёнными свойствами.
Добавь метод getInfo(), который, возвращает строку: 
Пользователю ${имя} ${возраст} лет и 
у него ${кол-во постов} публикаций. */

const User = function (userObj) {
  const { username, age, numberOfPosts } = userObj;
  this.username = username;
  this.age = age;
  this.numberOfPosts = numberOfPosts;

  this.getInfo = function () {
    // console.log(`Пользователю ${this.username} ${this.age} лет и
    // у него ${this.numberOfPosts} публикаций.`);
  };
};

// console.log(User.prototype);

User.prototype.getInfo = function () {
  console.log(`Пользователю ${this.username} ${this.age} лет и
    у него ${this.numberOfPosts} публикаций.`);
};

const user1 = new User({ username: "Игорь", age: 34, numberOfPosts: 10 });

// console.log(user1);

user1.getInfo();

const user2 = new User({ username: "Maksym", age: 38, numberOfPosts: 2 });
// console.log(user2.getInfo());
// -----------------

/* 2. Напиши класс Storage который создаёт объекты 
для управления складом товаров. 
При вызове будет получать один аргумент - начальный 
массив товаров, и записывать его в свойство items.
Добавь методы класса:
a. getItems() - возвращает массив товаров.
b. addItem(item) - получает новый товар и добавляет 
его к текущим.
c. removeItem(item) - получет товар и, если он есть, 
удаляет его из текущих. */

const Storage = function (itemsArr) {
  this.items = itemsArr;
};

Storage.prototype.getItem = function () {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  return this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
  const index = this.items.indexOf(item);

  if (this.items.indexOf(item) !== -1) {
    this.items.splice(index, 1);
  }

  return this.items;
};

const storage = new Storage(["Item1", "Item2", "Item3"]);

// console.log(storage.getItem());

// console.log(storage.addItem("Item4"));

// console.log(storage.getItem());

// console.log(storage.removeItem("Item2"));

// console.log(storage.getItem());

// -----------------

/* 3. Напиши класс Client который создаёт объект 
со свойствами login и email. 
Объяви приватные свойства #login и #email, 
доступ к которым сделай 
через геттер и сеттер login и email. */

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#email = email;
    this.#login = login;
  }

  get getClientData() {
    return {
      login: this.#login,
      email: this.#email,
    };
  }

  set changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

// const client = new Client("nickname", "test@test.ru");

// console.log(client.getClientData);

// client.changeEmail = "test1@test1.com";

// console.log(client.getClientData);

// console.log(client);

// -----------------

/* 4. Напиши класс Notes который управляет коллекцией 
заметок в свойстве items. 
Заметка это объект со свойствами text и priority. 
Добавь классу статическое свойство Priority, 
в котором будет храниться объект с приоритетами. 
Добавь методы addNote(note), removeNote(text) и 
updateNotePriority(text, newPriority). */

//TODO:updateNotePriority(text, newPriority) - дома

class Notes {
  constructor() {
    this.items = [];
  }

  static Priority() {
    return {
      HIGH: "high",
      LOW: "low",
    };
  }

  addNote(note) {
    return this.items.push(note);
  }

  removeNote(noteName) {
    const index = this.items.findIndex((item) => item.text === noteName);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  // updateNotePriority(text, newPriority) {}
}

const note1 = new Notes();

note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().HIGH });
note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note4", priority: Notes.Priority().HIGH });

// note1.removeNote("Note2");

// note1.updateNotePriority("Note3");

// console.log(note1.items);

// -----------------

/*
  5. Создать класс Worker у которого есть 
  свойства name, surname, age, position, salary.
     У класса Worker есть метод getSalary.
     Создать класс TopLevelWorker у которого есть 
     свойство hierarchyLevel и который 
     наследует класс Worker, добавляя метод getHierarchyLevel
     Реализовать задачу с помощью ES5 прототипов и ES6 классов
*/

const HIERARCHY_LEVEL = {
  TOP: "top",
  BOTTOM: "bottom",
};

const workerObj = {
  name: "Антон",
  surname: "Ефимов",
  age: 34,
  position: "FE разработчик",
  salary: 3000,
};

// ES5

const Worker = function (obj) {
  const { name, surname, age, position, salary } = obj;

  this.name = name;
  this.surname = surname;
  this.age = age;
  this.position = position;
  this.salary = salary;
};

Worker.prototype.getSalary = function () {
  return this.salary;
};

const TopLevelWorker = function (obj, hierarchyLevel) {
  Worker.call(this, obj);
  this.hierarchyLevel = hierarchyLevel;
};

TopLevelWorker.prototype = Object.create(Worker.prototype);
TopLevelWorker.prototype.constructor = TopLevelWorker;

const topLevelWorker1 = new TopLevelWorker(workerObj, HIERARCHY_LEVEL.TOP);
console.log(topLevelWorker1);
console.log(topLevelWorker1.getSalary());

// ES6

class Worker2 {
  constructor(obj) {
    const { name, surname, age, position, salary } = obj;

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.position = position;
    this.salary = salary;
  }

  getSalary() {
    // console.log(this.salary);
  }
}

class TopLevelWorker2 extends Worker2 {
  constructor(obj, hierarchyLevel) {
    super(obj);
    this.hierarchyLevel = hierarchyLevel;
  }
}

const topLvlWorker = new TopLevelWorker2(workerObj, HIERARCHY_LEVEL.TOP);

// console.log(topLvlWorker);
topLvlWorker.getSalary();
