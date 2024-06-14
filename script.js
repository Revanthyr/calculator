function add(arg1,arg2){
    return arg1 + arg2;
}
function substract(arg1,arg2){
    return arg1-arg2;
}
function multiply(arg1,arg2){
    return arg1 * arg2;
}
function divide(arg1,arg2){
    return arg1/arg2;
}


let number1 = 0;
let number2 = 1;
let operator = "+";


function operate(num1,num2,op){
    if (op == "+"){
        return add(num1,num2)
    }
    else if (op == "-"){
        return substract(num1,num2)
    }
    else if (op == "/"){
        return divide(num1,num2)
    }
    else if (op == "*"){
        return multiply(num1,num2)
    }
}

let object = {
    value1: 0,
    operator:"",
    value2:0
}
let counter = 0;
let button =""
const body =document.querySelector("body");
const container = document.querySelector(".container");
const display = document.querySelector(".display");
display.textContent = "";
const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(button =>{
    button.addEventListener("click",()=>{
        if (display.textContent.length <25 && counter != 1){
            
        display.textContent = display.textContent.concat(button.textContent)}
        else if (counter == 1){
            display.textContent = button.textContent;
            counter +=1;
        }
    })
})

const operators = document.querySelectorAll(".operator");
operators.forEach(current =>{
    current.addEventListener("click",() => { 
        counter = 1
        object.operator = current.textContent;
        object.value1 = display.textContent;
    })
})
const equal = document.querySelector(".equals")
equal.addEventListener("click",a =>{
    counter = 1;
    object.value2 = display.textContent;
    display.textContent = operate(object.value1,object.value2,object.operator)
})


/* 
e
 ALTERNATVE

 WHEN NUMBER PRESSED => chnage the display text conent => if counter is 1 then dont concat and change counter to 2
 WHEN OPERATOR PRESSED => store the current text  content and the operator and set a counter to 1
 WHEN EQUAL PRESSED => store the current display text content and operate and reset counter to 0


*/

