"use strict";

// Lesson05
const rollback = 28;

let screenPrice;
let service1;
let service2;

const title = prompt("Как называется ваш проект?");
const screens = prompt(
  "Какие типы экранов нужно разработать?",
  "Простые, Сложные, Интерактивные"
);
const adaptive = confirm("Нужен ли адаптив на сайте?");

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const askServicePrice = function () {
  do {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(screenPrice));

  return screenPrice;
};

const getAllServicePrices = function () {
  let totalSum = 0;

  for (let i = 0; i < 2; i++) {
    let serviceSum;

    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?");
    }

    do {
      serviceSum = prompt("Сколько это будет стоить?");
    } while (!isNumber(serviceSum));
    totalSum += +serviceSum;
  }

  return totalSum;
};

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

const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

// askServicePrice();

console.log(showTypeOf(title));
console.log(showTypeOf(adaptive));
console.log(screens);
console.log(getRollbackMessage(fullPrice));
console.log(servicePercentPrice);
