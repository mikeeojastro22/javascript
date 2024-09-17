// Addition
console.log(1 + 2 + 76);
const sum = 3 + 5 + 25;
console.log(sum);
let a = 10;
let b = 20;
console.log(a + b);
console.log(a + 78);

// shorthand
a += 20;
// adding previous value of the variable to 20
// a = a + 20;
a += a + 50;
// a = a + a + 50;
console.log(a);
console.log(sum + b);

b++;
// increment by 1
// b = b + 1;
// b += 1;
console.log(b);

// ++b takes effect immediately
console.log(`Previous value: ${b} and Current value: ${++b}`);

// b++ takes effect after the line
console.log(`Previous value: ${b} and Current value: ${b++}`);
console.log(b);