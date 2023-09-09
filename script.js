let screen = document.querySelector('.screen');
let clear = document.getElementById('clear');
let operators = document.querySelectorAll('#operator');
let equal = document.querySelector('#equal');
let number = document.querySelectorAll('#numbers');
let buttons = document.querySelectorAll('.calc-button');

let previousNumber = '';
let currentNumber = '';
let result = '';
let operator = '';

function calculate() {
  console.log((previousNumber = Number(previousNumber)));
  console.log((currentNumber = Number(currentNumber)));

  if (operator === '+') {
    result = Number(previousNumber) + Number(currentNumber);
  } else if (operator === '-') {
    result = Number(previousNumber) - Number(currentNumber);
  } else if (operator === '*') {
    result = Number(previousNumber) * Number(currentNumber);
  } else if (operator === '÷') {
    result = Number(previousNumber) / Number(currentNumber);
  }

  screen.textContent = result;
}

function clearScreen() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  screen.textContent = '0';
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (
      (btn.textContent >= 0 && btn.textContent <= 9) ||
      btn.textContent === '+' ||
      btn.textContent === '-' ||
      btn.textContent === '÷' ||
      btn.textContent === '*'
    ) {
      handleNumber(e.target.textContent);
    }
  });
});

operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    operator = e.target.textContent;
  });
});

function handleNumber(number) {
  if (currentNumber.length <= 100) {
    previousNumber += number;
    screen.textContent = previousNumber;
  }
}

clear.addEventListener('click', clearScreen);
equal.addEventListener('click', calculate);
