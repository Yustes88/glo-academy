"use strict";

/*const title = "Glo Academy";
const screens = "Простые, Сложные, Интерактивные";
const screenPrice = 1000;
const fullPrice = 1000000;
const adaptive = true;

// alert("This is a first alert message");
console.log("this is a first console text");

// console.log(
  //   `Title type is ${typeof title}, full price type is ${typeof fullPrice}, adaptive type is ${typeof adaptive}`
  // );
  
  console.log(screens.length);
  
  // console.log("Стоимость вёрстки экранов " + screenPrice + " рублей/долларов/гривен/юани"); или
  console.log(
    `Стоимость вёрстки экранов ${screenPrice} рублей/долларов/гривен/юани`
  );
  
  // console.log("Стоимость разработки сайт " + fullPrice + " рублей/долларов/гривен/юани"); или
  console.log(
    `Стоимость разработки сайта ${fullPrice} рублей/долларов/гривен/юани`
  );

  console.log(screens.toLowerCase().split(" "));
  
  console.log(fullPrice * (rollback / 100) + "%");
  */

// Lesson03
const rollback = 28;
const title = prompt("Как называется ваш проект?");

const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);

const screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");

const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const fullPrice = screenPrice + servicePrice1 + servicePrice2;

const servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback / 100));

console.log(servicePercentPrice);

switch (true) {
  case fullPrice > 30000:
    console.log("Даем скидку в 10%");
    break;
  case fullPrice > 15000 && fullPrice < 30000:
    console.log("“Даем скидку в 5%");
    break;
  case fullPrice < 0:
    console.log("Что то пошло не так");
    break;
  default:
    console.log("Total price либо 0, либо 15000, либо 30000, либо не число");
}
