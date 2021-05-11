const readline = require("readline-sync");

var readlineSync = require("readline-sync");
var firstNum = readlineSync.questionInt("Please enter your first number: ");
var secondNum = readlineSync.questionInt("Please enter your second number: ");
var selectOperator = readlineSync.question("Please enter the operation to perform: ");

function addition(num1, num2){
    return (num1 + num2);
}


function calculator(userNumber1, userNumber2, selectOperator){
    if (selectOperator == "add"){
        console.log(addition(userNumber1, userNumber2));
    } else if (selectOperator == "sub"){
        //call sub function
    } else if (selectOperator == "mul"){
    //call mul
    }    else if (selectOperator == "div"){
        //call div
    } else {
      console.log("Invalid Operation!");  
    }
}

calculator(firstNum, secondNum, selectOperator);