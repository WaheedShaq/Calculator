let screen = document.querySelector('.screen');
let divideNumber = document.getElementById('#÷');
let addNumber = document.getElementById('#+');
let subtractNumber = document.getElementById('#-');
let multiplyNumber = document.getElementById('#*');
let clear = document.getElementById('clear');
clear.addEventListener('click', clearScreen);
let operators = document.querySelectorAll('#operator');
let equal = document.querySelector('#equal');
equal.addEventListener('click', calculate);
let number = document.querySelectorAll('#numbers');
let buttons = document.querySelectorAll('.calc-button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

function clearScreen() {
  screen.textContent = '';
}

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleNumber(e.target.textContent);
  });
});

operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.textContent);
  });
});

function handleNumber(number) {
  if (currentNumber.length <= 100) {
    currentNumber += number;
    screen.textContent = currentNumber;
  }
}

function calculate() {
  previousNumber = Number(previousNumber);
  currentNumber = Number(currentNumber);

  if (operator === '+') {
    previousNumber = previousNumber + currentNumber;
  } else if (operator === '-') {
    previousNumber = previousNumber - currentNumber;
  } else if (operator === '*') {
    previousNumber = previousNumber * currentNumber;
  } else if (operator === '÷') {
    previousNumber = previousNumber / currentNumber;
  }

  screen.innerHTML = previousNumber;
}

// function add(num1, num2) {
//   return num1 + num2;
// }

// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }

// operator.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     handleOperator(e.target.textContent);
//   });
// });

// function calculation(num1, num2, operator) {
//   if (operator.innerHTML === '+') {
//     screen.innerHTML = add(num1, num2);
//   }

//   if (operator.innerHTML === '-') {
//     screen.innerHTML = subtract(num1, num2);
//   }

//   if (operator.innerHTML === '*') {
//     screen.innerHTML = multiply(num1, num2);
//   }

//   if (operator.innerHTML === '÷') {
//     screen.innerHTML = divide(num1, num2);
//   }
// }

// function screenResult() {
//   screen.innerHTML = add(num1, num2);
// }

// screenResult();
