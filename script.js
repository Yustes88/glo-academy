"use strict";
// Lesson07

const appData = {
  title: "",
  screenPrice: 0,
  screens: "",
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  allServicePrices: "",
  rollbackMessage: "",
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getTitle: function () {
    let title;

    do {
      title = prompt("Как называется ваш проект?").trim();
    } while (!title);

    return (appData.title = title
      .trim()
      .split("")
      .map((letter, index) => {
        if (index === 0) {
          return letter.toUpperCase();
        }
        return letter.toLowerCase(); // т.к. остальные с маленькой
      })
      .join(""));
  },
  askServicePrice: function () {
    let price;

    do {
      price = prompt("Сколько будет стоить данная работа?");
    } while (!appData.isNumber(price));

    return (appData.screenPrice = +price);
  },
  getFullPrice: function () {
    return Number(appData.screenPrice) + appData.allServicePrices;
  },
  getAllServicePrices: function () {
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
      } while (!appData.isNumber(serviceSum));
      totalSum += +serviceSum;
    }

    return (appData.allServicePrices = totalSum);
  },
  getRollbackMessage: function () {
    if (appData.fullPrice > 30000) {
      return "Даем скидку в 10%";
    } else if (appData.fullPrice > 15000) {
      return "Даем скидку в 5%";
    } else if (appData.fullPrice <= 0) {
      return "Что-то пошло не так";
    } else {
      return "Скидка не предусмотрена";
    }
  },
  getServicePercentPrices: function (fullPrice, rollback) {
    return Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },
  logger: function () {
    console.log("Title:", appData.title);
    console.log("Screens:", appData.screens);
    console.log("Adaptive:", appData.adaptive);
    console.log("Screen price:", appData.screenPrice);
    console.log("Services price:", appData.allServicePrices);
    console.log("Screen and services price together:", appData.fullPrice);

    console.log("Rollback message:", appData.rollbackMessage);
    console.log("Service percent price:", appData.servicePercentPrice);

    for (let key in appData) {
      console.log(`${key}: ${appData[key]}`);
    }
  },
  asking: function () {
    appData.title = appData.getTitle();
    appData.screenPrice = appData.askServicePrice();
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.rollbackMessage = appData.getRollbackMessage();
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    appData.logger();
  },
};

appData.asking();
