// syntax of for loop
// Syntax:
// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }
console.log("*********************Example of For Loop*********************");
for (var i = 0; i < 10; i++) {
    console.log("".concat(i, ".Hi! AI community")); // Loop execute from 0 to 9  
}
console.log("*********************Example of For Loop to search an item/ value in array*********************");
var cleancity = ["Peshawar", "Karachi", "Lahore", "Islamabad"];
for (var i = 0; i < cleancity.length; i++) {
    if ("Islamabad" === cleancity[i]) {
        console.log("Isamabad is clean city and beutiful capital of the world");
        break;
    }
}
console.log("*********************Example of nested for loop*********************");
//The structure of a nested for loop looks like this:
// for (initialization; condition; increment/decrement) {
//     // Outer loop code
//     for (innerInitialization; innerCondition; innerIncrement/decrement) {
//       // Inner loop code
//     }
//   }
for (var i = 1; i <= 3; i++) {
    console.log("Outer loop iteration: " + i);
    for (var j = 1; j <= 2; j++) {
        console.log("  Inner loop iteration: " + j);
    }
}
console.log("*********************2nd Example of nested for loop*********************");
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];
for (var i = 0; i < firstNames.length; i++) {
    for (var j = 0; j < lastNames.length; j++) {
        fullNames.push(firstNames[i] + " " + lastNames[j]);
    }
}
console.log(fullNames);
