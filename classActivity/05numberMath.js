let a = 10;
let balance = new Number(100000000000000000000);
console.log(balance, typeof balance);
console.log(balance.toString());
console.log(balance.toFixed(2)); //100000000000000000000.00
//when we use precson values then we use toFixed
console.log(balance.toString().length); //21
console.log(balance.toLocaleString()); //10,00,00,00,00,00,00,00,00,000//india
console.log(balance.toLocaleString("en-US")); //100,000,000,000,000,000,000

console.log(Math);
console.log(Math.abs(-4)); //4 absolute value neg to pos pos will be pos

console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.6)); //5
console.log(Math.floor(4.6)); //4
console.log(Math.min(1, 2, 3, 4)); //1
console.log(Math.max(1, 2, 3, 4)); //4

//ActivityMath.random
