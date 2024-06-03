let firstNumber, secondNumber, operator, result;
let displayValue = document.getElementById("display").children[0];
let displayArray = [];

function add(firstNumber, secondNumber){
    console.log(`Adding: ${firstNumber} and ${secondNumber}.`);
    // displayArray.push(+firstNumber + +secondNumber);
    // displayValue.textContent = displayArray.join('');
    result = +firstNumber + +secondNumber;
    displayValue.textContent = result;
}

function subtract(firstNumber, secondNumber){
    console.log(`Subtracting: ${firstNumber} and ${secondNumber}.`);
    // displayArray.push(firstNumber - secondNumber);
    // displayValue.textContent = displayArray.join('');
    // result = displayValue.textContent;
    result = firstNumber - secondNumber;
    displayValue.textContent = result;
}

function multiply(firstNumber, secondNumber){
    console.log(`Multiplying: ${firstNumber} and ${secondNumber}.`);
    // displayArray.push(firstNumber * secondNumber);
    // displayValue.textContent = displayArray.join('');
    // result = displayValue.textContent;
    result = firstNumber * secondNumber;
    displayValue.textContent = result;
}

function divide(firstNumber, secondNumber){
    console.log(`Dividing: ${firstNumber} and ${secondNumber}.`);
    // displayArray.push(firstNumber / secondNumber);
    // displayValue.textContent = displayArray.join('');
    // result = displayValue.textContent;
    result = firstNumber / secondNumber;
    displayValue.textContent = result;
}

function operate(firstNumber, secondNumber, operator){
    switch (operator) {
        case "+":
            add(firstNumber, secondNumber);
            break;
        case "-":
            subtract(firstNumber, secondNumber);
            break;
        case "*":
            multiply(firstNumber, secondNumber);
            break;
        case "/":
            divide(firstNumber, secondNumber);
            break;                            
        default:
            break;
    }
    // if(reset){
    //     firstNumber = secondNumber = result = undefined;
    // }
    
}

//Chaining math isnt quite right
function updateDisplay(e){
    if(firstNumber !== undefined) displayArray = [];
    
    switch (e) {
        case "+":
        case "-":
        case "*":
        case "/":
            if(result !== undefined){
                console.log("YIPE");
                
                break;
            }
            if(operator === undefined){
                operator = e;
                firstNumber = displayValue.textContent;
                console.log("operator is:" + operator);
            }else if(operator !== undefined){
                // console.log(firstNumber, result);
                // if(result !== undefined)
                firstNumber = result;
                // console.log(firstNumber, result);
                // firstNumber = displayValue.textContent;
                console.log("Stringing the math");
                secondNumber = displayValue.textContent;
                operate(firstNumber, secondNumber, operator);
                operator = e;
            }
            break; 
        case "=":
            if(result !== undefined)firstNumber = result;
            secondNumber = displayValue.textContent;
            console.log("Doing math" + secondNumber);
            operate(firstNumber, secondNumber, operator);
            break;
        case "AC":
            firstNumber = secondNumber = operator = result = undefined;
            displayArray = [];
            displayValue.textContent = displayArray.join('');
            break;                                        
        default:
            displayArray.push(e);
            displayValue.textContent = displayArray.join('');
            break;
    }
    // console.log(result);
}

