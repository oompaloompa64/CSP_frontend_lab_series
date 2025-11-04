/* 
 Lab 002 – Data Types in JavaScript
*/

let age = 34;
let price = 12.99;
console.log(age, price);
let sandraDivision = "Sandra" / 2;
console.log(sandraDivision);

let firstNumber = 10;
let secondNumber = 3;
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber * secondNumber);
console.log(firstNumber / secondNumber);

console.log(2 ** 3);
console.log(7 % 2);

let score = 20;
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