const buttons = document.querySelectorAll('button');
const buttonsL = buttons.length;
const operators = ['+', '-', 'x', '÷', '.'];

// listen all buttons
for (let i = 0; i <= buttonsL; i += 1) {
  buttons[i].onclick = function (e) {
    const result = document.querySelector('#result');
    const resultV = document.querySelector('#result').textContent;
    const math = document.querySelector('#math');
    let mathV = document.querySelector('#math').textContent;
    const buttonV = this.textContent;
    const del = this.id;

    if (buttonV === 'C') {
      math.textContent = '';
      result.textContent = '';
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
