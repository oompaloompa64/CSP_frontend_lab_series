/* 
 Lab 003 – Data Types in JavaScript (Boolean, Undefined, Null & Immutability)
*/

// TODO 1: Booleans
// - Create isStudent = true, hasLicense = false
// - Print results of true || false, true && false, !true
let isStudent = true;
let hasLicense = false;

console.log(true || false); // true
console.log(true && false); // false
console.log(!true);         // false

// TODO 2: Short-circuit evaluation
// - Print result of false && (5 > 2)
// - Print result of true || (2 > 5)
console.log(false && (5 > 2)); // false
console.log(true || (2 > 5));  // true

// TODO 3: Undefined
// - Declare variable grade and print it
let grade;
console.log(grade); // undefined

// TODO 4: Null
// - Create city = null, print it
// - Reassign city = "Miami" and print again
let city = null;
console.log(city); // null

city = "Miami";
console.log(city); // "Miami"

// TODO 5: Immutability
// - Create word = "hello"
// - Try word[0] = "H", print word
// - Reassign word = "Hello" and print again
let word = "hello";
word[0] = "H";
console.log(word); // "hello"

word = "Hello";
console.log(word); // "Hello"

// 🚀 Stretch Goals
// - Check if number is between 10 and 20 using &&
// - Check if city is "Miami" or "Berlin" using ||
