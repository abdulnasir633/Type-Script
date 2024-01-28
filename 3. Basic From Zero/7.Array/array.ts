// let fruit1 = "apple";
// let fruit2 = "banana";
// let fruit3 = "grapes";
// let fruit4 = "strawberry";
// let fruit5 = "orange";
// // ... and so on

// //Solution:
// //Using an array, you can efficiently store and manage multiple items in a single variable.
// let fruits = ["apple", "banana", "orange", "grapes", "strawberry"];



//Accessing Elements:
//Use square brackets [] with the index to access an element.
console.log("********************Accessing Elements of the Array***********************")

let fruits: string[] = ["apple", "banana", "orange", "grapes", "strawberry"];
let firstFruit: string = fruits[0]; // Access the first element

console.log(`First element of the Array is ${firstFruit}`)

//Iterating Over Elements of the Array
console.log("********************Iterating Over Elements of the Array***********************")

for (let fruit of fruits) {
    console.log(fruit);
  }

  //Adding Elements
  console.log("********************Adding Elements to the Array***********************")
  console.log(`before adding element to tha array, lenght of the array is:${fruits.length}`)
  fruits.push("PineApple");//adding new elements to the array
  console.log(`after adding element to tha array, lenght of the array is:${fruits.length}`)
  for(let fruit of fruits){
    console.log(fruit);
  }
  //Removing Elements
  console.log("********************Removing Elements from Array***********************")
  console.log(`before removing element to tha array, lenght of the array is:${fruits.length}`)
  fruits.pop();//removing elements from the array
  console.log(`after after element to tha array, lenght of the array is:${fruits.length}`)
  for(let fruit of fruits){
    console.log(fruit);
  }

  //Adding Elements with unshift method
  console.log("********************Adding Elements to the Array with unshift method***********************")
  console.log(`before adding element to tha array, lenght of the array is:${fruits.length}`)
  fruits.unshift("PineApple");//adding new elements at the start of the array
  console.log(`after adding element to tha array, lenght of the array is:${fruits.length}`)
  for(let fruit of fruits){
    console.log(fruit);
  }

  //removing Elements with shift method
  console.log("********************Removing Elements from the Array with shift method***********************")
  console.log(`before removing element to tha array, lenght of the array is:${fruits.length}`)
  fruits.shift();//removing elements from the start of the array
  console.log(`after removing element to tha array, lenght of the array is:${fruits.length}`)
  for(let fruit of fruits){
    console.log(fruit);
  }


//Slicing and Splicing
console.log("********************Slicing and Splicing**********************")
let slicedFruits = fruits.slice(1, 3); // Extracts elements at index 1 and 2
console.log(`Slice/Extract element of the array are: ${slicedFruits}`)

fruits.splice(1, 1, "NewFruit"); // Removes 1 element at index 1 and adds "NewFruit"
console.log(`splice element of the array are: ${fruits}`)
