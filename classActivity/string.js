//STRINGS

const { Activity } = require("react");

let str = "WEBTECH";
console.log(str); //WEBTECH
console.log(typeof str); //string

//STRING INTERPOLATION : used to concatenate two or more strs instead of + operator

console.log(`Hello Arya ${str}`); //Hello Arya WEBTECH

let fname = "Rob";
console.log(`${fname}`); //Rob

const gameCount = new String("Arya");
console.log(gameCount);
console.log(gameCount.length); //4
console.log(gameCount.toLowerCase()); //arya
console.log(gameCount.toUpperCase()); //ARYA
console.log(gameCount.charAt(2)); //y
console.log(gameCount.indexOf("r")); //1

//Activity 2
//Finds the last occurrence of a substring.
console.log(str.lastIndexOf("hello")); // o/p : -1

//Checks if a string contains a value.
console.log(str.includes("JS")); // false
console.log(str.includes("hello")); // false
console.log(str.includes("HELLO")); // true

//Checks if string starts with given value.
console.log(str.startsWith("WEBTECH")); // true
console.log(str.startsWith("Script")); // false

//Checks if string ends with given value.
console.log(str.endsWith("Script")); // false
console.log(str.endsWith("HELLO")); // true

//Extracts part of a string.
let str1 = "Programming";
console.log(str1.slice(0, 6)); // Progra

//Similar to slice() (no negative index).
console.log(str1.substring(0, 6)); // Progra

//Replaces first match.
let str2 = "I love JS";
console.log(str2.replace("JS", "JavaScript")); //o/p : I love JavaScript

//Replaces all matches.
let str3 = "cat cat dog";
console.log(str3.replaceAll("cat", "lion")); //o/p : lion lion dog

//Splits string into array.
let str4 = "apple,banana,orange";
console.log(str4.split(",")); //o/p : [ 'apple', 'banana', 'orange' ]

//Removes whitespace from both sides.
let str5 = "   Hello   ";
console.log(str5.trim()); //o/p : Hello

//Join two strings.
console.log(str1.concat(" ", str2)); //o/p : Programming I love JS

//Repeats string n times.
console.log(str.repeat(3)); //o/p : WEBTECH HELLOWEBTECH HELLOWEBTECH HELLO

//Searches string and returns index.
let str6 = "Welcome to JS";
console.log(str6.search("JS")); //o/p : 11
