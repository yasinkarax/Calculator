// variables
let 
math = document.querySelector('#math'),
value = document.querySelector('#result-value'),
buttons = document.querySelectorAll('button'),
clear = document.querySelector('#clear'),
del = document.querySelector('#del'),
equal = document.querySelector('#equal'),
buttonsL = buttons.length;

const 
operators = '+-*/.', 
err1 = "önce sayı girmelisiniz", 
empty = '';

document.onload = readyCal();
document.onload = calculator();

function readyCal(){
    math.innerHTML = empty;
    value.innerHTML = empty;
}

//calculate the result
function calculate(){
    let result = Function("return " + math.innerHTML)();
    if(Number.isInteger(result))
        return result;
    else
        return result.toFixed(2);
}

// returns the buttons's innerHTML
let buttonInner = i => buttons[i].innerHTML;


function calculator(){
    for(let i = 0; i < buttonsL; i++){
        buttons[i].addEventListener('click', function (){
            //if type a operator while screen is empty, it will show an message
            if (math.innerHTML == empty && operators.includes(buttonInner(i)))
                math.innerHTML += err1;

            //if last character is an operator and you type an operator, it will show nothing
            else if (operators.includes(math.innerHTML[math.innerHTML.length - 1])  && operators.includes(buttonInner(i)))
                math.innerHTML = math.innerHTML;

            //C button, clear the screen
            else if (buttonInner(i) == clear.innerHTML){
                math.innerHTML = empty;
                value.innerHTML = empty;
            }

            // = button, calculate the result

            else if (buttonInner(i) == equal.innerHTML)
                    value.innerHTML = calculate();

            // delete button, delete the last character of the screen one by one
            else if (buttonInner(i) == del.innerHTML){
                math.innerHTML = math.innerHTML.slice(0, (math.innerHTML.length - 1));
                value.innerHTML = empty;
            }
                
            //if type the operator while the screen is showing the error message, it will show nothinh
            else if(math.innerHTML == err1 && operators.includes(buttonInner(i)))
                    math.innerHTML =  err1;
            
            else if(math.innerHTML == err1 && operators.includes(buttonInner(i)) == false)
                math.innerHTML = buttonInner(i)

            else{
                if(value.innerHTML != empty){
                    if(operators.includes(buttonInner(i))){
                        math.innerHTML = value.innerHTML + buttonInner(i); 
                        value.innerHTML = empty;
                    }
                    else{
                        math.innerHTML = buttonInner(i);
                        value.innerHTML = empty;
                    }
                        
                    
                }
            else
                math.innerHTML += buttonInner(i);
            }
            
        })
    }
}
