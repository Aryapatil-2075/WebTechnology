//Number to String typecasting
let num = 33;
let numstring = String(num);
console.log(numstring);
console.log(typeof num);
console.log(typeof numstring);

// String to Number typecasting
let string = "34ad";
let stringnum = Number(string);
console.log(stringnum);
console.log(typeof string);
console.log(typeof stringnum);

//Activity No : 1

// Number to Boolean
let n1 = 0;
let n2 = 10;
console.log(Boolean(n1)); //false
console.log(Boolean(n2)); //true

// Boolean to Number

let s1 = true;
let s2 = false;
console.log(Number(s1)); //1
console.log(Number(s2)); //0

//String to Boolean
let S1 = "";
let S2 = "arya";
console.log(Boolean(S1)); //false
console.log(Boolean(S2)); //true

//Boolean to String

let B1 = true;
let B2 = false;
console.log(String(B1)); //true
console.log(String(B2)); //false

//String to Number
let x1 = "123";
let x2 = "123abc";
let x3 = "   45   ";
console.log(Number(x1)); //123
console.log(Number(x2)); //NaN
console.log(Number(x3)); //45
console.log(isNaN(Number("abc"))); //true

//parseInt and ParseFloat
let c1 = "34px";
let c2 = "3.4";
console.log(parseInt(c1)); //34
console.log(parseFloat(c2)); //3.4

console.log(parseFloat(c1)); //34
console.log(parseInt(c2)); //3

console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log(String(null)); //null
console.log(String(undefined)); //undefined

console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
