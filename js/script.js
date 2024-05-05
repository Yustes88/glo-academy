'use strict'
// Lesson12
const mainTitle = document.getElementsByTagName('h1')[0]

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')

const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input[type="range"]')

const rangeValue = document.querySelector('.rollback span')

const totalInput = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screenBlocks = document.querySelectorAll('.screen')

const appData = {
  title: '',
  screenPrice: 0,
  screens: [],
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  allServicePrices: 0,
  rollbackMessage: '',
  invalid: false,
  checkInputs: function () {
    const inputs = document.querySelectorAll(
      '.screen > .main-controls__input > input[type=text]',
    )
    appData.invalid = false

    inputs.forEach(input => {
      if (input.value === '') {
        appData.invalid = true
      }
    })
    console.log(inputs)
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
  showResult: function () {
    totalInput.value = appData.screenPrice
    totalCountOther.value =
      appData.servicePricesPercent + appData.servicePricesNumber
    fullTotalCount.value = appData.fullPrice
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
  addTitle: function () {
    document.title = mainTitle.textContent
  },
  addScreens: function () {
    screenBlocks = document.querySelectorAll('.screen')

    screenBlocks.forEach((screen, index) => {
      const select = screen.querySelector('select')
      const input = screen.querySelector('input')
      const selectName = select.options[select.selectedIndex].textContent

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * input.value,
      })
    })
  },
  addScreenBlock: function () {
    const cloneScreen = screenBlocks[0].cloneNode(true)

    screenBlocks[screenBlocks.length - 1].after(cloneScreen)
  },
  addServices: function () {
    itemsPercent.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const input = item.querySelector('input[type=text]')
      const label = item.querySelector('label')

      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value
      }
    })

    itemsNumber.forEach(function (item) {
      const check = item.querySelector('input[type=checkbox]')
      const input = item.querySelector('input[type=text]')
      const label = item.querySelector('label')

      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value
      }
    })
  },
  addPrices: function () {
    const result = appData.screens.reduce((total, screen1) => {
      return total + +screen1.price
    }, 0)
    appData.screenPrice = result

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key]
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100)
    }

    appData.fullPrice =
      Number(appData.screenPrice) +
      appData.servicePricesPercent +
      appData.servicePricesNumber
  },
  start: function () {
    appData.addScreens()
    appData.addServices()
    appData.addPrices()
    appData.showResult()
    // appData.getServicePercentPrices();
    // appData.getRollbackMessage();
    // appData.logger();
  },
  init: function () {
    appData.addTitle()

    startBtn.addEventListener('click', function () {
      appData.checkInputs()
      if (!appData.invalid) {
        console.log('click when invalid is true')
        appData.start()
      }
    })

    screenBtn.addEventListener('click', appData.addScreenBlock)
  },
}

appData.init()

// console.log(
//   mainTitle,
//   startBtn,
//   resetBtn,
//   screenBtn,
//   itemsPercent,
//   itemsNumber,
//   inputRange,
//   rangeValue,
//   totalInput,
//   screenBlocks
// );
