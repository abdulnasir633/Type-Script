// basic example of the function in type script

console.log("********************Basic Example of Function in Type script*******************")
//funciton for addition of two numbers
function addNumber(a:number, b:number){
    return a+b;
}
const result =addNumber(5,10)
console.log(`Sum of two number is : ${result}`)
// function for subtraciton of two number
function subNumber(a:number, b:number){
    return a-b;
}

const subResult = subNumber(10,5)
console.log(`Subtraction of two number is : ${subResult}`)


//funciton for Division of two number
function divideNumber(a:number, b:number){
    return a/b
}

const divResult =divideNumber(50,2)
console.log(`The division result of two number is : ${divResult}`)

console.log("********************Example for Parameter type annotation of Function in Type script*******************")

function sumNum(a:number, b:number){
    return a+b;
}
const resultSumNum=sumNum(2,5)//result is 7
console.log(resultSumNum)

//const resultSumNum1=sumNum("2",5)// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//console.log(resultSumNum1)

console.log("********************Example for Return Type Annotations of Function in Type script*******************")

function sumNumber(a:number, b:number):number{
    return a+b;
}
const resultSumNum1=sumNumber(2,5)//result is 7
console.log(resultSumNum1)


console.log("********************Example for void  Function in Type script*******************")
function logMessage(message: string): void {
    console.log(message);
  }
  logMessage("Hello this is example for void type")
 