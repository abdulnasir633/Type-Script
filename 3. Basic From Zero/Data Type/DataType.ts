//Data Type in Type Script

//***************************************************** */
//number
//Represents numeric values.
let age:number =25;
let marks:number = 92.5;

console.log(age)
// Check the data type of 'age'
let ageType: string = typeof age;
console.log(`The data type of 'age' is: ${ageType}`);

console.log(marks)
// Check the data type of 'marks'
let marksType: string = typeof marks;
console.log(`The data type of 'marks' is: ${marksType}`);

/*************************************************************/

//string
//Represents textual data.

let stdName: string ="Najam"
let stdAdd: string ="Kamra Attock"


console.log(stdName)
// Check the data type of 'stdName'
let stdNameType: string = typeof stdName;
console.log(`The data type of 'stdName' is: ${stdNameType}`);

console.log(stdAdd)
// Check the data type of 'stdAdd'
let stdAddType: string = typeof stdAdd;
console.log(`The data type of 'stdAdd' is: ${stdAddType}`);

/************************************************************* */

//boolean
//Represents a logical value - true or false.

let isMaleStd: boolean= true;
let isStdAllow: boolean=false;

console.log(isMaleStd)
// Check the data type of 'isMaleStd'
let isMaleStdType: string = typeof isMaleStd;
console.log(`The data type of 'isMaleStd' is: ${isMaleStdType}`);

console.log(isStdAllow)
// Check the data type of 'isStdAllow'
let isStdAllowType: string = typeof isStdAllow;
console.log(`The data type of 'isStdAllow' is: ${isStdAllowType}`);



/*********************************************************/

//null
//Represents an intentional absence of an object value.

let nullValue: null = null;

console.log(nullValue)
// Check the data type of 'nullValue'
let nullValueType: string = typeof nullValue;
console.log(`The data type of 'nullValue' is: ${nullValueType}`);

/**************************************************************** */

//undefined
//Represents a variable that has been declared but not assigned a value.
let StdMarks: undefined = undefined;

console.log(StdMarks)
// Check the data type of 'StdMarks'
let StdMarksType: string = typeof StdMarks;
console.log(`The data type of 'StdMarks' is: ${StdMarksType}`);

/************************************************** */

//any
//Represents a dynamic type that can hold any value. Avoid using it whenever possible, as it reduces the benefits of TypeScript.

let StdDOB:any= 5031987;

console.log(StdDOB)
// Check the data type of 'StdDOB'
let StdDOBType: string = typeof StdDOB;
console.log(`The data type of 'StdDOB' is: ${StdDOBType}`);

StdDOB="05 March 1987"
console.log(StdDOB)
// Check the data type of 'StdDOB'
let StdDOBType1: string = typeof StdDOB;
console.log(`The data type of 'StdDOB' is: ${StdDOBType1}`);


/****************************************************/

//Type Inference
//TypeScript has a feature called type inference, which allows the type of a variable to be automatically determined based on its value.
let age1 = 25; // TypeScript infers 'number' type
let name1 = "John"; // TypeScript infers 'string' type
let isStudent = true; // TypeScript infers 'boolean' type

// Check the data type of 'age1'
console.log(age1)
let age1Type: string = typeof age1;
console.log(`The data type of 'age1' is: ${age1Type}`);

// Check the data type of 'name1'
console.log(name1)
let name1Type: string = typeof name1;
console.log(`The data type of 'name1' is: ${name1Type}`);

// Check the data type of 'isStudent'
console.log(isStudent)
let isStudentType: string = typeof isStudent;
console.log(`The data type of 'isStudent' is: ${isStudentType}`);