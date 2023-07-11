// variables
const math = document.querySelector('#math');
const mathMaxL = 23;
const result = document.querySelector('#result-value');
const buttons = document.querySelectorAll('button');
const clearIn = document.querySelector('#clear').innerHTML;
const delIn = document.querySelector('#del').innerHTML;
const equalIn = document.querySelector('#equal').innerHTML;
const buttonsL = buttons.length;
const operators = ['+', '-', '*', '/', '.'];
const digits = '0123456789';
const err = 'Bir sayı girmelisiniz';
const empty = '';

function readyCal() {
  math.innerHTML = empty;
  result.innerHTML = empty;
}

// calculate the result
function calculate() {
  return Intl.NumberFormat('tr-TR').format(Function('return ' + math.innerHTML)());
}

// returns the buttons's result
const buttonInner = (i) => buttons[i].innerHTML;

// listens keyboard
document.addEventListener('keydown', (e) => {
  const k = e.key;
  if (operators.includes(k)) {
    if (math.innerHTML === empty && k !== '-') {
      math.innerHTML = err;
    } else if (operators.includes(math.innerHTML[math.innerHTML.length - 1])) {
      math.innerHTML += empty;
    } else if (math.innerHTML === err) {
      math.innerHTML += empty;
    } else {
      math.innerHTML += k;
    }
  } else if (digits.includes(k)
  || operators.includes(k)) {
    if (math.innerHTML.length > mathMaxL) {
      math.innerHTML += empty;
    } else {
      math.innerHTML += k;
    }
  } else if (k === 'Enter') {
    /*
    eğer başta - varsa ve geri kalanda operatör yoksa hesaplama
     */
    if (math.innerHTML[0] === '-') {
      if (math.innerHTML.length === 1) {
        math.innerHTML += empty;
      } else if (operators.some((ope) => math.innerHTML.substring(1, math.innerHTML.length - 1).includes(ope))) {
        result.innerHTML = calculate();
      }
    } else {
      result.innerHTML = calculate();
    }
  } else if (k === 'Backspace') {
    if (result.innerHTML !== empty) {
      result.innerHTML = empty;
    } else {
      math.innerHTML = math.innerHTML.substring(0, math.innerHTML.length - 1);
    }
  } else if (result.innerHTML !== empty) {
    math.innerHTML = k;
    result.innerHTML = empty;
  } else {
    math.innerHTML += empty;
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
        result.innerHTML = calculate();
      } else if (buttonInner(i) === delIn) {
        if (result.innerHTML !== empty) {
          result.innerHTML = empty;
        } else {
          math.innerHTML = math.innerHTML.slice(0, -1);
        }
      } else if (math.innerHTML === err && operators.includes(buttonInner(i))) {
        math.innerHTML = err;
      } else if (math.innerHTML === err
        && operators.includes(buttonInner(i)) === false) {
        math.innerHTML = buttonInner(i);
      } else if (result.innerHTML !== empty) {
        if (operators.includes(buttonInner(i))) {
          math.innerHTML = result.innerHTML.replaceAll('.', '') + buttonInner(i);
          result.innerHTML = empty;
        } else {
          math.innerHTML = buttonInner(i);
          result.innerHTML = empty;
        }
      } else {
        math.innerHTML += buttonInner(i);
      }
    });
  }
}

document.onload = calculator();
