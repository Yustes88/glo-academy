"use strict";

// Lesson05
const rollback = 28;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  let screens;
  let adaptive;

  screens = prompt(
    "Какие типы экранов нужно разработать?",
    "Простые, Сложные, Интерактивные"
  );

  adaptive = confirm("Нужен ли адаптив на сайте?");

  return { screens, adaptive };
};

const askServicePrice = function () {
  let price;

  do {
    price = prompt("Сколько будет стоить данная работа?");
  } while (!isNumber(price));

  return +price;
};

const getAllServicePrices = function () {
  let service1;
  let service2;
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
  return Number(screenPrice) + extraPriceAll;
}

const getTitle = function () {
  let title;

  do {
    title = prompt("Как называется ваш проект?").trim();
  } while (!title);

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

const projectTitle = getTitle();
const { screens, adaptive } = asking();
const screenPrice = askServicePrice();
const allServicePrices = getAllServicePrices();
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
const rollbackMessage = getRollbackMessage(fullPrice);

console.log(showTypeOf(projectTitle));
console.log(showTypeOf(adaptive));

console.log("Title:", projectTitle);
console.log("Screens:", screens);
console.log("Adaptive:", adaptive);
console.log("Screen price:", screenPrice);
console.log("Services price:", allServicePrices);
console.log("Screen and services price together:", fullPrice);

console.log("Rollback message:", rollbackMessage);
console.log("Service percent price:", servicePercentPrice);
