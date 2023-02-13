// variables
let 
math = document.querySelector('#math'),
value = document.querySelector('#result-value'),
buttons = document.querySelectorAll('button'),
clear = document.querySelector('#clear'),
del = document.querySelector('#del'),
equal = document.querySelector('#equal'),
buttonsL = buttons.length;

const operators = '+-*/.', err1 = "önce sayı girmelisiniz";

document.onload = readyCal();
document.onload = calculator();

function readyCal(){
    math.innerHTML = '';
    value.innerHTML = '';
}


function calculator(){
    for(let i = 0; i < buttonsL; i++){
        buttons[i].addEventListener('click', function (){
            //if type a operator while screen is empty, it will show an message
            if (math.innerHTML == '' && operators.includes(buttons[i].innerHTML))
                math.innerHTML += err1;

            //if last character is an operator and you type an operator, it will show nothing
            else if (operators.includes(math.innerHTML[math.innerHTML.length - 1])  && operators.includes(buttons[i].innerHTML))
                math.innerHTML = math.innerHTML;

            //C button, clear the screen
            else if (buttons[i].innerHTML == clear.innerHTML){
                math.innerHTML = '';
                value.innerHTML = '';
            }

            // = button, calculate the result

            else if (buttons[i].innerHTML == equal.innerHTML)
                    value.innerHTML = calculate();

            // delete button, delete the last character of the screen one by one
            else if (buttons[i].innerHTML == del.innerHTML){
                math.innerHTML = math.innerHTML.slice(0, (math.innerHTML.length - 1));
                value.innerHTML = '';
            }
                
            //if type the operator while the screen is showing the error message, it will show nothinh
            else if(math.innerHTML == err1 && operators.includes(buttons[i].innerHTML))
                    math.innerHTML =  err1;
            
            else if(math.innerHTML == err1 && operators.includes(buttons[i].innerHTML) == false)
                math.innerHTML = buttons[i].innerHTML

            else{
                if(value.innerHTML != ''){
                    if(operators.includes(buttons[i].innerHTML)){
                        math.innerHTML = value.innerHTML + buttons[i].innerHTML; 
                        value.innerHTML = '';
                    }
                    else{
                        math.innerHTML = buttons[i].innerHTML;
                        value.innerHTML = '';
                    }
                        
                    
                }
                else
                    math.innerHTML += buttons[i].innerHTML;
            }
            
        })
    }
}

function calculate(){
    let result = Function("return " + math.innerHTML)();
    if(Number.isInteger(result))
        return result;
    else
        return result.toFixed(2);
}
