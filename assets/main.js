// variables
let 
math = document.querySelector('#math'),
value = document.querySelector('#result-value'),
buttons = document.querySelectorAll('button'),
buttonsL = buttons.length;

const operators = '+-*/.', err1 = "önce sayı girmelisiniz";

console.log(buttons)
document.onload = readyCal();
document.onload = calculator();

function readyCal(){
    math.innerHTML = '';
    value.innerHTML = '';
}


function calculator(){
    for(let i = 0; i < buttonsL; i++){
        buttons[i].addEventListener('click', function (){
            if (math.innerHTML == '' && operators.includes(buttons[i].innerHTML))
                math.innerHTML += err1;

            else if ( operators.includes(math.innerHTML[math.innerHTML.length - 1]) )
            
                console.log("operator")
            
            else
                math.innerHTML += buttons[i].innerHTML
            
        })
    }
}

    // console.log(buttons[2].innerHTML)
/*
// function to calculate the result
function calculate(){
    let x = eval(math.innerHTML.substring(1)).toFixed(2);
    if(x % 1 == 0)
        result.innerHTML = eval(math.innerHTML.substring(1));
    
    else 
        result.innerHTML = eval(math.innerHTML.substring(1)).toFixed(2);
}
*/
// calculate();
// console.log(typeof value)