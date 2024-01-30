// Object Syntax
console.log("************************Object Literal Syntax Example*************************")
let person:{name:string, age:number}={
    name:"Ali",
    age:25
};
console.log(person.name);
console.log(person.age)

console.log("************************interface Syntax Example*************************")

interface Person{
    name:string,
    age:number
}

let person1:Person={
    name:"Asad",
    age:36
}
console.log(person1.name)
console.log(person1.age)

console.log("************************type Syntax Example*************************")
type Person1={
    name:string,
    age:number
};

let person2:Person1={
    name:"Amin",
    age:40
}
console.log(person2.name)
console.log(person2.age)