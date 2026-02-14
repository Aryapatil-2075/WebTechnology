//Array

let myArray = [0, 1, 2, 3, 4, 5];
console.log("My Array :" + myArray);
console.log(typeof myArray);

const anotherArray = new Array(0, 1, 2);
console.log("My Arr :" + anotherArray[1]);

//Array Methods

anotherArray.push(7); //0 1 2 3 7
console.log("Pushing value :" + anotherArray);

anotherArray.pop(); //0 1 2 3
console.log("Poping value :" + anotherArray);

anotherArray.unshift(9); //9 0 1 2
console.log("Unshifting value :" + anotherArray);
//shifts all elements and add at first position

console.log("Shift :" + anotherArray.shift()); //9
anotherArray.shift();
console.log(anotherArray); //[1 2] 9 del

console.log("Includes:" + anotherArray.includes()); //false
console.log("Includes:" + anotherArray.includes(1)); //true

console.log("Index Of :" + anotherArray.indexOf(2)); //1

// ---------------- ITERATION METHODS ----------------
let numbers1 = [10, 20, 30, 40, 50];
let names = ["Amit", "Riya", "Neha", "Karan"];
// forEach()
console.log("forEach values:");
numbers1.forEach((n) => console.log(n));

// map() - create new array
let doubled = numbers1.map((n) => n * 2);
console.log("map (doubled):", doubled);

// filter() - select values
let filtered = numbers1.filter((n) => n > 25);
console.log("filter (>25):", filtered);

// reduce() - combine values
let sum = numbers1.reduce((total, n) => total + n, 0);
console.log("reduce (sum):", sum);

// ---------------- STRING CONVERSION METHODS ----------------

// join()
let joined = names.join(" - ");
console.log("join():", joined);

// toString()
console.log("toString():", names.toString());

// ---------------- SORTING & REVERSING ----------------

// sort()
let sorted = [...numbers1].sort((a, b) => a - b);
console.log("Sorted:", sorted);

// reverse()
let reversed = [...numbers1].reverse();
console.log("Reversed:", reversed);

// ---------------- MERGE & COPY METHODS ----------------

// concat()
let merged = numbers1.concat([70, 80]);
console.log("concat():", merged);

// spread operator (copy)
let copy = [...numbers1];
console.log("Copied array:", copy);

// ---------------- CHECK TYPE ----------------

// isArray()
console.log("Is numbers an array?:", Array.isArray(numbers1));

// ---------------- LENGTH ----------------
console.log("Length of array:", numbers1.length);

//slice and split use in Array ---- activity

//slice() is used to extract a portion of an array or string
//Arrays
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(numbers); // original array unchanged [ 10, 20, 30, 40, 50 ]

//String -Slice()
let str = "JavaScript";

let part = str.slice(0, 4);

console.log(part); // Java

//Split() is used to convert a string into an array based on a separator.
let text = "HTML CSS JavaScript";

let words = text.split(" ");

console.log(words); // ["HTML", "CSS", "JavaScript"]

//both
let sentence = "I love JavaScript programming";

let result1 = sentence.split(" ").slice(1, 3);

console.log(result1); // ["love", "JavaScript"]
