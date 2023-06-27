// variables
const math = document.querySelector('#math');
const value = document.querySelector('#result-value');
const buttons = document.querySelectorAll('button');
const clearIn = document.querySelector('#clear').innerHTML;
const delIn = document.querySelector('#del').innerHTML;
const equalIn = document.querySelector('#equal').innerHTML;
const buttonsL = buttons.length;
const operators = '+-*/.';
const err = 'önce sayı girmelisiniz';
const empty = '';
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', ',', '.'];

function readyCal() {
  math.innerHTML = empty;
  value.innerHTML = empty;
}

// calculate the result
function calculate() {
  return Intl.NumberFormat('tr-TR').format(Function('return ' + math.innerHTML)());
}

// returns the buttons's value
const buttonInner = (i) => buttons[i].innerHTML;

document.addEventListener('keydown', (e) => {
  if (digits.includes(e.key)) {
    math.innerHTML += e.key;
  } else if (e.key === 'Enter') {
    value.innerHTML = calculate();
  } else {
    math.innerHTML += '';
  }
});

function calculator() {
  readyCal();
  for (let i = 0; i < buttonsL; i += 1) {
    buttons[i].addEventListener('click', () => {
      if (math.innerHTML === empty && operators.includes(buttonInner(i))) {
        math.innerHTML += err;
      } else if (operators.includes(math.innerHTML[math.innerHTML.length - 1])
          && operators.includes(buttonInner(i))) {
        math.innerHTML += '';
      } else if (buttonInner(i) === clearIn) {
        readyCal();
      } else if (buttonInner(i) === equalIn) {
        value.innerHTML = calculate();
      } else if (buttonInner(i) === delIn) {
        if (value.innerHTML !== empty) {
          value.innerHTML = empty;
        } else {
          math.innerHTML = math.innerHTML.slice(0, -1);
        }
      } else if (math.innerHTML === err && operators.includes(buttonInner(i))) {
        math.innerHTML = err;
      } else if (math.innerHTML === err && operators.includes(buttonInner(i)) === false) {
        math.innerHTML = buttonInner(i);
      } else if (value.innerHTML !== empty) {
        if (operators.includes(buttonInner(i))) {
          math.innerHTML = value.innerHTML.replaceAll('.', '') + buttonInner(i);
          value.innerHTML = empty;
        } else {
          math.innerHTML = buttonInner(i);
          value.innerHTML = empty;
        }
      } else {
        math.innerHTML += buttonInner(i);
      }
    });
  }
}

document.onload = calculator();
