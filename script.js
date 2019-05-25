// Part I of assignment

let cars = [];
let registrationnumber;
let company;
let model;
let price;
let color;

function Car(registrationPlate, maker, model, price, color) {
  this.carPlate = registrationPlate;
  this.brand = maker;
  this.model = model;
  this.price = price;
  this.color = color;
};

function addCar() {
  registrationnumber = document.getElementById("registrationplate").value;
  company = document.getElementById("maker").value;
  model = document.getElementById("model").value;
  price = document.getElementById("price").value;
  color = document.getElementById("color").value;

  let newCar = new Car(registrationnumber, company, model, price, color);
  cars.push(newCar);
  console.table(cars);
};


// Part II and III of assignment

function searchCar() {
  let searchResult = [];
  let inputRegPlate = document.getElementById("mySearch").value;
  for (let i = 0; i < cars.length; i++) {

    if (inputRegPlate === cars[i].carPlate) {
      searchResult.push(cars[i].brand);
      searchResult.push(cars[i].model);
      console.table(searchResult);
      document.getElementById('demo1').innerHTML = `searchResult:Car Maker: ${searchResult[0]}, CarModel: ${searchResult[1]}`;
    }
    let discountPrice = cars[i].price;
  }
  carDiscount(discountPrice);

};

function carDiscount(discountPrice) {
  if (price > 20000) {
    discountPrice = price - price * 0.25;
  } else if (price < 5000) {
    discountPrice = price - price * 0.1;
  } else {
    discountPrice = price - price * 0.15;
  }
  document.getElementById("demo2").innerHTML = "Discount: " + discountPrice;
};
