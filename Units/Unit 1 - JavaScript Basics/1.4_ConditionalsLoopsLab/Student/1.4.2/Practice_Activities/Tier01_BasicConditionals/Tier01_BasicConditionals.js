// Your code goes here. Follow the steps in README.md and run from index.html.
console.log("TEST - TIER 1")

let grade = Number(prompt("what it your grade?"));

switch (true) {
  case grade >= 90:
    console.log("A")
    break;
  case grade >= 80:
    console.log("B")
    break;
  case grade >= 70:
    console.log("C")
    break;
  case grade >= 60:
    console.log("D")
    break;
    case grade >= 0:
    console.log("F")
    break;
    default:
    console.log("WTF")
}

let age = Number(prompt("what is your age?"));

if (age >= 18) {
    console.log("You are eligable to vote.");
}
else {
    console.log("You are not eligable to vote.");
}