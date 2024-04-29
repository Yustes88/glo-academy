'use strict'
// Lesson07

const appData = {
  title: '',
  screenPrice: 0,
  screens: [],
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  allServicePrices: 0,
  rollbackMessage: '',
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  getTitle: function () {
    let title

    do {
      title = prompt('Как называется ваш проект?')
      console.log(title, typeof title)
    } while (!title || appData.isNumber(title))

    appData.title = title
      .trim()
      .split('')
      .map((letter, index) => {
        if (index === 0) {
          return letter.toUpperCase()
        }
        return letter.toLowerCase()
      })
      .join('')
  },
  getFullPrice: function () {
    appData.fullPrice = Number(appData.screenPrice) + appData.allServicePrices
  },
  getRollbackMessage: function () {
    let message = ''
    if (appData.fullPrice > 30000) {
      message = 'Даем скидку в 10%'
    } else if (appData.fullPrice > 15000) {
      message = 'Даем скидку в 5%'
    } else if (appData.fullPrice <= 0) {
      message = 'Что-то пошло не так'
    } else {
      message = 'Скидка не предусмотрена'
    }
    appData.rollbackMessage = message
  },
  getServicePercentPrices: function () {
    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100),
    )
  },
  addPrices: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },
  logger: function () {
    console.log('Title:', appData.title)
    console.log('Screens:', appData.screens)
    console.log('Adaptive:', appData.adaptive)
    console.log('Screen price:', appData.screenPrice)
    console.log('Services price:', appData.allServicePrices)
    console.log('Screen and services price together:', appData.fullPrice)

    console.log('Rollback message:', appData.rollbackMessage)
    console.log('Service percent price:', appData.servicePercentPrice)

    for (let key in appData) {
      console.log(`${key}: ${appData[key]}`)
    }
  },
  asking: function () {
    appData.getTitle()

    for (let i = 0; i < 2; i++) {
      let name
      let price = 0

      do {
        name = prompt('Какие типы экранов нужно разработать?')
      } while (!name || appData.isNumber(name))

      do {
        price = prompt('Сколько будет стоить данная работа?')
      } while (!appData.isNumber(price))

      appData.screens.push({id: i, name: name, price: price})
    }

    for (let i = 0; i < 2; i++) {
      let name
      let price = 0

      do {
        name = prompt('Какой дополнительный тип услуги нужен?')
      } while (!name || appData.isNumber(name))

      do {
        price = prompt('Сколько это будет стоить?')
      } while (!appData.isNumber(price))

      appData.services[name] = +price
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?')
  },
  start: function () {
    appData.asking()
    appData.addPrices()
    appData.getFullPrice()
    appData.getServicePercentPrices()
    appData.getRollbackMessage()

    appData.logger()
  },
}

appData.start()
