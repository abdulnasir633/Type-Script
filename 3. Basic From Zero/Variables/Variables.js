/*
 A variable is a named storage location that holds a value.
 Variables are fundamental to programming languages, allowing developers to store
 and manipulate data in their programs. In TypeScript, variables are declared using the let, const, or var keywords.
*/
//Variable Declaration
//using let Keyword
var age = 25;
var name1 = "Abdul";
var isStudent = true;
console.log("Variable Declaration with 'let' Keyword");
console.log(age);
console.log(name1);
console.log(isStudent);
//using const (constant) keyword
// Variables which decleared with 'const' keyword cannot be reassigned once they are initialized
var pi = 3.14;
var appName = "MyApp";
console.log("Variable Declaration with 'const' Keyword");
console.log(pi);
console.log(appName);
//Type Inference:
//TypeScript can oftern infer the type based on the assigned value, so explicit type annotations are not alway necessary
var mrks = 95; // TypeScript infers 'number' type
var greeting = "Hi every one"; // TypeScript infers 'string' type
console.log("TypeScript infers type");
console.log(mrks);
console.log(greeting);
// Variable Scope:
// Gloabal Scope
console.log("Global Scope of Variable");
var globalVar = 10;
function myFunc() {
    console.log(globalVar); // Accessible within Functions
}
myFunc();
console.log(globalVar); // Accessible outside functions
// Local Scope
console.log("Local Scope of Variable");
function myFunc1() {
    var localVar = 20;
    var constVar = true;
    console.log(localVar); // Accessible within Functions
    console.log(constVar); // Accessible within the function
}
myFunc1();
// console.log(localVar); // Error: localVar is not defined outside the function
// console.log(constVar); // Error: constVar is not defined outside the function
// Block Scope
console.log("Block Scope of Variable");
if (true) {
    var blockVar = 42;
    var blockConst = "Block Scope";
    console.log(blockVar);
    console.log(blockConst);
}
// console.log(blockVar); // Error: blockVar is not defined outside the block
// console.log(blockConst); // Error: blockConst is not defined outside the block
