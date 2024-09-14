// console.log("Hello World!");

// Ctrl + /
// var - indicator that the next keyword is a variable
// = - equal sign assignment operator. It means we're assigning a value to a variable
// name is a variable

// Primitive data types
var name = "John"; // string - " ", ' ', ` `
console.log(name);
var age = 25; // number
var quantity = "2"; // string
var version = 26.5; // number
// camel case
var isFilipino = false; // boolean = true or false
// snake case
var is_aliens = false; // boolean
var years = 5;

console.log(age);
console.log(age + quantity);
console.log(age + years);

// code block - lines of code enclosed in {}

if(isFilipino) {
    console.log("The person is Filipino!");
}

if(years) {
    console.log("Entered here");
}

// Reassignment
var temp = 10;
temp = 15;
console.log(temp);

// Difference of var and let

// It doesn't mind the scope
var first = 5;

if(true){
    var first = 10;
}

console.log(first);

// let
// scope based
let second = 20;

if(true) {
    let second = 30;
}

second = 40;

console.log(second);

// const - variables which cannot be reassigned

const population = 1700;
console.log(population);

// Coding challenge 1
let bookCount = 0;

function increment(){
    bookCount +=1;
}
increment();
console.log(bookCount);

// Coding challenge 2
let books = ['Moby Dick', 'Alice in Wonderland', 'Hungry Caterpillar'];

function replaceBooks(){
    books = ['Life of Pi', 'Grokkings Algorithms', 'New Earth'];
}
replaceBooks();
console.log(books);

// Coding challenge 3
function textCustomer() {
    {
        var firstName = 'Molly';  
    }
    console.log('Hi ' + firstName + ', your book is now in');
}
textCustomer();