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

document.onload = calculator();

function readyCal(){
    math.innerHTML = empty;
    value.innerHTML = empty;
}

//calculate the result
function calculate(){
        return Intl.NumberFormat('tr-TR').format(Function("return " + math.innerHTML)())
}

// returns the buttons's value
let buttonInner = i => buttons[i].innerHTML;


function calculator(){
    readyCal();
    for(let i = 0; i < buttonsL; i++){
        buttons[i].addEventListener('click', function (){
            if (math.innerHTML == empty && operators.includes(buttonInner(i)))
                math.innerHTML += err1;

            else if (operators.includes(math.innerHTML[math.innerHTML.length - 1])  && operators.includes(buttonInner(i)))
                math.innerHTML = math.innerHTML;

            else if (buttonInner(i) == clear.innerHTML)
                readyCal();


            else if (buttonInner(i) == equal.innerHTML)
                value.innerHTML = calculate();

            else if (buttonInner(i) == del.innerHTML)
                value.innerHTML = empty;
                
            else if(math.innerHTML == err1 && operators.includes(buttonInner(i)))
                    math.innerHTML =  err1;
            
            else if(math.innerHTML == err1 && operators.includes(buttonInner(i)) == false)
                math.innerHTML = buttonInner(i)

            else if(value.innerHTML != empty){
                    if(operators.includes(buttonInner(i))){
                        math.innerHTML = value.innerHTML.replaceAll('.', '') + buttonInner(i); 
                        value.innerHTML = empty;
                    }
                    else{
                        math.innerHTML = buttonInner(i);
                        value.innerHTML = empty;
                    }
            }
            else{
                math.innerHTML += buttonInner(i)
                
            }
                
        })
    }
}