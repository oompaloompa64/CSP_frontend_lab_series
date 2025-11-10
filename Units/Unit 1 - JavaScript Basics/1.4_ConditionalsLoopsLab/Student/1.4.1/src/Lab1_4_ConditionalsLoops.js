/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts

let age = 15 //prompt("Enter your age:");
if (age <= 16) {
    console.log("teen discount");
} else if (age >= 65) {
    console.log("senior discount");
} else {
    console.log("no discount");
}

vpoints = 1200;
let cart = 245
let total;
let discount;
if(vpoints >= 5000){
    total = cart * 0.8;
    discount = "20%";
} else if(vpoints >= 2000){
    total = cart * 0.9;
    discount = "10%";
} else if(vpoints >= 1000){
    total = cart * 0.95;
    discount = "5%";
} else{
    total = cart;
    discount = "0%";
}
console.log("Total: $" + total.toFixed(2) + " (Discount: " + discount + ")");
// TODO 2: Nested if with two numbers

let number1 = 6;
let number2 = 7;

if(number1 == number2){
    console.log("Numbers are equal")
} else if (number1 > number2){
    console.log("number 1 is greater")
} else {
    console.log("number 1 is smaller")
}


// TODO 3: Switch statement for language greeting

/*let language = "Spanish";

switch(language){
    case "spanish":
        console.log("hola mundo")
    break;
    case "french":
        console.log("bonjour tout le monde")
    break;  
    default:
        console.log("hello world")
    break;
}

let model = prompt("enter model of car");

switch (model){
    case "Focus":
    case "F150":
    case "Mustang":
        console.log(`your ${model} is a Ford`)
        break;
    case "S":
    case "3":
    case "X":
    case "Y":
        console.log(`your ${model} is a Tesla`)
        break;
    case "911":
    case "Carrara":
    case "Tycan":
        console.log(`your ${model} is a Porsche`)
        break;
    case "R8":
    case "A4":
    case "S4 cuatro":
        console.log(`your ${model} is an audi`)
        break;
    default:
        console.log("idk twin")

}*/

// TODO 4: While loop (1 to 10)

let count = 1;
while(count <= 10){
    console.log("value: ",count);
    count++;
}

let count2 = 10;
while(count2 >= 1){
    console.log("value: ",count2);
    count2--;
}

// TODO 5: Do..while loop (1 to 5)
let i = 1;
do{
    console.log("value: ",i);
    i++;
} while(i <= 10);

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
for(let j = 1; j <= 20; j++){
    if(j == 10){
        console.log("ten");
    } else if (j == 20){
        console.log("twenty");
    } else {
        console.log("value: ",j);
    }
}

// TODO 7: Even/Odd loop (1 to 20)

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
