"use strict";

// Lesson04
const rollback = 28;
const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
const adaptive = confirm("Нужен ли адаптив на сайте?");
const service1 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
const servicePrice2 = +prompt("Сколько это будет стоить?");

const showTypeOf = function (variable) {
  return `${variable}, ${typeof variable}`;
};

const getRollbackMessage = function (price) {
  if (price > 30000) {
    return "Даем скидку в 10%";
  } else if (price > 15000) {
    return "Даем скидку в 5%";
  } else if (price <= 0) {
    return "Что-то пошло не так";
  } else {
    return "Скидка не предусмотрена";
  }
};

const getAllServicePrices = function (price1, price2) {
  return price1 + price2;
};

function getFullPrice(screenPrice, extraPriceAll) {
  return screenPrice + extraPriceAll;
}

const getTitle = function (title) {
  return title
    .trim()
    .split("")
    .map((letter, index) => {
      if (index === 0) {
        return letter.toUpperCase();
      }
      return letter.toLowerCase(); // т.к. остальные с маленькой
    })
    .join("");
};

const getServicePercentPrices = function (fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
};

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

console.log(showTypeOf(title));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
