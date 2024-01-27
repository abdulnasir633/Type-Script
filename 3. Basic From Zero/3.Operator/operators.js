// Arithmetic Operators
// •	+ (Addition)
// •	- (Subtraction)
// •	* (Multiplication)
// •	/ (Division)
// •	% (Modulus)
console.log("************Arithmetic Operators****************");
var a = 10;
var b = 5;
console.log(a + b); //15
console.log(a - b); //5
console.log(a * b); //50
console.log(a / b); //2
console.log(a % b); //0
//Comparison Operators:
console.log("************Comparison Operators****************");
var x = 5;
var y = 10;
console.log(x == y); // false
console.log(x === y); // false
console.log(x != y); // true
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // true
console.log(x >= y); // false
console.log(x <= y); // true
//Logical Operators:
console.log("************Logical Operators****************");
var p = true;
var q = false;
console.log(p && q); // false
console.log(p || q); // true
console.log(!p); // false
var c = 10;
var d = 15;
var E = c > d; //false
var F = c < d; //true
console.log(E && F);
console.log(E || F);
console.log(!E);
//Assignment Operators:
console.log("************Assignment Operators****************");
var num = 10;
console.log(num);
num += 5; // num=num+5 ,num is now 15
console.log(num);
num -= 3; // num =num-3 , num is now 12
console.log(num);
num *= 2; // num= num*2, num is now 24
console.log(num);
num /= 4; // num = num/2 ,num is now 6
console.log(num);
num %= 3; // num = num % 3, num is now 0 because After the operation, the value of num becomes 0.
// This is because when you divide 6 by 3, the remainder is 0. So, num is updated to hold the value 0
console.log(num);
//typeof Operators:
console.log("************typeof Operators****************");
var str = "Hello";
var numm = 42;
console.log(typeof str); // "string"
console.log(typeof numm); // "number"
