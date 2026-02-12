# 2.2 JS Arrays – Lab

In this lab, you will practice working with **arrays** in JavaScript, based on the lesson **2.2 JS | Data Types in JavaScript – Arrays**.

You will:

- Declare arrays (empty and with values)
- Access elements using **indexes** and `.length`
- Add elements with `push` and `unshift`
- Remove elements with `pop`, `shift`, and `splice`
- Iterate over arrays with `for` loops and `forEach`
- Use `.split()` to turn strings into arrays

---

## 🎯 Learning Goals (I can…)

- I can explain what an array is and why it’s useful.
- I can access and update array elements using indexes.
- I can add and remove elements using common array methods.
- I can iterate over an array with a `for` loop and `forEach`.
- I can use `.split()` to turn a string into an array of words.

---

## 📖 Pre-Lab

1. Read **2.2 JS | Arrays**.
2. Complete the worksheets in this order:
   - `GuidedPractice.md`
   - `VocabularyWorksheet.md`
   - `PseudocodePractice.md`
   - `MultipleArraysPractice.md`
   - `MiniFRQ_Practice.md`

These worksheets are designed to **build up to the lab**, so that by the time you reach the coding tasks, the ideas feel familiar.

---

## 🧰 Setup

1. Open VS Code and navigate to:

   ```bash
   2.2 - JS Arrays/Student_Version/2.2_JS_Arrays
   ```

2. Open the `src` folder and then:

   - Edit your JavaScript in: `src/Lab2_2_JSArrays.js`
   - Open `src/index.html` in your browser.

3. Open the browser console:

   - Right-click in the page → **Inspect** → **Console**.
   - Refresh after changes to rerun your code.

> ✅ **Only edit:** `src/Lab2_2_JSArrays.js` and the student worksheets in `worksheets/`.

---

## 📝 Lab Tasks – One Bite at a Time

### 🧩 Task 1 – Declare and Inspect Arrays

1. Create an empty array called `students`.
2. Create an array `classNames` with at least 4 names (strings).
3. Use `console.log` to print:
   - the full `classNames` array
   - `classNames.length`
   - the first and last elements, using indexes.

Add a comment explaining **zero-based indexing** in your own words.

---

### 🧩 Task 2 – Mixed-Type Arrays

1. Create an array `mixedArray` that contains at least:
   - one string
   - one number
   - one boolean

2. Log the array and each element individually using its index.

---

### 🧩 Task 3 – Adding Elements (push & unshift)

Given:

```js
const arrayNames = ["Pedro", "Jake", "Joan"];
```

1. Use `push` to add `"Mike"` to the **end** of the array.
2. Use `unshift` to add `"Rachel"` to the **beginning** of the array.
3. Log the array after each change.

Write a short comment explaining the difference between `push` and `unshift`.

---

### 🧩 Task 4 – Removing Elements (pop, shift & splice)

Continue with your current `arrayNames`.

1. Use `pop` to remove the last element. Log the removed value and the updated array.
2. Use `shift` to remove the first element. Log the removed value and the updated array.
3. Use `splice` to remove **1 element starting at index 1**. Log the updated array.

Add comments above each line briefly explaining what each method does.

---

### 🧩 Task 5 – Accessing Out-of-Range Indexes

1. Using your current `arrayNames`, try logging an index that **does not exist**, e.g. index `99`.
2. Observe what the console prints.
3. Add a comment: Why does JavaScript return `undefined` here?

---

### 🧩 Task 6 – Looping with `for`

1. Create an array `favoriteFoods` with at least 5 foods.
2. Write a `for` loop that:
   - starts at index 0
   - loops while `i < favoriteFoods.length`
   - logs each food to the console.

Then, modify the loop to also log the **index and value** together, e.g. `"0: pizza"`.

---

### 🧩 Task 7 – Looping with `forEach`

Using the same `favoriteFoods` array:

1. Use `.forEach` with an **anonymous function** to log each food.
2. Use `.forEach` again, but this time:
   - use two parameters `(food, index)`
   - log a sentence like: `"Pizza is at index 0"`

> Try both ES5-style `function` and ES6 arrow function once.

---

### 🧩 Task 8 – `split()` and Word Count

1. Create a string `sentence` with at least 6 words.
2. Use `.split(" ")` to turn the sentence into an array of words. Store it in `words`.
3. Log `words` and `words.length`.

Then:

- Use a `for` loop to log each word.
- Use `forEach` to log each word in uppercase.

---

### 🧩 Task 9 – Mini Challenge – Stars with forEach

Recreate the idea of the `printStars` example from the reading:

1. Write a function `printStars(howMany)` that logs `"*"` repeated `howMany` times.
2. Create an array `[1, 2, 3, 4, 5]`.
3. Use `.forEach` to call `printStars` for each number in the array.

You should see:

```
*
**
***
****
*****
```

---

## 🚀 Stretch Goals (Optional)

- Create a function `cleanNames(namesArray)` that:
  - trims whitespace and
  - returns a **new array** with cleaned names.
- Create a function `countLongWords(wordsArray, minLength)` that:
  - returns how many words have length `>= minLength`.

---

## 🎟 Exit Ticket

Answer briefly:

1. Why are arrays useful compared to multiple separate variables?
2. What is the difference between `push`, `pop`, `shift`, and `unshift`?
3. When might you prefer `forEach` over a `for` loop?

---

## ✅ Submission Checklist

- [ ] All TODOs in `Lab2_2_JSArrays.js` are completed or attempted.
- [ ] Code runs without syntax errors.
- [ ] You used array methods (`push`, `pop`, etc.) at least once.
- [ ] You iterated over an array with both `for` and `forEach`.
- [ ] All required worksheets in the `worksheets/` folder are completed.
- [ ] Exit ticket questions are answered.

