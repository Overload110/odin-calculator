let firstNum = 0;
let secondNum = 0;
let operation = "";
let displayVal = "";
let btns = document.querySelectorAll('input');
let display = document.getElementById("display");

function operate(operation, a, b){
    switch(operation){
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "÷":
            return a / b;
    }
};

for(let i of btns){
    i.addEventListener("click", function() {
        if(i.className == "number"){
            displayVal += i.value;
            display.innerHTML = displayVal;
        }else{
            
        }
    });
};
