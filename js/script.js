'use strict'
// Lesson09
const mainTitle = document.getElementsByTagName('h1')[0]

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]
const screenBtn = document.querySelector('.screen-btn')

const itemsPercent = document.querySelectorAll('.other-items.percent')
const itemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input[type="range"]')

const rangeValue = document.querySelector('.rollback span')

const totalInput = document.getElementsByClassName('total-input')

let screenBlocks = document.querySelectorAll('.screen')

const displayInputs = function (list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i])
  }
}

displayInputs(totalInput)

console.log(
  mainTitle,
  startBtn,
  resetBtn,
  screenBtn,
  itemsPercent,
  itemsNumber,
  inputRange,
  rangeValue,
  totalInput,
  screenBlocks,
)
