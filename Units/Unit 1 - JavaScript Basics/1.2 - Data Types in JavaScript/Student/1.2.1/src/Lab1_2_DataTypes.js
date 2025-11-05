/* 
 Lab 002 – Data Types in JavaScript
*/

let age = 34;
let price = 12.99;
console.log(age, price);
let sandraDivision = "Sandra" / 2;
console.log(sandraDivision);

let firstNumber = 6;
let secondNumber = 7;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

console.log(6 ** 7);
console.log(6 % 7);

let score = 10;
console.log(score);
score += 5;
console.log(score);
score -= 3;
console.log(score);
score *= 2;
console.log(score);
score /= 4;
console.log(score);

let precedenceA = 2 + 3 * 4 - 5;
let precedenceB = (2 + 3) * (4 - 5);
console.log(precedenceA, precedenceB);

let singleQuote = 'Single quotes';
let doubleQuote = "Double quotes";
let backtickString = `Template literal: ${singleQuote} & ${doubleQuote}`;
console.log(singleQuote, doubleQuote, backtickString);