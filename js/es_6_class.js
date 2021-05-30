class BMW {
  constructor(color = "white") {
    this.engine = "v6";
    this.price = 10000;
    this.color = color;
    console.log("BMW");
  }
  getStart() {
    console.log("start");
  }
  getSop() {
    console.log("stop");
  }
}
const myCar1 = new BMW("red");
console.log(myCar1);

const myCar2 = new BMW();
console.log(myCar2);
