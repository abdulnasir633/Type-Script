/*
 A variable is a named storage location that holds a value. 
 Variables are fundamental to programming languages, allowing developers to store 
 and manipulate data in their programs. In TypeScript, variables are declared using the let, const, or var keywords.
*/


//Variable Declaration

//using let Keyword

let age: number =25;
let name1:string ="Abdul";
let isStudent: boolean=true;

console.log("Variable Declaration with 'let' Keyword");
console.log(age);
console.log(name1);
console.log(isStudent);


//using const (constant) keyword
// Variables which decleared with 'const' keyword cannot be reassigned once they are initialized

const pi:number = 3.14;
const appName: string = "MyApp";


console.log("Variable Declaration with 'const' Keyword");
console.log(pi);
console.log(appName);



//Type Inference:
//TypeScript can oftern infer the type based on the assigned value, so explicit type annotations are not alway necessary

let mrks= 95; // TypeScript infers 'number' type
let greeting ="Hi every one" // TypeScript infers 'string' type


console.log("TypeScript infers type");
console.log(mrks);
console.log(greeting);



// Variable Scope:
// Gloabal Scope

console.log("Global Scope of Variable");

let globalVar: number = 10;

function myFunc(){
    console.log(globalVar) // Accessible within Functions

}

myFunc();
console.log(globalVar); // Accessible outside functions


// Local Scope
console.log("Local Scope of Variable");

function myFunc1(){
    let localVar: number = 20;
    const constVar: boolean = true;
    console.log(localVar) // Accessible within Functions
    console.log(constVar); // Accessible within the function
}

myFunc1();
// console.log(localVar); // Error: localVar is not defined outside the function
// console.log(constVar); // Error: constVar is not defined outside the function


// Block Scope
console.log("Block Scope of Variable");

if (true) {
    let blockVar: number = 42;
    const blockConst: string = "Block Scope";

    console.log(blockVar)
    console.log(blockConst)
}

// console.log(blockVar); // Error: blockVar is not defined outside the block
// console.log(blockConst); // Error: blockConst is not defined outside the block

