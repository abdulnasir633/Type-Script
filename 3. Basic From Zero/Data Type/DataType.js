//Data Type in Type Script
//***************************************************** */
//number
//Represents numeric values.
var age = 25;
var marks = 92.5;
console.log(age);
// Check the data type of 'age'
var ageType = typeof age;
console.log("The data type of 'age' is: ".concat(ageType));
console.log(marks);
// Check the data type of 'marks'
var marksType = typeof marks;
console.log("The data type of 'marks' is: ".concat(marksType));
/*************************************************************/
//string
//Represents textual data.
var stdName = "Najam";
var stdAdd = "Kamra Attock";
console.log(stdName);
// Check the data type of 'stdName'
var stdNameType = typeof stdName;
console.log("The data type of 'stdName' is: ".concat(stdNameType));
console.log(stdAdd);
// Check the data type of 'stdAdd'
var stdAddType = typeof stdAdd;
console.log("The data type of 'stdAdd' is: ".concat(stdAddType));
/************************************************************* */
//boolean
//Represents a logical value - true or false.
var isMaleStd = true;
var isStdAllow = false;
console.log(isMaleStd);
// Check the data type of 'isMaleStd'
var isMaleStdType = typeof isMaleStd;
console.log("The data type of 'isMaleStd' is: ".concat(isMaleStdType));
console.log(isStdAllow);
// Check the data type of 'isStdAllow'
var isStdAllowType = typeof isStdAllow;
console.log("The data type of 'isStdAllow' is: ".concat(isStdAllowType));
/*********************************************************/
//null
//Represents an intentional absence of an object value.
var nullValue = null;
console.log(nullValue);
// Check the data type of 'nullValue'
var nullValueType = typeof nullValue;
console.log("The data type of 'nullValue' is: ".concat(nullValueType));
/**************************************************************** */
//undefined
//Represents a variable that has been declared but not assigned a value.
var StdMarks = undefined;
console.log(StdMarks);
// Check the data type of 'StdMarks'
var StdMarksType = typeof StdMarks;
console.log("The data type of 'StdMarks' is: ".concat(StdMarksType));
/************************************************** */
//any
//Represents a dynamic type that can hold any value. Avoid using it whenever possible, as it reduces the benefits of TypeScript.
var StdDOB = 5031987;
console.log(StdDOB);
// Check the data type of 'StdDOB'
var StdDOBType = typeof StdDOB;
console.log("The data type of 'StdDOB' is: ".concat(StdDOBType));
StdDOB = "05 March 1987";
console.log(StdDOB);
// Check the data type of 'StdDOB'
var StdDOBType1 = typeof StdDOB;
console.log("The data type of 'StdDOB' is: ".concat(StdDOBType1));
/****************************************************/
//Type Inference
//TypeScript has a feature called type inference, which allows the type of a variable to be automatically determined based on its value.
var age1 = 25; // TypeScript infers 'number' type
var name1 = "John"; // TypeScript infers 'string' type
var isStudent = true; // TypeScript infers 'boolean' type
// Check the data type of 'age1'
console.log(age1);
var age1Type = typeof age1;
console.log("The data type of 'age1' is: ".concat(age1Type));
// Check the data type of 'name1'
console.log(name1);
var name1Type = typeof name1;
console.log("The data type of 'name1' is: ".concat(name1Type));
// Check the data type of 'isStudent'
console.log(isStudent);
var isStudentType = typeof isStudent;
console.log("The data type of 'isStudent' is: ".concat(isStudentType));
