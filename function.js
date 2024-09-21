// function - reusable code
// It's only executed once the function is called
// It has a name and we call that name to execute the function

// function functionName
function sayHi() {
    // functionBody
    console.log("Hi");
    let a = 20 + 10;
    if(a == 30){
        console.log("This will be entered");
    } else {
        console.log("Else statement");
    }
}

// function call
sayHi();

// return statement
// returns a value

function returnSample(){
    let hello = "Hello World!";
    // whatever we put after the return keyword, that value will be returned
    hello = "I have changed";
    return hello;
}

returnSample(); // does nothing

let temp = returnSample();
console.log(temp); // prints what returnSample returned

console.log(returnSample());