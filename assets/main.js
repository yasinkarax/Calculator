const buttons = document.querySelectorAll('button');
const buttonsL = buttons.length;
const operators = ['+', '-', 'x', '÷', '.'];
const result = document.querySelector('#result');
const math = document.querySelector('#math');

function clearMath() {
  math.textContent = '';
}

function clearResult() {
  result.textContent = '';
}

function addButtonMath(value) {
  const kValue = value;
  math.textContent += kValue;
}

function addButtonResult(value) {
  const kValue = value;
  result.textContent += kValue;
}

function performO(value) {
  const op = value;
  result.textContent = '= ' + eval(op);
}

// listen all buttons
for (let i = 0; i <= buttonsL - 1; i += 1) {
  buttons[i].onclick = function cal(e) {
    const resultV = document.querySelector('#result').textContent;
    const buttonV = this.textContent;
    let mathV = document.querySelector('#math').textContent;
    const del = this.id;

    if (buttonV === 'C') {
      clearMath();
      clearResult();
    } else if (del === 'del') {
      if (resultV === '') {
        math.textContent = mathV.slice(0, resultV.length - 1);
      } else {
        clearResult();
      }
    } else if (buttonV === '=') {
      mathV = mathV.replace(/x/g, '*').replace(/÷/, '/');
      performO(mathV);
    } else if (operators.includes(buttonV)) {
      const lastCharMath = mathV[mathV.length - 1];
      if (resultV !== '') {
        math.textContent = result.textContent.slice(2) + buttonV;
        clearResult();
      } else if (mathV !== '' && (operators.includes(lastCharMath) === false)) {
        addButtonMath(buttonV);
      } else if (mathV === '' && buttonV === '-') {
        addButtonMath(buttonV);
      } else if (lastCharMath === '.' && operators.includes(mathV)) {
        addButtonMath(buttonV);
      }
    } else {
      const mathL = mathV.length;
      if (mathL < 19) {
        addButtonMath(buttonV);
      } else {
        addButtonMath('');
      }
    }
    e.preventDefault();
  };
}

// listen to all keys
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('keydown', (event) => {
    const kValue = event.key.replace(/[/]/, '÷').replace(/[*]/, 'x');
    const resultV = document.querySelector('#result').textContent;
    const mathV = document.querySelector('#math').textContent.replace(/[÷]/g, '/').replace(/[x]/g, '*');
    const lastCharMath = math.textContent[math.textContent.length - 1];
    const isKey = (testV) => /[0-9+\-x÷.]/.test(testV);
    const isDigit = (testV) => /[0-9]/.test(testV);
    const isOp = (testV) => /[+\-÷x.]/.test(testV);
    if (isKey()) {
      if (math.textContent === '' && isOp() === true) {
        addButtonMath('');
      } else if (isOp()) {
        if (/[+\-÷x.]/.test(lastCharMath)) {
          addButtonMath('');
        } else if (resultV !== '') {
          if (/./.test(resultV) && kValue === '.') {
            addButtonResult('');
          } else {
            math.textContent = result.textContent.slice(2) + kValue;
            clearResult();
          }
        } else {
          addButtonMath(kValue);
        }
      } else if (isDigit() && resultV !== '') {
        math.textContent = kValue;
        clearResult();
      } else {
        addButtonMath(kValue);
      }
    } else if (kValue === 'Backspace') {
      if (resultV !== '') {
        clearResult();
      } else {
        math.textContent = mathV.slice(0, resultV.length - 1);
      }
    } else if (kValue === 'Enter') {
      if (/[+\-/*.]/.test(mathV)) {
        performO(mathV);
      } else {
        addButtonMath('');
      }
    }
  });
});
