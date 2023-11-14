let firstNum = 0;
let secondNum = 0;
let operation = "";
let displayVal = null;
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
            (displayVal == null) ?  displayVal = i.value: displayVal += i.value;
            display.innerHTML = displayVal;
        }else if (i.value == "clear"){
            displayVal = null;
            display.innerHtml = null;
            operation = "";
            firstNum = 0;
            secondNum = 0;
        }else if (i.value == "="){
            secondNum = displayVal;
            console.log('idk');
            displayVal = operate(operation, firstNum, secondNum);
            firstNum = displayVal;
            display.innerHTML = displayVal;
        }else if (operation == ""){
            setOperation(i.value);
        }
    });
};

function setOperation(sign){
    operation = sign;
    firstNum = +displayVal;
    displayVal = null;
    display.innerHTML = displayVal;
    console.log("working");
}
