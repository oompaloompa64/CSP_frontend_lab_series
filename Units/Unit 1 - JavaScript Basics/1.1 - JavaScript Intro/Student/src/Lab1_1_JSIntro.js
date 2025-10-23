/* ===========================================================
   Lab 1.1 – Intro
   Exploring JavaScript syntax, console output, and variables.
   =========================================================== */

// TODO 1: Print your full name with console.log()
console.log("Nico F");

// TODO 2: Declare variable favoriteFood, assign "Steak", then reassign "Pizza"
let favoriteFood = "Steak";
console.log (favoriteFood);
favoriteFood = "Pizza";
console.log (favoriteFood);

// TODO 3: Create variable mystery, assign a string, then a number, print type each time
let mystery = "anna";
console.log(mystery + " " + typeof mystery);
mystery = 4167;
console.log(mystery + " funny " + typeof mystery);

// TODO 4: Declare const schoolName, try to reassign
const schoolname = "cchs";
console.log(schoolname);

// TODO 5: Create three valid camelCase variables and print them
let morningRoutine = "Jogging";
let afternoonStudy = "Algorithms";
let eveningRelaxation = "Reading";
console.log(morningRoutine);
console.log(afternoonStudy);
console.log(eveningRelaxation);

// 🚀 Stretch Goals (optional)
// - Create a variable age and print "I am X years old" using concatenation
let age = 15;
console.log("I am " + age + " years old");
// - Repeat using template literals
console.log(`I am ${age} years old`);

/* ===========================================================
   🎟 EXIT TICKET
   1. What new concept or skill did you learn in this lab?
   assigning constants and variables
   2. How did you apply logic or conditionals in your code?
   i didnt
   3. What challenges did you encounter, and how did you solve them?
   i didnt know what camel case was so i asked the ai what it meant
   4. Where else could this programming concept be useful?
   constants and vars can be used for differentpourposes
   =========================================================== */

let length = 10;
let width = 5;

let area = (length * width);
let perimeter = 2*(length + width);

console.log("Area: "+area);
console.log(`Preimeter: ${perimeter}`);