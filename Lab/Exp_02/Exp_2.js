// Activity 1 – Even or Odd using function
function checkEvenOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

let num1 = 7;
document.getElementById("activity1").innerHTML =
  "<h3>Activity 1 : Even or Odd using function</h3>" +
  "Number : " +
  num1 +
  "<br>" +
  "Result : " +
  checkEvenOdd(num1);

// Activity 2 – Sum of Array using function
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr2 = [10, 20, 30, 40];
document.getElementById("activity2").innerHTML =
  "<h3>Activity 2 : Sum of Array using function</h3>" +
  "Array : " +
  arr2.join(", ") +
  "<br>" +
  "Sum : " +
  sumOfArray(arr2);

// Activity 3 – Largest Number
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let arr3 = [5, 12, 8, 20, 3];
document.getElementById("activity3").innerHTML =
  "<h3>Activity 3 : Largest number in array</h3>" +
  "Array : " +
  arr3.join(", ") +
  "<br>" +
  "Largest : " +
  findLargest(arr3);

// Activity 4 – Reverse String
function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

let arr6 = [10, 20, 10, 30, 20, 40, 50, 40];

document.getElementById("activity4").innerHTML =
  "<h3>Activity 4 : Remove duplicate elements in Array</h3>" +
  "Original Array : " +
  arr6.join(", ") +
  "<br>" +
  "Result Array : " +
  removeDuplicates(arr6).join(", ");

// Activity 5 – Find Missing Number in Array
function findMissingNumber(arr, n) {
  let totalSum = (n * (n + 1)) / 2; // sum of 1 to n
  let arraySum = 0;

  for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
  }

  return totalSum - arraySum;
}

let arr5 = [1, 2, 3, 5, 6]; // Missing number is 4
let n = 6;

document.getElementById("activity5").innerHTML =
  "<h3>Activity 5 : Find Missing Number in array </h3>" +
  "Array : " +
  arr5.join(", ") +
  "<br>" +
  "Result  Missing Number = " +
  findMissingNumber(arr5, n);

// Activity 6 – reverse a String
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}

let str4 = "JavaScript";
document.getElementById("activity6").innerHTML =
  "<h3>Activity 6 : Reverse a String</h3>" +
  "Original : " +
  str4 +
  "<br>" +
  "Reversed : " +
  reverseString(str4);

// Activity 7 – Fibonacci Series
function fibonacci(n) {
  let a = 0,
    b = 1;
  let series = "0 1";

  for (let i = 2; i < n; i++) {
    let c = a + b;
    series += " " + c; // space instead of comma
    a = b;
    b = c;
  }
  return series;
}

document.getElementById("activity7").innerHTML =
  "<h3>Activity 7: Fibonacci Series</h3>" + "Result: " + fibonacci(7);

// Activity 8 – Palindrome Check
function isPalindrome(word) {
  let rev = word.split("").reverse().join("");
  return word === rev;
}

let word = "pop";
document.getElementById("activity8").innerHTML =
  "<h3>Activity 8 : Palindrome String</h3>" +
  "Word : " +
  word +
  "<br>" +
  "Result : " +
  (isPalindrome(word) ? "Palindrome" : "Not Palindrome");

// Activity 9 – Palindrome Number
function isPalindromeNumber(num9) {
  let original = num9;
  let reverse = 0;

  while (num9 > 0) {
    let digit = num9 % 10;
    reverse = reverse * 10 + digit;
    num9 = Math.floor(num9 / 10);
  }

  return original === reverse;
}

let num9 = 121;

document.getElementById("activity9").innerHTML =
  "<h3>Activity 9 : Palindrome Number</h3>" +
  "Number : " +
  num9 +
  "<br>" +
  "Result : " +
  (isPalindromeNumber(num9) ? "Palindrome Number" : "Not a Palindrome Number");

// Activity 10 – Find Largest Number in String
function findLargestNumberInString(str10) {
  let numbers = str10.match(/\d+/g); // extract all numbers from string
  let largest = parseInt(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    let num = parseInt(numbers[i]);
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

let str10 = "The numbers are 45, 120, 89, 300 and 67";

document.getElementById("activity10").innerHTML =
  "<h3>Activity 10 : Largest Number in String</h3>" +
  "String : " +
  str10 +
  "<br>" +
  "Result : Largest Number = " +
  findLargestNumberInString(str10);

// Activity 11 – Addition of Two Numbers
function countVowels(str11) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < str11.length; i++) {
    if (vowels.includes(str11[i])) {
      count++;
    }
  }
  return count;
}

let str11 = "JavaScript Programming";

document.getElementById("activity11").innerHTML =
  "<h3>Activity 11 : Count Vowels in string</h3>" +
  "String : " +
  str11 +
  "<br>" +
  "Result : Number of Vowels = " +
  countVowels(str11);

// Activity 12 – Combine Array and Object
function displayStudents(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result +=
      "Name: " +
      arr[i].name +
      ", Age: " +
      arr[i].age +
      ", City: " +
      arr[i].city +
      "<br>";
  }

  return result;
}

let students = [
  { name: "Arya", age: 20, city: "Pune" },
  { name: "Shruthi", age: 19, city: "Ichalkaranji" },
];

document.getElementById("activity12").innerHTML =
  "<h3>Activity 12 : Array and Object</h3>" + displayStudents(students);
