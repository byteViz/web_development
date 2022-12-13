---
## JAVASCRIPT
---

### **Basics**

---

**Primitive Types**

| Primitive Types |
| --------------- |
| Number          |
| String          |
| Boolean         |
| Null            |
| Undefined       |
| Symbol          |
| BigInt          |
|                 |

---

**Notable Operators**

9 % 2 = 1

> modulo operator

2 \*\* 6 = 16

> 2 to the power of 6

**shorthand notation for** **_`score = score + 10;`_**

> score += 10;

> score -= 50;

> score \*= 2;

> score /= 2;

> score \*= bonusMult;

```js
score = score * bonusMult;
```

**Unary operator**

score++;

score--:

---

**NaN**

> NaN is a numberic value that represents something that is...not a number.

> 0/0 is not a number

> 1+ NaN

---

**Variable**

> _variables in javaScript are camelCased and not snake_cased_

> _Variables in javascript can change type unlike many other languages. Typescript enforces stricter rules over this_

```js
let someName = value;
```

---

**Constant**

> cannot change the value after setting it up.

```js
const pi = 3.14159;
```

> even if one identifier is declared as a constand and the other as a variable. they cant have the same name.

---

**string**

> Use single or double quotes
>
> if you need to have quotes inside a string, use the other quote. These are valid strings:

```js
"he said 'lol' ";
'he said "lol" ';
```

> `firstName + lastName` will concatinate the two strings.
>
> Each character in a string has a corresponding index (a positional number)

| C   | H   | I   | C   | K   | E   | N   |
| --- | --- | --- | --- | --- | --- | --- |
| 0   | 1   | 2   | 3   | 4   | 5   | 6   |

**.length** - every string has this property

> -       `"hello ".length` returns 7
>
> - whitespaces inside string are also counted as its length.

> - Accessing the characters of a string using index:
>
>   -     `mySong[5]`

> - length of a string is always one greater than the last index.

> - Strings are immutable in Javascript meaning individual characters cannot be altered using index as in some other languages.

> Strings are indexed.

```js
let animal = "octapus";
animal[1];
```

> strings have `length` property.

```js
animal.length;
7;
```

> \+ in case of strings are meant for catination.

---

**String Methods**

> Methods are built-in actions we can perform with invidual strings.
>
> `string.method();`
>
> Some methods are non-destructive as they dont alter the original string.

**Lower Case, Upper Case**

```js
"LOLOLOL!!!".toLowerCase();

"lolololol!!".toUpperCase();
```

**Trim**

```js
greetings.trim(); //removes spaces before or after the string

greetings.trim().toUpperCase(); // trims first then converts it to uppercase. chaining methods.
```

**indexOf("searchString")**

```js
let tvShow = "catdog";
tvShow.indexOf("cat"); // 0
tvShow.indexOf("dog"); // 3
tvShow.indexOf("k"); // -1 (not found)
// first matching index not the subsequent matchings.
```

**Slice**

```js
str.slice(beginIndex[, endIndex]);

"haha this is funny!".slice(5) // "this is funny!"
"haha this is funny!".slice(5, 9) // "this" - from 5th index upuntil but NOT INCLUDING the 9th index.
```

**Replace**

```js
"haha this is funny!".replace("haha", "lol"); // "lol this is funny"
//only going to replace the first matcing instance.
```

**Repeat**

```js
"lol".repeat(3); // "lollollol" - makes a new string
```

---

**String Escapes**

> \n - newline
>
> \\' - single quote
>
> \\" - double quote
>
> \\\ - backslash

---

**String template literals**

> Strings that allow embedded expressions, which will be evaluated and then turned into a resulting string.

```js
`I counted ${3 + 8} sheeps`; // "I counted 11 sheeps
```

---

**Undefined & Null**

> Null
>
> - "Intentional absense of any value"
> - Must be assigned
>
> Undefined
>
> - Variables that do not have an assigned value are undefined.

---

**Math Object**

> Contains properties and methods for mathematical constants and functions.

```js
Math.PI; // 3.14159265

//Rounding a number:
Math.round(4.9); //5

//Absolute value:
Math.abs(-456); //456

//Raises 2 to the 5th poser:
Math.pow(2, 5); //32

//Removes decimal
Math.floor(3.999); //3

//Gives random decimal between 0 and 1 (non-inclusive)
Math.random(); //0.573654576847
```

---

**Type Of Operator**

> It is an operator.

```js
typeof mystery; //"string"
typeof 99; //"number"
```

---

**parseInt & parseFloat**

> use to parse string into numbers, but watch out for **NaN**.
>
> It will only work if the string starts with some number.
> It will work even if the string starts with space.

```js
parseInt("21") + 1; //22
parseFloat("33.5"); //33.5
parseInt("$99"); //NaN
parseInt("99cents"); //99
```

---

**Comparision Operators**

```js
== //equality
=== //strick equality
!= //not equal
!== //strict non-equality
```

---

**Else If**

```js
if (rating === 3) {
  console.log("Nailed It");
} else if (rating === 1) {
  console.log("Needs Improvement");
}
```

---

**Else**

```js
if (rating === 3) {
  console.log("Nailed It");
} else if (rating === 1) {
  console.log("Needs Improvement");
} else {
  console.log("Meets Expectations");
}
```

**Switch statement:**

````js
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('invalid day');
        break;
    }

---

**Truthy & Falsy**

> Al values have an inherent truthy or falsy boolean value.
> Falsy Values:
>
> - false
> - 0
> - " " (empty string)
> - null
> - undefined
>   -NaN
>
> Everything else is truthy!

```js
if (loggedInUser) {
  console.log("you are logged in");
} else {
  console.log("please log in");
}
````

---

**Logical Operators**

| And | Or            | Not |
| --- | ------------- | --- |
| &&  | &#124; &#124; | !   |

**Precedence:**

**! > && > &#124; &#124;**

NOT > AND > OR

---

**Ternary Operator**

> condition ? expIfTrue: expIfFalse

```js
num === 7 ? console.log("lucky") : console.log("bad!");
```

---

### **Arrays & Objects**

```js
// To make an empty array
let student = [];

// An array of strings
let colors = ["red", "orange", "yellow"];

// An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array
let stuff = [true, 68, "cat", null];

// Length of an array
colors.length; // 3

// Access the last member of the array
colors[colors.length - 1]; // yellow

// Unlike strings, arrays are mutable. editing arrays.
colors[1] = "green";

// Adding items to the array.
colors[3] = "blue"; // If the length of the array is known
colors[colors.length + 1] = "blue"; // It the array length is unknown.
```

---

**Array Methods**

> - Push - add to end
> - Unshift - add to start
> - Pop - remove from end
> - Shift - remove from start

```js
// adding items to the end of the array
colors.push("Indigo"); // 5 - also returns the number of items in the array.
colors.push("grey", "brown"); //can push multiple items at once too

// removing array item from the end
colors.pop(); // indigo - returns the removed value.

// add items at the start of the array
colors.unshift("black"); //5 - returns the new number of items in the array

colors.shift(); // black - removes and returns the item from the beginning of the array.
```

Unshifting items one at a time is **different** from unshifting all at once (Here the order is preserved).

```js
colors.unshift("cyan", "pink"); //6
// Adds items in the same order that they are listed in the awway
```

---

**concat()**

> merge two or more arrays. This does not change the existing arrays, but instead returns a new array.

```js
const array1 = {'a','b','c'};
const array2 = {'d','e','f'};

console.log(array1.concat(array2));
// output: Array ["a","b","c","d","e","f"]
```

---

**array.includes()**

> determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

```js
colors.includes("white");
//false
colors.includes("yellow", 2); //does it contain the search term after the index of 2 ?
```

---

**array.indexOf()**

> determines whether an array includes a certain value among its entries, returning the index of where that entry appears and a "-1" if the value was no found;

```js
colors.indexOf("red"); // returns '2' the index of where the entry is found in the array and returns a -1 is not found
```

---

**array.reverse()**

> reverses the array and the original array is also reversed.

```js
let letters = ["a", "b", "c", "d", "e", "f"];
letters.reverse();
// (6) ['f','e','d','c','b','a',] - output
letters;
// (6) ['f','e','d','c','b','a',] - the original array is also reversed.
```

---

**array.join()**

> Creates and returns a new string by concatenating all of the elements of an array, seperated by commas or a specified separator string.

```js
letters.join(); // "a,b,c,d,e,f"
letters.join("."); // "a.b.c.d.e.f"
letters.join(" "); // "a b c d e f"
letters.join("-"); // "a-b-c-d-e-f"
```

---

**array.slice()**

> Returns a shadowcopy of a portion of an array into a new arrya object selected from `begin` to `end` (`end` not included) where `begin` and `end` represent the index of items in that array. THE ORIGINAL ARRAY WILL NOT BE MODIFIED.
>
> We can pass negative numbers and it will start backwards from the end.

```js
let letters = ["a", "b", "c", "d", "e", "f"];

let neededLetters = letters.slice(0, 3);
// ["a", "b", "c"]

let neededLetters = letters.slice(-3);
// ["d", "e", "f"]
```

---

**array.splice()**

> Changes the contents of an awway by removing or replacing existing elements and/or adding new elements in place.

```js
let letters = ["a", "b", "c", "d", "e", "f"];

letters.splice(1,0,'#');
// []
// it returned nothing because nothing was removed
// This was a 'ADDITION OF ELEMENTS' operation.
letters;
(7) ["a", "b", "#", "c", "d", "e", "f"]; // output
----------------------------------------------------
letters.splice(2,1);
(1) ["#"]
// returns the array entry that was removed
// this was a 'REMOVAL OF ELEMENTS' operation.
letters;
(6) ["a", "b", "c", "d", "e", "f"] // output
----------------------------------------------------
letters.splice(0,2,'z','y');
(2) ["a", "b"]
// returns the array entries that were replaced.
// this was a "REPLACEMENT OF ELEMENTS" operation.
letters;
(6) ["z", "y", "c", "d", "e", "f"] // output
----------------------------------------------------
```

---

**array.sort()**

> - **_sorts_** the array, **_updates_** it, and **_returns_** it.
> - The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. especially noticible in the following example; sorting of numbers.

```js
let letters = ["z", "y", "c", "d", "e", "f"];
letters.sort();
// (6) ["c", "d", "e", "f", "y", "z"]

let nums = [34, 10, 1000, 67, 99];
nums.sort();
// (5) [10,1000,34,67,99]
// it converts the numbers into string then compares their UTF-16 codes.
```

---

### **Reference Types**

> - Primitive types (variables), the value is stored in physical memory.
>
> - In case of an array, the reference to that array is stored.
> - As a result, when a variable that is referencing an array get changed, the array is also modified.
>
> When an array is defined as a constant, the VALUES CAN CHANGE as long as the REFERENCE remains the same.
>
> Reason: the only thing that is stored in that constant is the reference pointer to that array data.
>
> - If we try to reassign the array then it wont be acceptable since its a constant.

---

**Nested Arrays**

```js
const animalPairs = [
  ["doe", "buck"],
  ["ewe", "ram"],
  ["peahen", "peacock"],
];

animalPairs[2][0];
// "peahen"
```

---

### **Objects**

```js
const fitBitData = {
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: "5 of 7",
  avgGoodSleep: "2:13",
  45 : "forty-five"
};
let mysteryRequest = 'totalSteps';

fitBitData.totalMiles;
//211.7 output

fitBitData['avgGoodSleep'];
// "2:12" output

firBitData.45;
// Uncaught Syntax Error: Unexpected number - output
//      Even if keys are numbers, they are converted and stored as string and when we try to access them using ".", it checks for number 45 but not "45".

fitBitData[45]
// "forty-five" - output
//      using [] to access keys in object, its gets converted to string "45" then it looks for key "45" in the object.

fitBitData[totalSteps];
//Uncaught ReferenceError: totalSteps is not defined
//It is looking for a variable named totalSteps. obviously that has not been defined.

fitBitData[mysteryRequest];
//308727
// It looks for the value of mysteryRequest which evaluates to 'totalSteps' and pases that string to the array and matches it with the key stored in the array.

fitBitData.mysteryRequest
//undefined error
// In this case its looking for a property called mysteryRequest in the array which doesnt exist.
```

> A key can sometimes be an invalid identifier (starting with numbers or has a space in between and these can be stored and retrived in JS using **[]** )

---

**Adding and Updating Properties in Objects**

```js
cosnt userReviews = {};
// empty object defined

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith = 3.5;

userReviews;
//{queenBee49: 4, mrSmith78: 3.5}
```

---

**Arrays/Objects Equality**

```js
let nums = [1, 2, 3];
let mystery = [1, 2, 3];

nums === mystery;
//false

nums == mystery;
//false

// the variable stores reference pointer to the location of the array data so nums and mystery might have the same content but their reference pointers are different.
```

> === and == checks for equality of reference and not equality of contents.

---

### **Loops**

---

> for loop

> while loop

> for ... of loop

> for ... in loop

---

**For Loops**

```js
for ([initialExpression]; [condition]; [incrementExpression])
  for (let i = 1; i <= 10; i += 3) {
    console.log("HELLO", i);
  }

for (let i = 200; i >= 0; i -= 25) {
  console.log(i);
}
```

---

**While Loops**

```js
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);
while (guess !== target) {
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}
```

---

**For ... of**

```js
for (variable of iterable) {
  statement;
}
// Example:

let subreddits = ["soccer", "popheads", "cringe", "books"];

for (let sub of subreddits) {
  console.log(sub);
}
```

> Arrays are iterable
>
> objects are NOT iterable (cant use for ...of loop )
>
> solution:
> **Object.keys()** and **Object.values()**
>
> Example:

```js
const movieReviews = {
   Arrival         : 9.5,
   Alien           : 9,
   Amelie          : 8,
   Amadeus         : 10,
   Coraline        : 7.5
};

 for (let movie of Object.keys(movieReviews)) {
     console.log(movie, movieReviews[movie]);
 }

const ratings =  Object.values(movieReviews);
let total = 0;
for(let r of ratings) {
    total += r;
}
console.log(total/ratings.length);
---
```

---

**For ... In loop**

> Loop over the keys in an object
> arrays are technically objects. so for...in can be used on arrays too.

```js
for (variable in object) {
  statement;
}
```

example:

```js
/// looping over object
const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  Amadeus: 10,
  Coraline: 7.5,
};

for (let prop in movieReviews) {
  console.log(prop, movieReviews[prop]);
}

// looping over arrays

for (let k in [88, 99, 77, 66]) {
  console.log(k);
}
//
```

---

### **Functions**

**Define a function**

```js
// function being defined
function funcName(parameter1, parameter2) {
  // do something
  return parameter1 + parameter2;
}

answer = funcName(argument1, argument2);
// function being called
```

> - only one calue should be returned from a function.
>
> - if you want to return multiple items from a function use an array.
>
> - return statements end code execution. the code after the return statement is not going to be executed.

---

**Scope**

> var is not block scoped
> let and const are block scoped

**Lexical Scope**

```js
function outer() {
  let movie = "Amadeus";

  function inner() {
    console.log(movie.toUpperCase());
  }
}

//output:

// inner()
// Uncaught
// ReferenceError: inner is not defined
```

> Function 'inner's' scope is limited to the bounds of function 'outer'.
>
> Nested functions are lexically bound to the scope of their outer function.

```js
function outer() {
  let movie = "Amadeus.";

  function inner() {
    let x = 10;
    console.log(movie.toUpperCase());
  }
  inner();
  console.log(x);
}

// output:
AMADEUS.
// Uncaught ReferenceError: x is not defined.
```

```js
function outer() {
  let movie = "Amadeus";

  function inner() {
    let movie = "The Shining";
    console.log(movie.toUpperCase());
  }
  inner();
}

// output:
 The Shining
 // 1. Is there a movie defined within the current scope (inner function) ?
 // 2. if there is no such definition, is there a movie defined in the outer scope?
```

---

### **Function Expression**

> Another syntax we can use to define functions:

```js
const square = function (num) {
  return num * num;
};
square(7); //49

//this is an anonymous function
```

> In JS functions are objects, so we can store functions in variables, store 10 of them in an array or pass them as arguments.

```js
const profuct = function multiply(x, y) {
  return x * y;
};
product(3, 5); //15

multiply(3, 5);
//UncaughtReferenceError: multiply is not defined.
```

**Functions as array objects**

```js
function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

//We can store functions in an array!
const operations = [add, subtract, multiply, divide];

operations[1](100, 4);
// 96

//Loop over all the functions in operations
for (let func of operations) {
  let result = func(30, 5); //execute func!
  console.log(result);
}
// 35
// 25
// 150
//6

// We can also store functions in objects!
const thing = {
  doSomething: multiply,
};
thing.doSomething(4, 5); //20
```

> By adding a function to an object we have created a METHOD!

---

### **Higher Order Functions**

> - A function that operate on/with another function

```js
function love() {
  console.log("I LOVE EVERYTHING!");
}

function repeatNTimes(action, num) {
  // call action (a function) num number of times
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(love, 13);
```

> - A function that return a function.

```js
// This function returns a function!
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

//triple holds a function:
const triple = multiplyBy(3);
//we can call it:
triple(4); //12
triple(10); //30
```

---

### **Array callback functions**

**Callback function :**

> Is a function passed into another function as an argument, which is then invoked inside the outer function.### Array callback functions

**forEach**

> Accepts a callback function. Calls the function once per element in the array. but doesnt store that in a new array.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

nums.forEach(function (n) {
  console.log(n * n);
});
```

---

**Map**

> Creates a new array with the results of calling a callback on every element in the array. Without altering the original array. unlike forEach, this stores the values in a new array.

```js
cosnt texts = ['rofl','lol','omg','ttyl'];
const caps = texts.map(function (t) {
  return t.toUpperCase();
})

texts;
//(4) ['rofl', 'lol', 'omg', 'ttyl']
caps;
//(4) ['ROFL', 'LOL', 'OMG', 'TTYL']
```

---

**Arrow Functions**

```js
const square = (x) => {
  return x * x;
};
```

> If you have only one parameter you can leave the parenthesis off.

```js
const isEven = (num) => {
  return num % 2 === 0;
};
```

> use empty parents for functions w/ no parameters:

```js
const singASong = () => {
  return "LA LA LA LA LA LA";
};
```

**Implicit Return**

> If only one expression to return, arrow function can be an implicit return function.

```js
const square = (n) => n * n;

const parityList = num.map((n) => (n % 2 === 0 ? "even" : "odd"));
```

---

**Find method**

> Returns the value of the first element in the array that satisfies the provided testing fucntion.

```js
let movies = ["Harry potter", "Dark Knight", "Suicide Squad", "Joker"];

let movie = movies.find((movie) => {
  return movie.includes("Squad");
});

let movie2 = movies.find((m = m.indexOf("Dark") === 0));
```

---

**Filter**

> Creates a new array with all elements that pass the test implemented by the provided function.

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odds = nums.filter((n) => n % 2 === 1);
const evens = nums.filter((n) => n % 2 === 0);
```

---

**Every()**

> Tests whether all elements in the array pass the provided function. It returns a Boolean value. Even if one element in the array fails the condition the function returns false.

```js
const words = ["dog", "dig", "log", "bag", "wag"];

words.every((word) => {
  return word.length === 3;
});

words.every((word) => word[0] === "d");

word.every((word) => {
  const last = word.length - 1;
  return word[last] === "g";
});
```

---

**some()**

> Similar to every, but returns true if ANY of the array elements pass the test fucntion.

```js
const words = ["dog", "jello", "cupcake", "dig", "log", "bag", "wag"];

words.some((w) => w.length > 4);
```

---

**arr.sort(compareFunc(a,b))**

> - If `compareFunc(a,b)` returns less than 0
>   - Sort `a` before `b`
> - If `compareFunc(a,b)` returns 0
>   - Leave `a` and `b` unchanged with respect to each other
> - if `compareFunc(a,b)` returns greater than 0
>   - Sort `b` before `a`

```js
const prices = [400.5, 3000, 99.99, 35.99, 23.0, 9500, 25, 25];

const sort1 = prices.sort((a, b) => a - b);
```

---

**reduce**

> Executes a reducer function on each element of the array, resulting in a single value.

**Summing an Array**

```js
array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, [initial value]);
```

example:

```js
const nums = [3, 4, 5, 6, 7];
const summation = nums.reduce((total, currentVal) => total + currentVal);
// 25
```

---

**Finding Max Val**

```js
let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currentVal) => {
  if (currentVal > max) return currentVal;
  return max;
});

//OR

const maxGrade = grades.reduce((max, currentVal) => {
  return Math.max(max, currentVal);
});
const minGrade = grades.reduce((min, currentVal) => {
  return Math.min(min, currentVal);
});
```

---

**Tallying**

```js
const votes = [
  "y",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "y",
  "n",
  "n",
  "y",
  "y",
  "y",
  "n",
];
const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {}); //INITIAL VALUE: {}

tally; // {y: 8, n: 6}
```

---

### **Default Parameters**

```js
function multiply(a, b = 1) {
  return a * b;
}
```

> default parameter come at the end.

---

### **Spread**

> Spread suntax allows an iterable such as an array to be **expanded** in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

**SPREAD for function calls**

> Expands an iterable (array, string, etc.) into a list of arguments

```js
const num = [9, 4, 3, 2];
Math.max(nums); //NaN
//Use Spread
Math.max(...nums); //67
// Same as calling;
//Math.max(9,3,2,8)
```

---

**SPREAD in Array Literals**

> Create a new array using an existing array. Spreads the element from one array into a new array.

```js

const nums1 = [1,2,3];
const nums1 = [4,5,6];

[...nums1, ...nums2];
//[1,2,3,4,5,6]

['a', 'b'. ...nums2];
//["a", "b", 4, 5, 6]

[...nums1, nums2, 7, 8, 9];
//[1,2,3,4,5,6,7,8,9]
```

---

**SPREAD in Object Literals**

> Copies properties from one object into another object literal.

```js
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
  legs: 4,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};
//{family: "Caninae", furry: true, legs: 4, isPet: true, adorable: true}

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};
//{legs: 4, family: "Felidae", isGrumpy: true, personality: "unpredictable"}

const catDog = {
  ...canine,
  ...feline,
};
//{family: "Felidae", furry: true, legs: 4}

//Order matters! Legs will be 3 here, because we set it AFTER spreading canine.
const tripod = {
  ...canine,
  legs: 3,
};
//{family: "Caninae", furry: true, legs: 3}

const catDogClone = {
  ...catDog,
};

const random = [
  ..."hello",
  {
    ...catDog,
  },
];
```

> Order matters. The last updated property overwrites the spread from previous objects.
>
> Only works with iterables.

```js
[...dog];
// Uncaught TypeError: Object is not iterable.
```

> Can Spread object into an object

> **Cannot** spread an object into an array.

> Can spread an array iunto an object.

> Can spread a string into an object.

> Can spread a string into an array.

> Can spread a string then an object as one entity in the array.

```js
const random = [..."hello", { ...catdog }];
//(6) ['h', 'e', 'l', 'l', 'o', {...}]
```

---

### **Rest**

> Opposite of Spread. It collects things down into a single array

> Used in functions that collected unlimited number of arguments.

**Arguments Object**

> Available inside every function.

> It's an array-like object
>
> - Has a length property
> - Does not have array methods like push/pop

> Contains all the arguments passed to the function
> Not available inside of arrow functions!

**REST Params**

> Collects all remaining arguments into an actual array.

```js
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) total += n;
  return total;
}
sumAll(1, 2); //3
sumAll(1, 2, 3, 4, 5); //15

//We can have named params and then collect the rest into an array:
function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

// We can use rest parameters in arrow functions!
const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);
```

---

### **Destructuring**

> A short,clean syntax to 'unpack':
>
> - values from arrays
> - Properties from objects

Array Destructuring:

```js
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// The old way:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

// Using Destructuring:
const [gold, silver, bronze] = raceResults;
gold; //'Eliud Kipchoge'
silver; //'Feyisa Lelisa'
bronze; //'Galen Rupp'

const [first, , , fourth] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [winner, ...others] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]
```

Object Destructuring:

```js
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// const {
//   first,
//   last,
//   time
// } = runner;

const { country: nation, title: honorific } = runner;

const { first, last, ...other } = runner;
```

> nation variable can be created to hold the value found in country.

---

**Parameter Destructuring**

```js
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// Rather than destructuring INSIDE the function body
// function print(person) {
//   const {
//     first,
//     last,
//     title
//   } = person;
//   console.log(`${first} ${last}, ${title}`)
// }

// We can unpack the values we want right in the parameter list:
function print({ first, last, title }) {
  console.log(`${first} ${last}, ${title}`);
}

const response = ["HTTP/1.1", "200 OK", "application/json"];

// Also works with array parameters:
function parseResponse([protocol, statusCode, contentType]) {
  console.log(`Status: ${statusCode}`);
}
```

---

### **Object Methods**

**Object Shorthand**

```js
const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum / arr.length;
  // Using the new shorthand property syntax:
  return {
    max,
    min,
    sum,
    avg,
  };
};
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);
```

---

**Computed Properties**

> We can use a variable as a key name in an object literal property!
> The content inside the '[]' is evaluated.

```js
const user = "Jools";

const userRoles = {
  [user]: "Admin",
};
userRoles; // {Jools:"Admin"}
```

---

**Methods**

> We can add functions as properties on objects

```js
// Adding methods to an object!
const math = {
  numbers: [1, 2, 3, 4, 5],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

// To execute multiply:
math.multiply(5, 9); //45

//Newer  Shorthand Syntax
const auth = {
  username: "TommyBot",
  login() {
    console.log("LOGGED YOU IN!");
  },
  logout() {
    console.log("GOODBYE");
  },
};
```

---

### **This**

> The value of `this` depends on the invocative context of the function it is used in.

**`This` in Functions**

> `this;` is like a reference to the object that is a reference to the current execution scope.
>
> `Window` is the global scope in the browser.
>
> When we declare functions, it is usually added as a method to the `Window object`.
>
> `var` declaration adds variables to the global scope `Window`
>
> `let ` and `const` are NOT added to the `Window`

**How to determine the value of `'this'`**

> Did you define the function with an arrow function?
>
> - write `console.log(this)` on the **valid** line above the arrow function. Value of 'this' in the arrow function will be equal to the console log
>
> Did you call `bind`, `call` or `apply` on the function when you invoked it?
>
> - 'this is equal to the first argument of `bind`,`call`, or `apply`.

```js
const printThis = function () {
  console.log(this);
};
printThis.call({ color: "red" });
//{color: "red"}
```

> All other cases
>
> - 'this' os equal to whatver is to the left of the '.'in the method call.

```js
function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const greet = function () {
  //this refers to the window (global scope object in the browser)
  console.log(this);
};
```

**`this` in Methods**

```js
function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in:
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};
```

**Invocation context matters!**

```js
function sayHi() {
  console.log("HI");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives" in
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    //Arrow functions don't get their 'own' this.
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHAH`);
  },
};

// INVOCATION CONTEXT MATTERS!!!
person.printBio(); //THIS refers to the person object

const printBio = person.printBio;
printBio(); //THIS refers to window object
```

---

### **The DOM - Document Object Model**

> The DOM is a JavaScript representation of a webpage.
>
> It's your JS 'window' into the contents of a webpage
>
> Its a bunch of objects you can interact with via JS

#### **Document**

> The document object is our entry point into the world of the DOM. It contains representations of all the content on a page, plus tons of useful methods and properties.

```js
console.dir(document);
```

> Selecting
>
> - getElementById
> - getElementsByTagName
> - getElementsByClassName

---

#### **getElementById**

```js
// To select the element with id of bear-photo:
document.getElementById("bear-photo");

//To select the element with id of main:
document.getElementById("main");
```

---

#### **getElementByTag**

```js
//To select all li's
document.getElementsByTagName("li");

// To select all h1's (there's only one on this page):
document.getElementsByTagName("h1");

//Remember, getElementsByTagName returns an array-like object (NOT a real array)
const inputs = document.getElementsByTagName("input"); //get all inputs
inputs[0]; //this works
inputs.pop(); //DOES NOT WORK! pop() is an array method, and this isn't an array!
```

> HTMLCollection - an array like object but not an array. indexes work but push() and pop() dont.
>
> It is iterable.

---

#### **getElementsByClassName**

```js
// To select all elements with the class of 'special':
document.getElementsByClassName("special");

//getElementsByClassName also returns an array-like object.
// We don't have access to array methods, but we can iterate:

const specials = document.getElementsByClassName("special");
for (let el of specials) {
  console.log(el);
}

//We can use spread to make an actual array:
const arr = [...specials];
arr.pop(); //this works because it's now an array!
```

---

#### **querySelector & querySelectorAll**

> Pass in a CSS selector

```js
//Finds first h1 element:
document.querySelector("h1");

//Finds first element with ID of red:
document.querySelector("#red");

//Finds first element with class of 'big'
document.querySelector(".big");

// To find ALL li's on the page:
document.querySelectorAll("li");

// To find ALL elements with the class of special on the page:
document.querySelectorAll(".special");
```

---

#### **innerText & textContent**

> innerText - purely the text content nothing about formatting or any scripts.
>
> tectContent - it includes line brakes, preserves formatting, shows hidden content, script text etc.

---

#### **innerHTML**

> returns both elements and text in string form.
>
> innerHTML parses the elements while innerText doesnt thereby allowing to create elements using innerHTML

---

#### **value, src, href, checked ...**

```js
const inputs = document.querySelectorAll("input");
inputs[0].value = "";
inputs[2].checked = false;
inputs[3].value = 275;
inputs[1].placeholder = "please enter your pass";
```

---

#### **Getting & Setting Attributes:**

```js
const range = document.querySelector('input[type= "range"]');

range;
// <input type=​"range" min=​"100" max=​"500">​
range.getAttribute("min");
// '100'

range.setAttribute("min", "-500");
range.value;
//'-394

range.setAttribute("type", "radio");
range.checked;
//false
```

---

#### **Finding Parent/Children/Sibling**

```js
const firstLi = document.querySelector('li');
firstLi
//<li class=​"special">​…​</li>​

​
firstLi.parentElement.parentElement.parentElement
//<html lang=​"en">
//​<head>​…​</head>
//​<body>​…​</body>​
//</html>​

firstLi.parentElement.children
//HTMLCollection(3) [li.special, li, li.special]

firstLi.nextSibling
firstLi.previousSibling

const allLis = document.querySelectorAll("li");
undefined
for (let li of allLis) {
    li.innerHTML = "WE ARE THE <b>CHAMPIONS</b>" }

```

---

#### **Altering Styles**

> attempting to read style properties will result in empty string because the styles are not defined inline most of the time.
>
> Similarly, updating the style property will add inline style to the elements.

```js
const lists = document.querySelectorAll("li");

lists[0].style;
//CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}

const heading1 = document.querySelector("h1");

heading1.style.color = "teal";
//'teal'
// In the .HTML changes reflect inline
<h1 class="header" style="color: teal;">
  My Webpage
</h1>;
```

> In JavaScript, the property names are camelCased, whereas in CSS they are kebab-cased. thus while manipulating dom, they need to remain camelCased.

```js
const paragraph1 = document.querySelector('p');

//kebab-case is not a valid identifier in JS
paragraph1.style.background-color = 'grey';
//VM624:1 Uncaught SyntaxError: Invalid left-hand side in assignment

//camelCase works for style propreties
paragraph1.style.backgroundColor = 'grey';
//'grey'

```

#### **getComputedStyle**

```js
const paragraph1 = document.querySelector("p");

const p1Style = getComputedStyle(paragraph1);

p1Style.backgroundColor;
//'rgba(0, 0, 0, 0)'
```

---

#### **manipulating Classes**

```js
todo.classList;

/*
DOMTokenList(2) ['todo', 'done', value: 'todo done']
0: "todo"
1: "done"
length: 2
value: "todo done"
[[Prototype]]: DOMTokenList
  add: ƒ add()
  contains: ƒ contains()
  entries: ƒ entries()
  forEach: ƒ forEach()
  item: ƒ item()
  keys: ƒ keys()
  length: (...)
  remove: ƒ remove()
  replace: ƒ replace()
  supports: ƒ supports()
  toString: ƒ toString()
  toggle: ƒ toggle()
  value: (...)
  values: ƒ values()
  constructor: ƒ DOMTokenList()
  Symbol(Symbol.iterator): ƒ values()
  Symbol(Symbol.toStringTag): "DOMTokenList"
  get length: ƒ length()
  get value: ƒ value()
  set value: ƒ value()
  [[Prototype]]: Object 
*/

todo.classList.remove("done");

todo.classList;
//DOMTokenList ['todo', value: 'todo']

todo.classList.add("done");

todo.classList;
//DOMTokenList(2) ['todo', 'done', value: 'todo done']

todo.classList.toggle("done");
//false
todo.classList.toggle("done");
//true
```

#### **Creating Elements**

> `appendChild()`
>
> This adds the new evement at the end

```js
const newH2 = document.createElement("h2");

newH2;
//<h2>​</h2>​
newH2.innerText = "I am new here";
//'I am new here'
newH2.classList.add("special");

newH2;
//<h2 class=​"special">​I am new here​</h2>​
const section = document.querySelector("section");

section.appendChild(newH2);
//<h2 class=​"special">​I am new here​</h2>​
```

> `insertBefore()`
>
> to add a new element at the beginning instead of at the end.

```js
const parentUl = document.querySelector("ul");

const firstLi = document.querySelector("li");

const newLi = document.createElement("li");

newLi.innerText = "I am a new Li";
//'I am a new Li'
parentUl.insertBefore(newLi, firstLi);
//<li>​I am a new Li​</li>​
```

> `insertAdjacentElement()`
>
> - `'beforebegin'`
> - `'afterend'`
> - `'afterbegin'`
> - '`beforeend'`

```js
const i = document.createElement("i");

i.innerText = "I am italics";

const firstP = document.querySelector("p");

firstP.insertAdjacentElement("beforebegin", i);
// I am italics
//
// Lorem ipsum dolor sit amet consectetur adipisicing elit ...

firstP.insertAdjacentElement("afterend", i);
//... veritatis, vitae voluptates optio commodi itaque.
//
//I am italics

firstP.insertAdjacentElement("afterbegin", i);
// I am italics Lorem ipsum dolor sit amet consectetur adipisicing elit...

firstP.insertAdjacentElement("beforeend", i);
//... In distinctio expedita doloribus veritatis, vitae voluptates optio commodi itaque. I am italics
```

> `append()`
>
> `prepend()`
>
> Can insert multiple elements at once

```js
firstP.append(i, newH2);

firstP.prepend(i, newH2);
```

> `remove()`
>
> `removeChild()`

```js
const uList = document.querySelector("section ul");

uList;
//<ul>​…​</ul>​<li>​…​</li>​<li class=​"special">​…​</li>​<li>​…​</li>​</ul>​
const removeMe = uList.querySelector(".special");
const deleted = uList.removeChild(removeMe);
deleted;
//<li class=​"special">​Peas​</li>​

uList.remove();
// removes directly without referencing parent.
```

---

### **Event Listeners**

```js
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  alert("CLICKED!!!");
});

btn.addEventListener("click", function () {
  console.log("SECOND THING!!");
});

btn.addEventListener("mouseover", function () {
  btn.innerText = "STOP TOUCHING ME";
});

btn.addEventListener("mouseout", function () {
  btn.innerText = "Click Me!";
});

window.addEventListener("scroll", function () {
  console.log("STOP SCROLLING!!");
});
```

#### Event Object

> Whenever you interact with your browser, your browser creates an event object.
>
> this event object has properties that describe that interaction.
>
> We need to create an "Event Listener" and add it to an element object from the DOM, like this...

`someElement.addEventListener('click', someFunction, true/false);`

> multiple event listeners can be added to the same element.

> event listener can be addded to the window object

```js
window.addEventListener("resize", function () {
  document.getElementById("demo").innerHTML = sometext;
});
```

#### **Key events**

When user presses a key or combination of different keys, keydown, keypress and keyup are triggered in that order:

    The keydown event is triggered first when user presses a key
    The keyup event is triggered last when user releases a key
    In between, the keypress event is triggered

These events serve different purposes.
The keydown and keyup events are often used to handle the physical keys, while the keypress event is used to handle characters which are being typed.
The keypress ignores keys such as delete, arrows, page up, page down, home, end, ctrl, alt, shift, esc, etc. So, if we need to handle those keys, it's better to use either keydown or keyup event.

```js
const input = document.querySelector("#userName");

input.addEventListener("keydown", function (e) {
  console.log("Key Down");
});
input.addEventListener("keyup", function (e) {
  console.log("Key Up");
});
input.addEventListener("keypress", function (e) {
  console.log("Key press");
});
```

#### **Form events**

```js
const creditCardInput = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelector = document.querySelector("#veggie");

form.addEventListener("sumbit", function (e) {
  e.preventDefault();

  console.log("cc", creditCardInput.value);
  console.log("terms", termsCheckbox.value);
  console.log("veggie", veggieSelector.value);

  //
  // send form data to db
  // append something to page using form data
});
```

#### Input & Change events

```js
const formData = {};

creditCardInput.addInputListener("input", (e) => {
  console.log("CC Changed", e);
  formData["cc"] = e.target.value;
});

veggieSelector.addInputListener("input", (e) => {
  console.log("Veggie Changed", e);
  formData["veggie"] = e.target.value;
});

termsCheckbox.addInputListener("input", (e) => {
  console.log("checkbox Changed", e);
  formData["terms"] = e.target.checked;
});
```

### Asynchronous Code, Callbacks & Promises

**Call Stack**

> the mechanism the JS interpreter uses to keep track of its place in a script that calls multiple functions
>
> How Js "knows" what function is currently being run and what fnctions are called withing that fucntion, etc.,

**How it works**

> when a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
>
> Any function that are called by that function are added to the call stack further up, and run where their calls are reached.
>
> When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code setting.

**how callback works**

> Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout)
>
> The JS call stack recognizes these web API functions and passes them off to the browser to take care of
>
> Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

**promises**

> A promise is an object representing the eventual completion or failure of an asynchronous operation.
>
> A promise is a returnable object to which you attach callbacks, instead of passing callbacks into a function.

```js
let promise = new Promise(function (resolve, reject) {
  // Code to execute
});
```

> The constructor function takes a function as an argument. This function is called the `executor function`.
>
> The executor function takes two arguments, `resolve` and `reject`. These are the callbacks provided by the JavaScript language.
>
> Your logic goes inside the executor function that runs automatically when a `new Promise` is created.
>
> For the promise to be effective, the executor function should call either of the callback functions, `resolve` or `reject`

```js
const btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const curLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        element.style.transform = `translateX(${curLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch(() => console.log("OUT OF SPACE, CANNOT MOVE"));
```

---

### **Making HTTP Requests**

#### **fetch**

```js
fetch("https://swapi.co/api/planets/")
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("FETCHED ALL PLANETS (first 10)");
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("FETCHED FIRST FILM, based off of first planet");
    console.log(data.title);
  })
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });
```

#### refracted fetch:

```js
const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

const printPlanets = (data) => {
  console.log("Loaded 10 more planets...");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = "https://swapi.co/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("SOMETHING WENT WRONG WITH FETCH!");
    console.log(err);
  });
```

---

#### **AXIOS**

> axios is an external library so we have to include it in the script.

```js
axios
  .get("https://swapi.co/api/planets/")
  .then((res) => {
    //We don't have to parse the JSON!
    console.log(res.data);
  })
  .catch((err) => {
    console.log("IN CATCH CALLBACK!!!");
    console.log(err);
  });

axios
  .get("https://swapi.co/api/planetaslkjdaklsjds/") //BAD URL!
  .then((res) => {
    //We don't need to check for a 200 status code, because...
    //Axios will reject the promise for us, unlike fetch!
    console.log(res.data);
  })
  .catch((err) => {
    //In this example with a not-found URL, this callback will run...
    console.log("IN CATCH CALLBACK!!!");
    console.log(err);
  });
```

#### **chaining using AXIOS**

```js
const fetchNextPlanets = (url = 'https://swapi.co/api/planets/') => {
	console.log(url);
	return axios.get(url);
};
const printPlanets = ({ data }) => {
	console.log(data);
	for (let planet of data.results) {
		console.log(planet.name);
	}
	return Promise.resolve(data.next);
};

fetchNextPlanets()
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.then(fetchNextPlanets)
	.then(printPlanets)
	.catch((err) => {
		console.log('ERROR!!', err);
	});

---
```

---

### **Async & Await**

#### **The async keyword**

> Async function always return a promise
>
> If the function returns a value the promise will be resolved with that value
>
> If the function throws an exception, the promise will be rejected

```js
// REGULAR function returns a string:
// function greet() {
// 	return 'HELLO!!!';
// }

// THE ASYNC KEYWORD!
// This function now returns a promise!
async function greet() {
  return "HELLO!!!"; //resolved with the value of 'HELLO!!!'
}
greet().then((val) => {
  console.log("PROMISE RESOLVED WITH: ", val);
});

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers!";
  }
  return x + y;
}
```

#### **The await keyword**

```js
async function getPlanets() {
  const res = await axios.get("https://swapi.co/api/planets/");
  console.log(res.data); //only runs once the previous line is complete (the axios promise is resolved)
}

getPlanets();
```

#### **Error handling**

```js
async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.co/api/planeklsajdalksts/");
    console.log(res.data);
  } catch (e) {
    console.log("IN CATCH!", e);
  }
}
getPlanets();
```

---

#### **Parallel vs. sequetial request**

```js
async function lightShow() {
  await changeBodyColor("teal", 1000);
  await changeBodyColor("pink", 1000);
  await changeBodyColor("indigo", 1000);
  await changeBodyColor("violet", 1000);
}
// IN PARALLEL...
// Everything is "sent off" at the same time
async function lightShow() {
  const p1 = changeBodyColor("teal", 1000);
  const p2 = changeBodyColor("pink", 1000);
  const p3 = changeBodyColor("indigo", 1000);
  const p4 = changeBodyColor("violet", 1000);
  await p1;
  await p2;
  await p3;
  await p4;
}

lightShow();
```

---

#### **Promise.all**

```js
// PARALLEL REQUESTS!
async function get3Pokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([prom1, prom2, prom3]);
  console.log(results);
}
```

---

### OOP

#### **Prototype**

> Prototypes are the mechanism by which JavaScript objects inherit features(properties and methods ) from one another.

> Its like a recepie using which objects are created.

**difference between `string.prototype` and `__proto__` ?**

> `.prototype` is the **actual object** (template object) where the methods are added.
>
> `__proto__` is the property name on the given string which **references to** the `.prototype` object.

```js
const dog = "timothy";
dog.__proto__;
// String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
```

---

#### **Factory function**

```js
//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex(); //firstColor.hex();
firstColor.rgb(); //"rgb(35, 255, 150)"

const black = makeColor(0, 0, 0);
black.rgb(); //"rgb(0, 0, 0)"
black.hex(); //"#0000s00"
```

---

#### **Constructors**

> Constructor functions start with capital letters

```js
// This is a Constructor Function...
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const { r, g, b } = this;
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();
```

---

#### **Classes, new**

```js
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
```

---

#### **Extends,Super,Subclasses**

```js
class Pet {
  constructor(name, age) {
    console.log("IN PET CONSTRUCTOR!");
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log("IN CAT CONSTRUCTOR!");
    super(name, age);
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWWW!!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}
```

---

### **Misc**

**clearInterval()**

> The global `clearInterval()` method cancels a timed, repeating action which was previously established by a call to `setInterval()`. If the parameter provided does not identify a previously established action, this method does nothing.
>
> **Syntax** >`clearInterval(intervalID)`

**parseFloat()**

> The `parseFloat()` function parses an argument (converting it to a string first if needed) and returns a floating point number.

**Syntax**
`parseFloat(string)`

**Parameters**
`string`

> The value to parse. If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.

**Return value**

> A floating point number parsed from the given `string`.

> Or `NaN` when the first non-whitespace character cannot be converted to a number.

---

**Getter and Setter**

---

**SVG's**

> Scallable Vector Graphics

<img src = "/17.Timer/img/svg.png" width="300px" />

**Apply**

### Node.Js :using JS app as a command line tool(CLI)

1. In `index.js` add this line on top to allow this file to be executed as an executable.

```js
#!/usr/bin/env node
```

2. terminal into the directory of the file and create a package.jason using the follwing command
```js
> npm init -y
```

3. goto the `package.json` file at the very bttom add this section: 
```js
{...
...
... ,
  "bin" : {
    "command_name" : "index.js"
  }
}
```
this instructs to run `index.js` when the the command is called in the terminal.

4. last step, run in terminal.
```js
npm link
```
### Starting a Project with node.js

1. Create a new project directory
2. Generate a package.json file
3. Install a few dependencies to help us write our project
4. Create a 'start' script to run our project

```js
mkdir ecomm
cd ecomm
npm init -y  //This creates a package.json file

mpm install express nodemon // installing the dependancies

// create an index.js file in the directory
// Go-into the package.json file and edit the script by deleting the "test" and replacing it with,
  "scripts": {
    "dev" : "nodemon index.js"
  },
// To run the project in terminal,
npm run dev

//note: nodemon is a tool that is going to automatically restart our application every single time there is a change in one of the files of our project!

// INSIDE THE INDEX.JS FILE,
//Requirein the express library to set up the server 
const express = require('express');

// app describes all the diffferent things our web server can do. 
// We will be customizing this object to tell our webserver what kind of requests it can expect to receive and what it should do about it.
const app = express();

// Adding a route handler directing the server what to do when it receives a network request form the browser
// Any time someone makes a network request to the root route '/' of the application, run the callback function
// When the callback function runs, we are sending back the string to whoever made that request.
app.get('/',(req, res) => {
    res.send('hi there');
});

app.post('/', (req,res)=>{
    res.send('Account Created')
});

// Tell the application to start listening for incoming network requests on particular port on the machine
app.listen(3000, ()=>{
    console.log('Listening');
})

// Make sure that the 'npm run dev' is still running. at this point, 'Listening' must appear on the terminal. If not check ports.
// On a new tab on web browser goto localhost:3000 and 'Hi there' must be displayed.
```
### Middleware Functions
- Function that does some pre-processing on the 'req' and 'res' object.
- they are executed we call the route function.

```js
// Requirein the middleware funciton body-parser
const bodyParser = require('body-parser');

/* app.use() HELPS US TO WIRE UP MIDDLEWARE IN OUR APP.
bodyParser library has a middleware fucntion called urlencoded which is specifically meant for handling requests coming in HTML form.
This is a middleware function that is going to take the incoming request.It's going to receive the body of the request bit by bit, 
parse it, put all that information together,and then make that information available on the req.body property.
The 'use' function we call that and we pass it in a middleware function if we want all of our different route handlers to have that middleware function be applied.
So now every single different route handler inside of our app will be automatically body parsed for us.
Do note that the body parser middleware or the Body Parser Library is going to automatically detect whether or not we are using it on a GET type request or a POST request or whatever and not apply it in the case of a GET request. */
app.use(bodyParser.urlencoded({ extended: true }));
```
