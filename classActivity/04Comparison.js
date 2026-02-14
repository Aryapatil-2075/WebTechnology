console.log(2 > 1);
console.log(2 < 1);
console.log(4 >= 3);
console.log(5 <= 1);
console.log(3 != 3);
console.log(10 == 10);

console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null <= 0);
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined < 0);
console.log("2" === 2);
console.log("2" == 2);

let a = 10;
let b = 20;
let c = "10";

// 1) Equal to (==) : Checks only value, not data type
console.log(a == c); // true because "10" (string) is converted to 10 (number) before comparison

// 2) Strict equal to (===) : Checks both value and data type
console.log(a === c); // false because a is number (10) and c is string ("10"), types are different

// 3) Not equal to (!=) : Checks only value, not data type
console.log(a != b); // true because 10 is not equal to 20
console.log(a != c); // false because "10" is converted to 10, and 10 == 10, so NOT equal becomes false

// 4) Strict not equal to (!==) : Checks both value and data type
console.log(a !== c); // true because a (number) is not strictly equal to c (string)

// 5) Greater than (>)console.log(b > a);  // true because 20 is greater than 10

// 6) Less than (<)
console.log(a < b); // true because 10 is less than 20

// 7) Greater than or equal to (>=)
console.log(a >= 10); // true because a is equal to 10

console.log(a >= b); // false because 10 is not greater than or equal to 20

// 8) Less than or equal to (<=)
console.log(a <= 10); // true because a is equal to 10

console.log(b <= a); // false because 20 is not less than or equal to 10

// 9) Comparing strings
let x = "apple";
let y = "banana";

console.log(x == y); // false because "apple" is not equal to "banana"

console.log(x < y); // true because "apple" comes before "banana" alphabetically (ASCII order)

// 10) Boolean comparison
let isTrue = true;
let isFalse = false;

console.log(isTrue == 1); // true because true is converted to 1

console.log(isFalse == 0); // true because false is converted to 0

console.log(isTrue === 1); // false because true is boolean and 1 is number (strict comparison)

// 11) Null and Undefined comparison
let n = null;
let u = undefined;

console.log(n == u); // true special case in JavaScript: null == undefined is true

console.log(n === u); // false because null and undefined are different data types

console.log(n == 0); // false null is NOT equal to 0

console.log(u == 0); // false undefined is NOT equal to 0

// 12) NaN comparison
let value = NaN;

console.log(value == NaN); // false NaN is not equal to anything, even itself

console.log(isNaN(value)); // true correct way to check NaN
