const html = document.documentElement
const body = document.body
const priceInput = document.getElementById('price')
const initialInput = document.getElementById('initial')
const percent = document.querySelector('.inner-input__percent')
const rangers = document.querySelectorAll('.range')
const slider = document.querySelector('.wrapper-range__range');
const progress = document.querySelector('.wrapper-range__progress');


export {
  html,
  body,
  priceInput,
  initialInput,
  percent,
  rangers,
  slider,
  progress
}