const BMW = function (color = "white") {
  this.engine = "v6";
  this.price = 10000;
  this.color = color;
  console.log("BMW");
  // ТАК ДЕЛАТЬ НЕЛЬЗЯ
  this.acceleration = function () {
    console.log("7 sec");
  };
};
// ЧТОБЫ ДОБАВЛЯТЬ МЕТОДЫ ОЪЕКТАМ, КОТОРЫЕ СОЗДАНЫ ИЗ ЭТОЙ ФУНКЦИИ-КОНСТРУКТОРА
// ЗАПИСЫВАЕМ ЭТИ МЕТОДЫ В ЕГО СВ-ВО PROTOTYPE
// КАК ЭТО ПРОИСХОДИТ
console.log(BMW.prototype);
BMW.prototype.getStart = function () {
  console.log("наследуемый метод");
};
BMW.prototype.getStop = function () {
  console.log("наследуемый метод - 2");
};

const myCar1 = new BMW("red");
console.log(myCar1);

const myCar2 = new BMW();
console.log(myCar2);
