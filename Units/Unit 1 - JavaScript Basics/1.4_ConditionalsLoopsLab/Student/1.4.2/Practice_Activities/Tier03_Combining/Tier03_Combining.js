console.log("TEST - TIER 3")
// guess the number

let RandomNum = Math.floor(Math.random() * 10) + 1;

let guess = prompt("Guess a number between 1 and 10");

if (guess == RandomNum) {
    console.log("You do it! hooray!");

} else if (guess < RandomNum) {
    console.log("Too low!");

} else if (guess > RandomNum) {
    console.log("Too high!");

} else {
    console.log("Can you even read?");

}

//number classifier

function isPrime(number) {
  // Numbers less than or equal to 1 are not prime.
  if (number <= 1) {
    return false;
  }

  // Check for divisibility from 2 up to the square root of the number.
  // We only need to check up to the square root because if a number 'n'
  // has a divisor greater than its square root, it must also have a
  // divisor smaller than its square root.
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      // If the number is divisible by 'i', it's not prime.
      return false;
    }
  }

  // If no divisors are found, the number is prime.
  return true;
}


let num = 0;

while (num<=20) {
    if (isPrime(num)) {
        console.log(num + " is prime");
    } else if (num % 2 == 0){
        console.log(num + " is even");
    } else {
        console.log(num + " is odd");
    }
    num++;
}