/* 
 Lab 002 – Data Types in JavaScript
*/

const age = 34;
const price = 12.99;
console.log(age, price);
const sandraDivision = "Sandra" / 2;
console.log(sandraDivision);

const firstNumber = 10;
const secondNumber = 3;
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

const precedenceA = 2 + 3 * 4 - 5;
const precedenceB = (2 + 3) * (4 - 5);
console.log(precedenceA, precedenceB);

const singleQuote = 'Single quotes';
const doubleQuote = "Double quotes";
const backtickString = `Template literal: ${singleQuote} & ${doubleQuote}`;
console.log(singleQuote, doubleQuote, backtickString);