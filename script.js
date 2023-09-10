let screen = document.querySelector('.screen');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');
let operators = document.querySelectorAll('#operator');
let equal = document.querySelector('#equal');
let number = document.querySelectorAll('#numbers');
let buttons = document.querySelectorAll('.calc-button');

let num1 = '';
let num2 = '';
let result = '';
let operator = '';

// Main calculation function
function calculate() {
  num1 = Number(num1);
  num2 = Number(num2);
  console.log({ num1, num2, operator });

  if (operator === '+') {
    result = Number(num1) + Number(num2);
  } else if (operator === '-') {
    result = Number(num1) - Number(num2);
  } else if (operator === '*') {
    result = Number(num1) * Number(num2);
  } else if (operator === '÷') {
    result = Number(num1) / Number(num2);
  }

  screen.textContent = result;
  console.log(` Result is: ${result}`);
}
// Clears calculator screen
function clearScreen() {
  num1 = '';
  num2 = '';
  operator = '';
  screen.textContent = '0';
}
// Generate number 1 and an operator
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.textContent >= 0 && btn.textContent <= 9) {
      console.log(handleNumberOne(e.target.textContent));

      if (
        btn.textContent === '+' ||
        btn.textContent === '-' ||
        btn.textContent === '÷' ||
        btn.textContent === '*'
      ) {
        console.log(`Operator is${(operator = btn.textContent)}`);
      }
    }
  });
});
// Generate number 2
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (btn.textContent >= 0 && btn.textContent <= 9) {
      console.log(handleNumberTwo(e.target.textContent));
    }
  });
});

// Select operator
operators.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    handleOperator(e.target.textContent);
    // operator = e.target.textContent;
    // screen.textContent += operator;
  });
});

function handleNumberOne(number) {
  console.log(`handleNumberOne was called, input was ${num1} and ${number}`);
  if (num1.length <= 100) {
    num1 += Number(number);

    console.log(`output for handleNumberOne was ${num1}`);
    return (screen.textContent = num1);
  }

  // return num1;
}

function handleNumberTwo(number) {
  console.log(`handleNumberTwo was called, input was ${num2} and ${number}`);
  if (num2.length <= 100) {
    num2 += Number(number);

    console.log(`output for handleNumberTwo was ${num2}`);
    return (screen.textContent = num2);
  }
}

function handleOperator(op) {
  operator = op;
  num1 = num2;
  screen.textContent += num1 + ' ' + operator;
  num2 = '';
}

function handleDelete() {
  if (num2 !== '') {
    num2 = num2.slice(0, -1);
    screen.textContent = num2;
    if (num2 === '') {
      screen.textContent = '0';
    }
  }
  if (num2 === '' && num1 !== '' && operator === '') {
    num1 = num1.slice(0, -1);
    screen.textContent = num1;
  }
}

equal.addEventListener('click', calculate);
clear.addEventListener('click', clearScreen);
del.addEventListener('click', handleDelete);
