// Arithmetic Operators
// •	+ (Addition)
// •	- (Subtraction)
// •	* (Multiplication)
// •	/ (Division)
// •	% (Modulus)
console.log("************Arithmetic Operators****************")
let a: number = 10;
let b: number = 5;

console.log(a+b); //15
console.log(a-b); //5
console.log(a*b)//50
console.log(a/b)//2
console.log(a%b);//0

//Comparison Operators:
console.log("************Comparison Operators****************")
let x: number = 5;
let y: number = 10;

console.log(x == y);  // false
console.log(x === y); // false
console.log(x != y);  // true
console.log(x !== y); // true
console.log(x > y);   // false
console.log(x < y);   // true
console.log(x >= y);  // false
console.log(x <= y);  // true

//Logical Operators:
console.log("************Logical Operators****************")

let p: boolean = true;
let q: boolean = false;

console.log(p && q); // false
console.log(p || q); // true
console.log(!p);      // false

let c:number=10;
let d:number=15;
let E=c>d; //false
let F=c<d; //true

console.log(E && F)
console.log(E || F )
console.log(!E)

//Assignment Operators:
console.log("************Assignment Operators****************")

let num: number = 10;
console.log(num)


num += 5; // num=num+5 ,num is now 15
console.log(num)
num -= 3; // num =num-3 , num is now 12
console.log(num)
num *= 2; // num= num*2, num is now 24
console.log(num)
num /= 4; // num = num/2 ,num is now 6
console.log(num)
num %= 3; // num = num % 3, num is now 0 because After the operation, the value of num becomes 0.
// This is because when you divide 6 by 3, the remainder is 0. So, num is updated to hold the value 0
console.log(num)


//typeof Operators:
console.log("************typeof Operators****************")

let str: string = "Hello";
let numm: number = 42;

console.log(typeof str); // "string"
console.log(typeof numm); // "number"
