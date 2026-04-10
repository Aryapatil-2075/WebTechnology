/* Q. Difference Between let, const, var
var : oldest way to declare variables in js.
      it allows redeclaration.
      it allows ressignment.
      var variables are initialized with undefined value. */
var x = 10;
var x = 20; // allowed (redeclaration)
x = 30; // allowed (reassignment)
console.log(x); // 30
/* 
let : we can access these variables inside the block only where it is declared.
      it does not allow redeclaration in same scope.
      it allows ressignment means you can change the value as per need.
      let variables are not initialized.
      before declaring a let variable if we try to access that variable causes a ReferenceError.
*/
let y = 10;
// let y = 20;   // Error (redeclaration not allowed)
y = 25; // allowed (reassignment)
console.log(y);
if (true) {
  let z = 50;
  console.log(z); // 50
}
console.log(z); // Error (z is block-scoped)

/* 
const : used to declare a constant values.
        it does not allow redeclaration in same scope.
        does not allows reassignment.
        const variables are not initialized.
        Important Note:
            Even though a const variable cannot be reassigned, 
            if it holds an object or array,
            the contents of that object or array can be modified.
 */

const PI = 3.14;
// PI = 3.1415;   // Error (reassignment not allowed)

const arr1 = [1, 2, 3];
arr.push(4); // allowed (modifying array content)
console.log(arr); // [1, 2, 3, 4]

/* Q. Difference between null and undefined
null : it is intentionally empty value set by programmer.
        it is the type of object.
        it is used to clear or reset the value.
        
undefined : it is the variable declared but not assigned any value.
            it is set by the javascript which is the type of undefined.
            it is used to handle the missing values.
*/
let a = null; // explicitly empty
let b; // undefined
console.log(a); // null
console.log(b); // undefined

/* Q. Datatypes in JavaScript

a) Primitive Data Types : Primitive types store single values.

| Type      | Example               |
| --------- | --------------------- |
| Number    | 17, 3.14              |
| String    | "Shravani"            |
| Boolean   | true, false           |
| Undefined | undefined             |
| Null      | null                  |
| Symbol    | Symbol("id")          |
| BigInt    | 12345678901234567890n |

 b) Non-Primitive (Reference) Data Types : These store collections or complex data.

| Type     | Example                       |
| -------- | ----------------------------- |
| Object   | { name: "Shravani", age: 20 } |
| Array    | [10, 20, 30]                  |
| Function | function greet() {}           |
| Date     | new Date()                    |


 Q. Variable Declaration 

 a) Declare variables of different data types */

console.log(" Declaring a variables of different data types ");
let num = 17; // Number
console.log(num);

let name = "Arya"; // String
console.log(name);

let isStudent = true; // Boolean
console.log(isStudent);

let city; // Undefined
console.log(city);

let score = null; // Null
console.log(score);

let arr = [17, 5, 26]; // Array
console.log(arr);

let person = { name: "Arya" }; // Object
console.log(person);

// b) Check their type using typeof

console.log("Checking their type using typeof ");
console.log(typeof num); // number
console.log(typeof name); // string
console.log(typeof isStudent); // boolean
console.log(typeof city); // undefined
console.log(typeof score); // object (Known JavaScript bug)
console.log(typeof arr); // object
console.log(typeof person); // object
