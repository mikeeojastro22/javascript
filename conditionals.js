// if - always checks the condition; if true, it will run the code inside. if false, it will ignore the code. 
// else if - is only valid if a previous 'if' condition is declared. If prior 'if' condition is met, it will skip this code. Once these 2 conditions are met, if true, it will run the code inside. if false, it will ignore the code. 
// else - is only valid if a previous 'if' condition is declared. The code inside this block will only be run if the previous conditions are not met. Default action if no condition is true. 

let a = 20;
let b = 10;

// this will run the first and second code block
if(a > b){
    console.log("It will enter the first code block");
    console.log(a, b);
} if(a > 12){
    console.log("It will enter the second code block");
} else {
    console.log("It will enter the else statement");
} 

console.log("=================================");

// this will run the first code block
if(a > b){
    console.log("It will enter the first code block");
    console.log(a, b);
} else if(a > 12){
    console.log("It will enter the second code block");
} else {
    console.log("It will enter the else statement");
} 

console.log("=================================");

// this will run the else code block
if(a < b){
    console.log("It will enter the first code block");
    console.log(a, b);
} else if(a < 12){
    console.log("It will enter the second code block");
} else {
    console.log("It will enter the else statement");
} 

console.log("=================================");

// Falsy - these are values that are false
// 0 - number
// "", '' - empty string
// null - variable exists but the value is null
// undefined - something that does not have value
// false - boolean
// NaN (Not a Number)

let c = 0;
let emp = "";
let d; // undefined
let e = null;
console.log(d);
console.log(e);

if(e){
    console.log("never gonna enter");
} else {
    console.log("will enter");
}

var user = {
    name: "Bruce", // truthy
    email: null, // falsy
    friends: ["Aflred", "Robin"], // truthy
    address: { // truthy
        street: "123 wayne manor", // truthy
        city: "Gotham" // truthy
    },
    id: 0, // falsy
    nickname: undefined // falsy
}

let studentArray = [];

if(studentArray.length){
    console.log("There are students");
} else {
    console.log("There are no students");
}
