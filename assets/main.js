const buttons = document.querySelectorAll('button');
const buttonsL = buttons.length;
const operators = ['+', '-', 'x', '÷', '.'];
const result = document.querySelector('#result');
const math = document.querySelector('#math');
// listen all buttons
for (let i = 0; i <= buttonsL - 1; i += 1) {
  buttons[i].onclick = function cal(e) {
    const resultV = document.querySelector('#result').textContent;
    const buttonV = this.textContent;
    let mathV = document.querySelector('#math').textContent;
    const del = this.id;
    if (buttonV === 'C') {
      math.textContent = '';
      result.textContent = '';
      console.log(mathV);
    } else if (del === 'del') {
      if (resultV === '') {
        math.textContent = mathV.slice(0, resultV.length - 1);
      } else {
        result.textContent = '';
      }
    } else if (buttonV === '=') {
      mathV = mathV.replace(/x/g, '*').replace(/÷/, '/');
      result.textContent = '= ' + eval(mathV);
    } else if (operators.includes(buttonV)) {
      const lastCharMath = mathV[mathV.length - 1];
      if (resultV !== '') {
        math.textContent = result.textContent.slice(2) + buttonV;
        result.textContent = '';
      } else if (mathV !== '' && (operators.includes(lastCharMath) === false)) {
        math.textContent += buttonV;
      } else if (mathV === '' && buttonV === '-') {
        math.textContent += buttonV;
      } else if (lastCharMath === '.' && operators.includes(mathV)) {
        math.textContent += buttonV;
      }
    } else {
      const mathL = mathV.length;
      if (mathL < 19) {
        math.textContent += buttonV;
      } else {
        math.textContent += '';
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
    const isKey = () => /[0-9+\-x÷.]/.test(kValue);
    const isDigit = () => /[0-9]/.test(kValue);
    const isOp = () => /[+\-÷x.]/.test(kValue);
    console.log(kValue);
    if (isKey()) {
      if (math.textContent === '' && isOp() === true) {
        math.textContent += '';
      } else if (isOp()) {
        if (/[+\-÷x.]/.test(lastCharMath)) {
          math.textContent += '';
        } else if (resultV !== '') {
          if (/./.test(resultV) && kValue === '.') {
            result.textContent += '';
          } else {
            math.textContent = result.textContent.slice(2) + kValue;
            result.textContent = '';
          }
        } else {
          math.textContent += kValue;
        }
      } else if (isDigit() && resultV !== '') {
        math.textContent = kValue;
        result.textContent = '';
      } else {
        math.textContent += kValue;
      }
    } else if (kValue === 'Backspace') {
      if (resultV !== '') {
        result.textContent = '';
      } else {
        math.textContent = mathV.slice(0, resultV.length - 1);
      }
    } else if (kValue === 'Enter') {
      if (/[+\-/*.]/.test(mathV)) {
        result.textContent = '= ' + eval(mathV);
      } else {
        math.textContent += '';
      }
    }
  });
});
