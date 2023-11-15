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
            display.innerHtml = null;
            clear();
        }else if (i.value == "="){
            if(displayVal != undefined){
                secondNum = +displayVal;
                displayVal = operate(operation, firstNum, secondNum);
                firstNum = displayVal;
                display.innerHTML = Math.round(displayVal * 10000000000) / 10000000000;
                clear();
            }
        }else{
            setOperation(i.value);
        }
    });
};

function setOperation(sign){
    if(operation == ""){
        operation = sign;
        firstNum = +displayVal;
        displayVal = null;
        display.innerHTML = displayVal;
        console.log("working");
    }else{
        secondNum = +displayVal;
        displayVal = operate(operation, firstNum, secondNum);
        firstNum = +displayVal;
        secondNum = 0;
        display.innerHTML = Math.round(displayVal * 10000000000) / 10000000000;
        operation = sign;
        displayVal = null;
        console.log("other working");
    }
}

function clear(){
    displayVal = null;
    operation = "";
    // firstNum = 0;
    // secondNum = 0;
}