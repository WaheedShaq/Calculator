let screen = document.querySelector('.screen');
let divideNumber = document.getElementById('#÷');
let addNumber = document.getElementById('#+');
let subtractNumber = document.getElementById('#-');
let multiplyNumber = document.getElementById('#*');
let operator = document.getElementById('#operator');
let number = document.getElementById('#numbers');

let total = 0;
let num1 = 5;
let num2 = 5;

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculation(num1, num2, operator) {
  if (operator.innerHTML === '+') {
    add(num1, num2);
  }

  if (operator.innerHTML === '-') {
    subtract(num1, num2);
  }

  if (operator.innerHTML === '*') {
    multiply(num1, num2);
  }

  if (operator.innerHTML === '÷') {
    divide(num1, num2);
  }
}

// function testScreen() {
//   screen.innerHTML = add(num1, num2);
// }

// testScreen();
