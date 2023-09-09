let screen = document.querySelector('.screen');
let clear = document.getElementById('clear');
let operators = document.querySelectorAll('#operator');
let equal = document.querySelector('#equal');
let number = document.querySelectorAll('#numbers');
let buttons = document.querySelectorAll('.calc-button');

let num1 = '';
let num2 = '';
let result = '';
let operator = '';

function calculate() {
  console.log({ num1, num2, operator });
  num1 = Number(num1);
  num2 = Number(num2);

  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else if (operator === '÷') {
    result = Number(num1) / Number(num2);
  }

  console.log(result);
}

function clearScreen() {
  num1 = '';
  num2 = '';
  operator = '';
  screen.textContent = '0';
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.textContent >= 0 && btn.textContent <= 9) {
      console.log(handleNumberOne(e.target.textContent));

      console.log(handleNumberTwo(e.target.textContent));

      if (
        btn.textContent === '+' ||
        btn.textContent === '-' ||
        btn.textContent === '÷' ||
        btn.textContent === '*'
      ) {
        console.log((operator = btn.textContent));
      }
    }
  });
});

operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    operator = e.target.textContent;
  });
});

function handleNumberOne(number) {
  console.log(`handleNumber was called, input was ${num1} and ${number}`);
  if (num1.length <= 100) {
    num1 += Number(number);
    screen.textContent = num1;
  }
  console.log(`output for handleOne was ${num1}`);
}

function handleNumberTwo(number) {
  console.log(`handleNumberTwo was called, input was ${num2} and ${number}`);
  if (num2.length <= 100) {
    num2 += Number(number);
    screen.textContent = num2;
  }
  console.log(`output for handleTwo was ${num2}`);
}

equal.addEventListener('click', calculate);
clear.addEventListener('click', clearScreen);
