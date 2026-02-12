# 2.1 Functions Intro – Lab

In this lab, you will practice working with **functions** in JavaScript, based on the lesson **2.1 JS | Functions Intro**.

You will:

- Declare and invoke functions
- Use parameters and arguments
- Work with `return` values (including multiple returns using objects/arrays)
- Apply good function practices (DRY, single responsibility, refactoring)

---

## 🎯 Learning Goals (I can…)

- I can properly **name, declare, and invoke** functions.
- I can use **parameters and arguments** to make my functions reusable.
- I can explain what the **`return`** statement does and use it correctly.
- I can write functions that return **primitive values, objects, and arrays**.
- I can **refactor** a function to improve clarity and reuse.

---

## 📖 Pre-Lab

1. Read **2.1 JS | Functions Intro**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleFunctionsPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab** so that the coding feels like the final step, not the first.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   2.1 - Functions Intro/Student_Version/2.1_FunctionsIntro
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab2_1_FunctionsIntro.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab2_1_FunctionsIntro.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Your First Function (review)

1. In `Lab2_1_FunctionsIntro.js`, create a function called `sayHelloWorld`.
2. It should print: `Hello World!` to the console.
3. Call `sayHelloWorld()` twice.

Focus: **function declaration vs invocation**.

---

### 🧩 Task 2 – Parameters and Arguments

1. Create a function `sayHello(name)` that logs: `Hello, <name>!`
2. Call it at least 3 times with different names.
3. Add comments labeling:
   - the **parameter**
   - the **arguments**

Example:

```js
// parameter: name
sayHello("Mary"); // argument: "Mary"
```

---

### 🧩 Task 3 – Many Parameters

1. Create a function:

```js
function sayHelloToThree(classmate1, classmate2, classmate3) {
  // TODO
}
```

2. It should print:  
   `Hello <classmate1>, <classmate2> and <classmate3>!`
3. Call it at least twice with different sets of classmates.

---

### 🧩 Task 4 – Return vs console.log

We’ll convert a **logging** function into a **returning** function.

1. Create a function `printNameLog(name)` that uses `console.log("Name is " + name);`
2. Below it, create `printNameReturn(name)` that uses `return "Name is " + name;`

Then:

```js
const logged = printNameLog("Ana");      // what does this output?
const returned = printNameReturn("Ana"); // what is stored here?

console.log("Value of logged:", logged);
console.log("Value of returned:", returned);
```

Write a short comment explaining the difference between `logged` and `returned`.

---

### 🧩 Task 5 – Handling Edge Cases with Multiple Returns

Create a function `describeName(name)` that:

- If `name.length === 0`, returns `"Please provide a valid name!"`
- Otherwise returns `"Name is <name>."`

Test with:

- `describeName("")`
- `describeName("George")`

Log the returned value each time.

---

### 🧩 Task 6 – Returning an Object

1. Create a function `getUserInfo(firstName, lastName)` that:
   - builds an object:
     ```js
     const userInfo = {
       firstName: firstName,
       lastName: lastName
     };
     ```
   - returns `userInfo`.

2. Call the function and store the result:

```js
const userData = getUserInfo("ana", "martinez");
```

3. Log only the first name using `userData.firstName`.

---

### 🧩 Task 7 – Returning an Array

1. Create a function `getFavorites(fav1, fav2, fav3)` that:
   - builds an array `[fav1, fav2, fav3]`
   - returns that array

2. Store the result and log:

   - the full array
   - the first and last items using indices (`[0]`, `[2]`)

---

### 🧩 Task 8 – Check for Understanding Functions

Implement the “Check for understanding” examples from the reading:

1. A function `sumThree(a, b, c)` that accepts 3 numbers as parameters and **returns their sum**.
2. A function `isNameOddOrEven(name)` that:
   - checks the length of the string
   - returns a string:
     - `"<name> has an even number of letters"`
     - or `"<name> has an odd number of letters"`

Call each function several times with different values and log the results.

---

### 🧩 Task 9 – Refactoring with sum() and avg()

Based on the refactoring section of the reading:

1. Create a function `sum(array)` that:
   - returns `undefined` if the array is empty
   - calculates and returns the sum of all items in the array

2. Create a function `avg(array)` that:
   - returns `undefined` if the array is empty
   - uses `sum(array)` to compute the average (don’t duplicate the sum logic)

Test with:

```js
console.log(sum([1, 2, 3, 4]));      // expect 10
console.log(avg([1, 2, 3, 4]));      // expect 2.5
console.log(sum([]));                // expect undefined
console.log(avg([]));                // expect undefined
```

---

## 🚀 Stretch Goals (Optional)

- Add input validation to `sumThree` to handle non-number inputs.
- Extend `getUserInfo` to include an `age` property and return a greeting message using the object.
- Add another helper function that uses `avg` for a real-world example (e.g., average test score).

---

## 🎟 Exit Ticket

Answer briefly (in your notebook or LMS):

1. What is the difference between a **parameter** and an **argument**?
2. Why is `return` sometimes more useful than `console.log`?
3. Describe one way you refactored code in this lab.

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab2_1_FunctionsIntro.js` are completed or attempted.
- [ ] Your code runs without syntax errors.
- [ ] You tested each function with **multiple calls**.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] You answered the exit ticket questions.

