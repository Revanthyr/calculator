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


let number1 = 0
let number2 = 1
let operator = "+"

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
let button =""
const body =document.querySelector("body");
const container = document.querySelector(".container");
