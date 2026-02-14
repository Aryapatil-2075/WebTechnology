//Difference between Arrow function and simplefunction
//What is use of this keyword
//why we not use this keyword in arrow function
//write a code for arrow function with 3 example
//write a code for switch case in javascript
//how to use truhty and falsy values with eg
//ternary operator in js
//write a code for how to use loops in array with eg
//what is difference between for of and for in with eg
//how to use filter and map with 3 examples

//Difference between Arrow function and simplefunction

//simplefunction
function games() {
  console.log("GTA-5");
}
games();

//Arrow Function
const game = () => {
  console.log("GTA-6");
};
game();

//What is use of this keyword
const Person = {
  name: "Arya",
  greet: function () {
    return "Hello ," + this.name;
  },
};
console.log(Person.greet()); // Output: Hello, John

//write a code for arrow function with 3 example
//1)
const sum = (a, b) => a + b;
console.log(sum(3, 4));

//2)
const EvenOdd = (num) => (num % 2 == 0 ? "Even" : "Odd");
console.log(EvenOdd(4));

//3)
const printArray = (arr) => console.log(arr);
printArray([1, 2, 34, 4]);

//write a code for switch case in javascript
let month = 3;
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("jul");
    break;
  case 8:
    console.log("aug");
    break;
  case 9:
    console.log("Sept");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("Invalid choice");
}

//ternary operator in js
let age = 17;
console.log(age > 18 ? "Person can drive" : "Person can't drive ");

//write a code for how to use loops in array with eg
//for
const fruits = ["apple", "banana", "orange", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruits at index ${i} :${fruits[i]}`);
}

//forEach

const number = [10, 20, 30, 40];
number.forEach(function (number, index) {
  console.log(`Number at index ${index} is: ${number}`);
});

//for of loop
const colors = ["red", "pink", "blue"];
for (let color of colors) {
}
