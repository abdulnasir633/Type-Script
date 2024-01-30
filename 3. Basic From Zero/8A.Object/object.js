// // Object Syntax
// console.log("************************Object Literal Syntax Example*************************")
// let person:{name:string, age:number}={
//     name:"Ali",
//     age:25
// };
// console.log(person.name);
// console.log(person.age)
// console.log("************************interface Syntax Example*************************")
// interface Person{
//     name:string,
//     age:number
// }
// let person1:Person={
//     name:"Asad",
//     age:36
// }
// console.log(person1.name)
// console.log(person1.age)
// console.log("************************type Syntax Example*************************")
// type Person1={
//     name:string,
//     age:number
// };
// let person2:Person1={
//     name:"Amin",
//     age:40
// }
// console.log(person2.name)
// console.log(person2.age)
// console.log("************************Example of Nested object in Typescript*************************");
// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book ={
//     author:Author;
//     name:string;
// }
// const myBook : Book ={
//     author:{
//         firstName:"Abdul",
//         lastName:"Nasir"
//     },
//     name:"My Best Book"
// }
// console.log(myBook.name)
// console.log(myBook.author)
// console.log("************************2nd Example of Nested object in Typescript*************************");
// type Student={
//     name:string,
//     age:number,
//     adress:{
//         street:string,
//         city:string,
//         postalCode:number
//     }
// }
// let student:Student={
//     name:"Abdul Nasir",
//     age:36,
//     adress:{
//         street:"No 1 ",
//         city:"Karachi",
//         postalCode:23520
//     }
// }
// console.log(student.name)
// console.log(student.age)
// console.log(student.adress)
console.log("************************Example of Intersection Type in Typescript*************************");
var emp = {
    name: "John",
    age: 30,
    employeeId: "12345",
    position: "Developer"
};
console.log(emp.name);
console.log(emp.age);
console.log(emp.employeeId);
console.log(emp.position);
