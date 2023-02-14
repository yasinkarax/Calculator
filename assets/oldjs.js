// variables
let screen, 
    button,
    buttonLen,
    ball,
    clear,
    del,
    div,
    multi,
    seven,
    eight,
    nine,
    min,
    four,
    five,
    siz,
    add,
    one,
    two,
    three,
    equal,
    zero,
    startEnd,
    number,
    mathSymbol,
    idEqual,
    result,
    dot;


// function to start cal
function startCal(){
    //variables
    ball = document.getElementById('ball');
    button = document.getElementsByTagName('buton');
    buttonLen = button.length;
    startEnd = document.getElementById('start-end');

    //the ball will be right side 
    // ball.style.left = "none";
    // ball.style.right = "0";
    // ball.style.removeProperty('left');
    ball.style.marginLeft = "40px";

    // the background color of the ball is will be rgb(33 250 18)
    ball.style.backgroundColor = "#0ee71f ";

    // the new value of onclick attribute of start-end button 
    // is will be endCal() func
    startEnd.setAttribute('onclick', 'endCal()');

    let i = 0;
    for(; i < buttonLen; i++){
        button[i].addEventListener('mouseover', function (){
            button[i].style.cursor = "pointer";
        })
    }

    showColor();
    showButtonValue();

}



// function to show color of the buttons when the call starts
function showColor(){
    //variables
    number = document.getElementsByClassName('number');
    clear = document.getElementById('clear');
    del = document.getElementById('del');
    mathSymbol = document.getElementsByClassName('math-symbol');
    screen = document.getElementById('screen');

    //del and clear style change
    del.style.color = "#78858e";
    clear.style.color = "#78858e";

    
    //to show color of numbers
    let numberLen = number.length;
    for(let i = 0; i < numberLen; i++){
        number[i].style.color = '#24aaff';
    }

    //to show color of math symbols
    let mathSymbolLen = mathSymbol.length;
    for(let i = 0; i < mathSymbolLen; i++){
        mathSymbol[i].style.backgroundColor = '#1991ff';
    }
    
    
    screen.style.backgroundColor = "#96c6f3";
    screen.style.border = "1px solid yellow";
}

//function to show value of buttons on the screen when start the func
function showButtonValue(){
    // variables
    math = document.getElementById('math');
    idEqual = document.getElementById('idEqual');
    math.innerHTML = "";
    button = document.getElementsByTagName('button');
    buttonLen = button.length;
    del = document.getElementById('del');
    result = document.getElementById('result');
    add = document.getElementById('add');
    div = document.getElementById('div');
    multi = document.getElementById('multi');
    sub = document.getElementById('sub');
    dot = document.getElementById('dot');
    screen =  document.getElementById('screen');
    

        for(var a = 0; a < buttonLen; a++){
            button[a].addEventListener('click', buttonValue(a));
        }

        
        function buttonValue(x){
            switch(button[x].innerHTML){
                case "C":
                    math.innerHTML = "";
                    result.innerHTML = "";
                break;

                case del.innerHTML:
                    if (math.innerHTML == ""){

                    }
                    else if(result.innerHTML != "") result.innerHTML = "";
                    
                    else 
                        math.innerHTML = math.innerHTML.slice(0, math.innerHTML.length -1);
                    
                break;
                
                case idEqual.innerHTML:
                    math.innerHTML += "";
                    calculate();
                break;
                
                // case of add
                case add.innerHTML:
                    if(math.innerHTML == "")
                        math.innerHTML += "";
                    
                    
                    else if (screen.style.backgroundColor == "#2d3037"){
                        math.innerHTML = "";
                        result.innerHTML = "";
                    }
                
                    else if(math.innerHTML[math.innerHTML.length - 1] == "+")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "-")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "*")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "/")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == ".")
                        math.innerHTML += "";
                    
                    else if(result.innerHTML != ""){
                        math.innerHTML = result.innerHTML + "+";
                        result.innerHTML = "";
                    }
                        
                    else
                        math.innerHTML += "+";

                break;

                // case of sub
                case sub.innerHTML:
                    if(math.innerHTML == "")
                        math.innerHTML += "";
                
                    else if(math.innerHTML[math.innerHTML.length - 1] == "-")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "+")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "*")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "/")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == ".")
                        math.innerHTML += "";
                    
                    else if(result.innerHTML != ""){
                        math.innerHTML = result.innerHTML + "-";
                        result.innerHTML = "";
                    }
                        
                    else
                        math.innerHTML += "-";

                break;
                
                // case of div
                case div.innerHTML:
                    if(math.innerHTML == "")
                        math.innerHTML += "";
                
                    else if(math.innerHTML[math.innerHTML.length - 1] == "-")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "+")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "*")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "/")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == ".")
                        math.innerHTML += "";
                    
                    else if(result.innerHTML != ""){
                        math.innerHTML = result.innerHTML + "/";
                        result.innerHTML = "";
                    }
                        
                    else
                        math.innerHTML += "/";

                break;

                // case of multi
                case multi.innerHTML:
                    if(math.innerHTML == "")
                        math.innerHTML += "";
                
                    else if(math.innerHTML[math.innerHTML.length - 1] == "-")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "+")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "*")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "/")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == ".")
                        math.innerHTML += "";
                    
                    else if(result.innerHTML != ""){
                        math.innerHTML = result.innerHTML + "*";
                        result.innerHTML = "";
                    }
                        
                    else
                        math.innerHTML += "*";

                break;
                
                // case of dot
                case dot.innerHTML:
                    if(math.innerHTML[math.innerHTML.length - 1] == "-")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "+")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "*")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == "/")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML[math.innerHTML.length - 1] == ".")
                        math.innerHTML += "";
                    
                    else if(math.innerHTML == "")
                        math.innerHTML += ".";
                    
                    else if(result.innerHTML != ""){
                        math.innerHTML = "" + result.innerHTML + ".";
                        result.innerHTML = "";
                    }
                    else if(math.innerHTML[math.innerHTML.length - 2] == ".")
                        math.innerHTML += "";
                    
                    else
                        math.innerHTML += ".";

                break;
                

                default:
                    math.innerHTML += button[x].innerHTML;
                    if(result.innerHTML != "")
                        math.innerHTML = "" +button[x].innerHTML;
                        result.innerHTML = "";


                    
            }
        }

    
    
}

//function to close cal
function endCal(){
    //variables
    button = document.getElementsByTagName('button');
    buttonLen = button.length;
    number = document.getElementsByClassName('number');
    clear = document.getElementById('clear');
    del = document.getElementById('del');
    mathSymbol = document.getElementsByClassName('math-symbol');
    ball = document.getElementById('ball');
    math = document.getElementById('math');
    startEnd = document.getElementById('start-end');
    //the ball will be left side
    //ball.style.left = "0";
    ball.style.marginLeft = "0";

    // the background color of the ball is will be red
    ball.style.backgroundColor = "red";

    // the new value of onclick attribute is will be startCal()
    startEnd = document.getElementById('start-end');
    startEnd.setAttribute('onclick', 'startCal()');

    //ending cal 
    math.innerHTML = "";
    result.innerHTML = "";
    //to remove color of buttons
    let numberLen = number.length;
    for(let i = 0; i < numberLen; i++){
        number[i].style.color = null;
    }

    let mathSymbolLen = mathSymbol.length;
    for(let i = 0; i < mathSymbolLen; i++){
        mathSymbol[i].style.backgroundColor = null;
    }
    
    del.style.color = null;
    clear.style.color = null;

    
    screen.style.backgroundColor = "#2d3037";
    screen.style.border = "";



    for(let i = 0; i < buttonLen; i++){
        button[i].removeEventListener('click', buttonValue)
    }
}


// function to calculate the result
function calculate(){
    let resultCalculate = Function("return " + math.innerHTML)();
    math.innerHTML += " =";
    result.innerHTML = resultCalculate;
}
