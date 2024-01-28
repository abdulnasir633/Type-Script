// basic example of the function in type script
console.log("********************Basic Example of Function in Type script*******************");
//funciton for addition of two numbers
function addNumber(a, b) {
    return a + b;
}
var result = addNumber(5, 10);
console.log("Sum of two number is : ".concat(result));
// function for subtraciton of two number
function subNumber(a, b) {
    return a - b;
}
var subResult = subNumber(10, 5);
console.log("Subtraction of two number is : ".concat(subResult));
//funciton for Division of two number
function divideNumber(a, b) {
    return a / b;
}
var divResult = divideNumber(50, 2);
console.log("The division result of two number is : ".concat(divResult));
console.log("********************Example for Parameter type annotation of Function in Type script*******************");
function sumNum(a, b) {
    return a + b;
}
var resultSumNum = sumNum(2, 5); //result is 7
console.log(resultSumNum);
//const resultSumNum1=sumNum("2",5)// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//console.log(resultSumNum1)
console.log("********************Example for Return Type Annotations of Function in Type script*******************");
function sumNumber(a, b) {
    return a + b;
}
var resultSumNum1 = sumNumber(2, 5); //result is 7
console.log(resultSumNum1);
console.log("********************Example for void  Function in Type script*******************");
function logMessage(message) {
    console.log(message);
}
logMessage("Hello this is example for void type");
// console.log(logMessage)
